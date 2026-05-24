/**
 * Soft 浮动光球，给页面增加 cosmic 体积感。
 */
interface Orb {
  top: string
  left: string
  size: number
  color: string
  delay?: number
}

const defaultOrbs: Orb[] = [
  { top: '8%', left: '12%', size: 360, color: 'rgba(168, 85, 247, 0.32)', delay: 0 },
  { top: '24%', left: '74%', size: 280, color: 'rgba(77, 208, 225, 0.28)', delay: 1.5 },
  { top: '58%', left: '18%', size: 320, color: 'rgba(236, 72, 153, 0.26)', delay: 0.8 },
  { top: '72%', left: '82%', size: 240, color: 'rgba(251, 146, 60, 0.22)', delay: 2.2 },
]

export function GlowOrbs({ orbs = defaultOrbs }: { orbs?: Orb[] }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-3xl animate-breathe"
          style={{
            top: orb.top,
            left: orb.left,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            animationDelay: `${orb.delay ?? 0}s`,
            animationDuration: `${6 + i}s`,
          }}
        />
      ))}
    </div>
  )
}
