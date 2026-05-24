import type { ReactNode } from 'react'

type Variant = 'default' | 'pink' | 'cyan' | 'orange'

interface CosmicBackgroundProps {
  variant?: Variant
  children?: ReactNode
  className?: string
}

const variantBg: Record<Variant, string> = {
  default: 'bg-cosmic-mesh',
  pink: 'bg-cosmic-pink',
  cyan: 'bg-cosmic-cyan',
  orange: 'bg-cosmic-orange',
}

export function CosmicBackground({
  variant = 'default',
  children,
  className = '',
}: CosmicBackgroundProps) {
  return (
    <div className={`relative isolate ${variantBg[variant]} ${className}`}>
      <div className="grain-overlay" />
      {children}
    </div>
  )
}
