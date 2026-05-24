import { useEffect, useRef } from 'react'

interface ParticlesProps {
  count?: number
  color?: string
  speed?: number
  className?: string
}

interface Particle {
  x: number
  y: number
  r: number
  vy: number
  vx: number
  alpha: number
  twinkle: number
}

export function Particles({
  count = 60,
  color = '255, 255, 255',
  speed = 0.3,
  className = '',
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    let parent = canvas.parentElement
    let w = parent?.clientWidth ?? window.innerWidth
    let h = parent?.clientHeight ?? window.innerHeight

    const setSize = () => {
      parent = canvas.parentElement
      w = parent?.clientWidth ?? window.innerWidth
      h = parent?.clientHeight ?? window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.scale(dpr, dpr)
    }
    setSize()

    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.4,
      vy: -(Math.random() * speed + 0.05),
      vx: (Math.random() - 0.5) * 0.08,
      alpha: Math.random() * 0.6 + 0.2,
      twinkle: Math.random() * 0.02 + 0.005,
    }))

    let raf = 0
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach((p) => {
        p.y += p.vy
        p.x += p.vx
        p.alpha += (Math.random() - 0.5) * p.twinkle
        p.alpha = Math.max(0.1, Math.min(1, p.alpha))

        if (p.y < -10) {
          p.y = h + 10
          p.x = Math.random() * w
        }
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color}, ${p.alpha})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => setSize()
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [count, color, speed])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 z-0 ${className}`}
    />
  )
}
