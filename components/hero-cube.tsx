"use client"

import { useEffect, useRef } from "react"

// fixed face size — responsive scaling is handled by the outer wrapper's
// transform so translateZ offsets never fall out of sync with element size
const SIZE = 200
const HALF = SIZE / 2

const FACES = [
  { name: "front", transform: `translateZ(${HALF}px)` },
  { name: "back", transform: `rotateY(180deg) translateZ(${HALF}px)` },
  { name: "right", transform: `rotateY(90deg) translateZ(${HALF}px)` },
  { name: "left", transform: `rotateY(-90deg) translateZ(${HALF}px)` },
  { name: "top", transform: `rotateX(90deg) translateZ(${HALF}px)` },
  { name: "bottom", transform: `rotateX(-90deg) translateZ(${HALF}px)` },
]

// scroll progress: 0 while hero is still fully in view, 1 once it has
// scrolled entirely past the top of the viewport
const SCALE_MAX = 1.2
const SCALE_MIN = 0.4
const OPACITY_MAX = 0.85
const OPACITY_MIN = 0.08

export function HeroCube() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const cubeRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const cube = cubeRef.current
    const glow = glowRef.current
    if (!wrapper || !cube || !glow) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let rafId = 0
    let lastTime = performance.now()
    let idleY = 0
    let tiltX = 0
    let tiltY = 0
    let targetTiltX = 0
    let targetTiltY = 0
    let scrollProgress = 0

    const updateScroll = () => {
      const rect = wrapper.getBoundingClientRect()
      const p = rect.height > 0 ? -rect.top / rect.height : 0
      scrollProgress = Math.min(1, Math.max(0, p))
    }

    const handlePointerMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1
      const ny = (e.clientY / window.innerHeight) * 2 - 1
      targetTiltY = nx * 22
      targetTiltX = -ny * 16
    }

    updateScroll()
    window.addEventListener("scroll", updateScroll, { passive: true })
    window.addEventListener("resize", updateScroll)
    if (!reduceMotion) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true })
    }

    const tick = (time: number) => {
      const dt = time - lastTime
      lastTime = time

      if (!reduceMotion) {
        idleY += dt * 0.02
        tiltX += (targetTiltX - tiltX) * 0.06
        tiltY += (targetTiltY - tiltY) * 0.06
      }

      const idleX = reduceMotion ? 0 : Math.sin(time / 1800) * 12
      const scrollRotate = scrollProgress * 220
      const scale = SCALE_MAX + (SCALE_MIN - SCALE_MAX) * scrollProgress
      const opacity = OPACITY_MAX + (OPACITY_MIN - OPACITY_MAX) * scrollProgress

      cube.style.transform = `rotateX(${idleX + tiltX}deg) rotateY(${idleY + tiltY}deg) rotateZ(${scrollRotate}deg) scale(${scale})`
      cube.style.opacity = String(opacity)
      glow.style.opacity = String(opacity * 0.6)
      glow.style.transform = `scale(${scale})`

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("scroll", updateScroll)
      window.removeEventListener("resize", updateScroll)
      window.removeEventListener("pointermove", handlePointerMove)
    }
  }, [])

  return (
    <div
      ref={wrapperRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 hidden items-center justify-end overflow-hidden sm:flex"
    >
      <div
        className="mr-2 scale-[0.75] sm:mr-6 lg:mr-16 lg:scale-100"
        style={{ perspective: "1000px" }}
      >
        <div
          ref={glowRef}
          className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-3xl"
        />
        <div
          ref={cubeRef}
          className="relative h-[200px] w-[200px]"
          style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        >
          {FACES.map((face) => (
            <div
              key={face.name}
              className="absolute inset-0 border-2 border-primary/70 bg-gradient-to-br from-primary/25 via-primary/10 to-black/60"
              style={{ transform: face.transform }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
