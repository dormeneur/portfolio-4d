"""Voronoi-fracture a cube into shards and export them as one GLB.

Same cell-by-cell method Voro++ uses (and Blender's Cell Fracture addon, which
bundles Voro++): each cell starts as the whole cube and is clipped by the
perpendicular bisector half-space between its site and every other site.
Done with bmesh.bisect_plane so it needs no addon.

Regenerate:  blender --background --factory-startup --python scripts/fracture_cube.py
"""

import bmesh
import bpy
import mathutils
import os
import random

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "models", "cube-shards.glb")
SITES = 28          # shard count
SIZE = 2.0          # cube edge length (matches the old cube.glb)
HALF = SIZE / 2
SEED = 7            # fixed so re-runs produce the identical model

random.seed(SEED)
os.makedirs(os.path.dirname(OUT), exist_ok=True)

# clear anything left from a previous run
for ob in list(bpy.data.objects):
    if ob.name.startswith("Shard_"):
        bpy.data.objects.remove(ob, do_unlink=True)


def mat(name, base, metal, rough, emit=None, strength=0.0):
    m = bpy.data.materials.get(name) or bpy.data.materials.new(name)
    m.use_nodes = True
    p = m.node_tree.nodes["Principled BSDF"]
    p.inputs["Base Color"].default_value = (*base, 1)
    p.inputs["Metallic"].default_value = metal
    p.inputs["Roughness"].default_value = rough
    if emit:
        p.inputs["Emission Color"].default_value = (*emit, 1)
        p.inputs["Emission Strength"].default_value = strength
    return m


# site --primary (dark) = hsl(0 72% 50%) -> linear ~ (0.71, 0.017, 0.017)
RED = (0.71, 0.017, 0.017)
shell_mat = mat("ShardShell", (0.02, 0.02, 0.022), 0.9, 0.28)
core_mat = mat("ShardCore", RED, 0.2, 0.4, RED, 3.0)

# sites pulled toward the middle so the surface shards stay reasonably even
sites = []
for _ in range(SITES):
    sites.append(mathutils.Vector((
        random.uniform(-HALF, HALF) * 0.82,
        random.uniform(-HALF, HALF) * 0.82,
        random.uniform(-HALF, HALF) * 0.82,
    )))

shards = []
for i, site in enumerate(sites):
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=SIZE)

    for j, other in enumerate(sites):
        if i == j:
            continue
        normal = other - site
        if normal.length < 1e-6:
            continue
        # keep the half-space on this site's side of the bisector
        bmesh.ops.bisect_plane(
            bm,
            geom=list(bm.verts) + list(bm.edges) + list(bm.faces),
            plane_co=(site + other) / 2,
            plane_no=normal.normalized(),
            clear_outer=True,
        )
        # cap every cut immediately so the cell stays a closed solid — capping
        # only at the end loses cells that never touch the cube surface
        bmesh.ops.holes_fill(bm, edges=[e for e in bm.edges if e.is_boundary])
        if not bm.faces:
            break

    if not bm.faces:
        bm.free()
        continue

    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)

    # faces still sitting on the original cube surface keep the dark shell
    # material; every face revealed by a cut gets the glowing core material
    for f in bm.faces:
        c = f.calc_center_median()
        on_shell = (
            abs(abs(c.x) - HALF) < 1e-4
            or abs(abs(c.y) - HALF) < 1e-4
            or abs(abs(c.z) - HALF) < 1e-4
        )
        f.material_index = 0 if on_shell else 1

    me = bpy.data.meshes.new(f"Shard_{i:02d}")
    bm.to_mesh(me)
    bm.free()
    me.materials.append(shell_mat)
    me.materials.append(core_mat)

    ob = bpy.data.objects.new(f"Shard_{i:02d}", me)
    bpy.context.collection.objects.link(ob)
    shards.append(ob)

# origin to each shard's own centre, so the web code can fling a shard
# outward and spin it about itself using only the node transform
bpy.ops.object.select_all(action="DESELECT")
for ob in shards:
    ob.select_set(True)
bpy.context.view_layer.objects.active = shards[0]
bpy.ops.object.origin_set(type="ORIGIN_GEOMETRY", center="MEDIAN")

for ob in shards:
    bev = ob.modifiers.new("Bevel", "BEVEL")
    bev.width = 0.012
    bev.segments = 1
    bev.limit_method = "ANGLE"
    bev.angle_limit = 0.5

bpy.ops.export_scene.gltf(
    filepath=OUT,
    export_format="GLB",
    use_selection=True,
    export_apply=True,
)
print(f"EXPORTED {OUT} shards={len(shards)} bytes={os.path.getsize(OUT)}")
