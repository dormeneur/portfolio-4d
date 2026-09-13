"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js"

// real mesh modelled + exported from Blender (beveled cube, glowing red
// bevel edges) — regenerate with the Blender script, keep this path
const MODEL_URL = "/models/cube.glb"

// fixed canvas size — every responsive/phase resize happens on the
// wrapper's CSS transform, so the WebGL buffer never needs resizing
const CANVAS = 400

const SPARKS = [
  { dir: "top", delay: "0s", style: { left: "50%", bottom: "50%", width: "3px", height: "46vh", transform: "translateX(-50%)", background: "linear-gradient(to top, hsl(var(--primary)/0.9), transparent)" } },
  { dir: "bottom", delay: "0.15s", style: { left: "50%", top: "50%", width: "3px", height: "46vh", transform: "translateX(-50%)", background: "linear-gradient(to bottom, hsl(var(--primary)/0.9), transparent)" } },
  { dir: "left", delay: "0.3s", style: { top: "50%", right: "50%", height: "3px", width: "46vw", transform: "translateY(-50%)", background: "linear-gradient(to left, hsl(var(--primary)/0.9), transparent)" } },
  { dir: "right", delay: "0.45s", style: { top: "50%", left: "50%", height: "3px", width: "46vw", transform: "translateY(-50%)", background: "linear-gradient(to right, hsl(var(--primary)/0.9), transparent)" } },
]

function randomAxis() {
  const x = Math.random() * 2 - 1
  const y = Math.random() * 2 - 1
  const z = Math.random() * 2 - 1
  const len = Math.hypot(x, y, z) || 1
  return { x: x / len, y: y / len, z: z / len }
}

// on narrow screens the hero copy spans the full width, so the cube is
// tucked into the top-right corner (out of the text column) and dimmed
// further instead of floating in the middle of a paragraph
function responsiveLayout() {
  const w = window.innerWidth
  if (w < 480) return { scale: 0.42, anchorX: 88, anchorY: 11, opacityMul: 0.5 }
  if (w < 768) return { scale: 0.55, anchorX: 85, anchorY: 13, opacityMul: 0.65 }
  if (w < 1100) return { scale: 0.85, anchorX: 78, anchorY: 28, opacityMul: 1 }
  return { scale: 1, anchorX: 76, anchorY: 30, opacityMul: 1 }
}

type Phase = "loading" | "settling" | "ambient"

const DEG = Math.PI / 180

// default assumption is "still loading" — matches the server-rendered
// markup so there's no hydration mismatch, and a useLayoutEffect on mount
// corrects it before the browser paints if the page turns out to already
// be fully loaded (warm cache / fast refresh), so nothing forced ever flashes
export function BackgroundCube() {
  const [needsLoader, setNeedsLoader] = useState(true)
  const [phase, setPhase] = useState<Phase>("loading")
  const phaseRef = useRef<Phase>("loading")
  const positionerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    phaseRef.current = phase
  }, [phase])

  useLayoutEffect(() => {
    if (document.readyState === "complete") {
      setNeedsLoader(false)
      setPhase("ambient")
      return
    }
    const onLoad = () => {
      setPhase("settling")
      window.setTimeout(() => setPhase("ambient"), 1400)
    }
    window.addEventListener("load", onLoad)
    return () => window.removeEventListener("load", onLoad)
  }, [])

  useEffect(() => {
    const positioner = positionerRef.current
    const canvas = canvasRef.current
    if (!positioner || !canvas) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio))
    renderer.setSize(CANVAS, CANVAS, false)
    renderer.toneMapping = THREE.ACESFilmicToneMapping

    const scene = new THREE.Scene()
    const pmrem = new THREE.PMREMGenerator(renderer)
    const envTexture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
    scene.environment = envTexture // metallic body is black without reflections
    const rim = new THREE.PointLight(0xdb2424, 30, 0, 1.5)
    rim.position.set(-3, 2, 3)
    scene.add(rim)

    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100)
    camera.position.set(0, 0, 8)

    const pivot = new THREE.Group()
    scene.add(pivot)
    new GLTFLoader().load(MODEL_URL, (gltf) => pivot.add(gltf.scene))

    // rotation state (degrees, CSS-era convention): base rest tilt + a
    // spring-damped offset that interaction impulses displace and inertia
    // settles back to zero
    const theta = { x: -22, y: 34, z: 0 }
    const velocity = { x: 0, y: 0, z: 0 }
    const restOffset = { x: -22, y: 34, z: 0 }

    // position/scale/opacity glide toward whatever the current phase wants —
    // seeded from the *actual* starting phase so an already-loaded page
    // (warm cache, fast refresh) starts at rest instead of spuriously
    // flying in from a center pose that was never shown on screen
    let layout = responsiveLayout()
    const startsLoading = phaseRef.current === "loading"
    let posX = startsLoading ? 50 : layout.anchorX
    let posY = startsLoading ? 50 : layout.anchorY
    let scale = startsLoading ? (reduceMotion ? 0.85 : 0.7) : (reduceMotion ? 0.85 : 0.62) * layout.scale
    let opacity = startsLoading ? 1 : Math.max(0.06, 0.4 * layout.opacityMul)

    let lastPointer: { x: number; y: number } | null = null
    let dragDistance = 0

    const applyImpulse = (strength: number) => {
      if (reduceMotion) return
      const axis = randomAxis()
      velocity.x += axis.x * strength
      velocity.y += axis.y * strength
      velocity.z += axis.z * strength
    }

    const handlePointerMove = (e: PointerEvent) => {
      if (lastPointer) {
        const dx = e.clientX - lastPointer.x
        const dy = e.clientY - lastPointer.y
        dragDistance += Math.hypot(dx, dy)
        if (dragDistance > 55) {
          applyImpulse(Math.min(70, dragDistance * 0.9))
          dragDistance = 0
        }
      }
      lastPointer = { x: e.clientX, y: e.clientY }
    }

    const handlePointerDown = () => applyImpulse(130)

    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const y = window.scrollY
      const delta = y - lastScrollY
      lastScrollY = y
      if (Math.abs(delta) > 2) applyImpulse(Math.min(90, Math.abs(delta) * 1.1))
    }

    const handleResize = () => {
      layout = responsiveLayout()
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerdown", handlePointerDown, { passive: true })
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize)

    let rafId = 0
    let lastTime = performance.now()

    const tick = (time: number) => {
      const dt = Math.min(48, time - lastTime) / 1000
      lastTime = time
      const t = time

      const currentPhase = phaseRef.current

      if (currentPhase === "loading") {
        // constant tumble around a fixed diagonal axis — the cool part of
        // the loading screen, deliberately unrelated to the rest-spring
        if (!reduceMotion) {
          velocity.x = 46
          velocity.y = 130
          velocity.z = 24
          theta.x += velocity.x * dt
          theta.y += velocity.y * dt
          theta.z += velocity.z * dt
        }

        posX = 50
        posY = 50
        scale = reduceMotion ? 0.85 : 0.7
        opacity = 1
      } else {
        // spring-damped return to rest, displaced by interaction impulses —
        // gives the tumble weight and follow-through instead of a rigid snap
        const stiffness = 4.2
        const damping = 3.1
        ;(["x", "y", "z"] as const).forEach((axis) => {
          const offset = theta[axis] - restOffset[axis]
          const accel = -stiffness * offset - damping * velocity[axis]
          velocity[axis] += accel * dt
          theta[axis] += velocity[axis] * dt
        })

        const scrollY = window.scrollY
        const docH = document.documentElement.scrollHeight - window.innerHeight
        const scrollFrac = docH > 0 ? Math.min(1, Math.max(0, scrollY / docH)) : 0

        const driftX = reduceMotion ? 0 : Math.sin(t * 0.00022) * 9
        const driftY = reduceMotion ? 0 : Math.cos(t * 0.00017) * 7
        const targetX = layout.anchorX + driftX
        const targetY = layout.anchorY + driftY + scrollFrac * 14
        const targetScale = (reduceMotion ? 0.85 : 0.62) * layout.scale
        const baseOpacity = currentPhase === "settling" ? 0.55 : 0.4 - scrollFrac * 0.28
        const targetOpacity = baseOpacity * layout.opacityMul

        const lerp = (a: number, b: number, f: number) => a + (b - a) * f
        const followRate = currentPhase === "settling" ? 1 - Math.exp(-dt / 0.75) : 1 - Math.exp(-dt / 0.5)
        posX = lerp(posX, targetX, followRate)
        posY = lerp(posY, targetY, followRate)
        scale = lerp(scale, targetScale, followRate)
        opacity = lerp(opacity, Math.max(0.06, targetOpacity), followRate)
      }

      positioner.style.left = `${posX}%`
      positioner.style.top = `${posY}%`
      positioner.style.opacity = String(opacity)
      canvas.style.transform = `translate(-50%, -50%) scale(${scale})`

      // CSS y-axis points down, WebGL's points up — flip x/z so the rest
      // pose still shows the top face like the old CSS cube did
      pivot.rotation.set(-theta.x * DEG, theta.y * DEG, -theta.z * DEG)
      renderer.render(scene, camera)

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerdown", handlePointerDown)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      envTexture.dispose()
      pmrem.dispose()
      renderer.dispose()
    }
    // runs once for the component's lifetime — phaseRef.current is read
    // fresh each frame so the physics state (theta/velocity/position) never
    // resets across a loading -> settling -> ambient transition
  }, [])

  const showChrome = needsLoader && phase !== "ambient"

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: showChrome ? 200 : -1 }}
    >
      {showChrome && (
        <div
          className="absolute inset-0 bg-background transition-opacity duration-500 ease-out"
          style={{ opacity: phase === "loading" ? 1 : 0 }}
        />
      )}
      {showChrome && (
        <div
          className="absolute inset-0 transition-opacity duration-500 ease-out"
          style={{ opacity: phase === "loading" ? 1 : 0 }}
        >
          {SPARKS.map((s) => (
            <div
              key={s.dir}
              className="absolute animate-spark-pulse blur-[2px]"
              style={{ ...s.style, animationDelay: s.delay }}
            />
          ))}
        </div>
      )}
      <div ref={positionerRef} className="absolute" style={{ left: "50%", top: "50%" }}>
        <canvas
          ref={canvasRef}
          width={CANVAS}
          height={CANVAS}
          className="absolute left-0 top-0 drop-shadow-[0_0_40px_hsl(var(--primary)/0.45)]"
          style={{
            width: CANVAS,
            height: CANVAS,
            willChange: "transform",
            // matches the physics loop's initial scale so pre-hydration
            // frames are already centered correctly
            transform: "translate(-50%, -50%) scale(0.7)",
          }}
        />
      </div>
    </div>
  )
}
