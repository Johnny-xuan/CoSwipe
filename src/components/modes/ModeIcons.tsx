/**
 * 三个模式的 SVG icon：镜子（吐槽）、准星（直击）、拳头（挑战）
 * 现在用 SVG 占位，后续可以替换为 AIGC 图片。
 */
import type { SVGProps } from 'react'

export function MirrorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" {...props}>
      <defs>
        <radialGradient id="mirror-face" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#fce7f3" />
          <stop offset="60%" stopColor="#f9a8d4" />
          <stop offset="100%" stopColor="#ec4899" />
        </radialGradient>
        <linearGradient id="mirror-frame" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f9a8d4" />
          <stop offset="100%" stopColor="#be185d" />
        </linearGradient>
      </defs>
      {/* 镜面椭圆 */}
      <ellipse cx="50" cy="36" rx="26" ry="30" fill="url(#mirror-face)" stroke="url(#mirror-frame)" strokeWidth="3" />
      {/* 镜面高光 */}
      <ellipse cx="42" cy="26" rx="8" ry="12" fill="#fff" opacity="0.5" />
      <ellipse cx="56" cy="46" rx="3" ry="5" fill="#fff" opacity="0.35" />
      {/* 镜柄 */}
      <rect x="46" y="64" width="8" height="22" rx="3" fill="url(#mirror-frame)" />
      {/* 底座 */}
      <ellipse cx="50" cy="88" rx="18" ry="4" fill="url(#mirror-frame)" />
      {/* 闪光 */}
      <g fill="#fff">
        <circle cx="22" cy="20" r="1.5" opacity="0.9" />
        <circle cx="78" cy="48" r="1.2" opacity="0.8" />
        <circle cx="18" cy="50" r="1" opacity="0.7" />
      </g>
    </svg>
  )
}

export function TargetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" {...props}>
      <defs>
        <radialGradient id="target-core" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="100%" stopColor="#0e7490" />
        </radialGradient>
      </defs>
      {/* 外圈 */}
      <circle cx="50" cy="50" r="38" stroke="#4dd0e1" strokeWidth="2.5" opacity="0.6" />
      <circle cx="50" cy="50" r="28" stroke="#4dd0e1" strokeWidth="2.5" opacity="0.8" />
      <circle cx="50" cy="50" r="16" stroke="#67e8f9" strokeWidth="2.5" />
      {/* 中心 */}
      <circle cx="50" cy="50" r="6" fill="url(#target-core)" />
      {/* 十字准星 */}
      <line x1="50" y1="6" x2="50" y2="24" stroke="#67e8f9" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="76" x2="50" y2="94" stroke="#67e8f9" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="6" y1="50" x2="24" y2="50" stroke="#67e8f9" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="76" y1="50" x2="94" y2="50" stroke="#67e8f9" strokeWidth="2.5" strokeLinecap="round" />
      {/* 闪光 */}
      <circle cx="50" cy="50" r="3" fill="#fff" />
      <g fill="#67e8f9">
        <circle cx="20" cy="20" r="1.3" opacity="0.8" />
        <circle cx="82" cy="78" r="1" opacity="0.7" />
      </g>
    </svg>
  )
}

export function FistIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" {...props}>
      <defs>
        <linearGradient id="fist-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </defs>
      {/* 拳头主体 */}
      <path
        d="M 30 42 Q 28 32 38 30 L 62 28 Q 74 28 76 38 L 78 54 Q 78 66 70 72 L 64 80 Q 56 86 46 84 L 36 82 Q 26 78 24 68 L 24 52 Q 24 44 30 42 Z"
        fill="url(#fist-skin)"
        stroke="#c2410c"
        strokeWidth="2"
      />
      {/* 指节线 */}
      <path d="M 35 44 Q 40 46 46 44" stroke="#c2410c" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M 48 42 Q 54 44 60 42" stroke="#c2410c" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M 62 42 Q 68 44 74 42" stroke="#c2410c" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M 36 56 Q 50 60 70 56" stroke="#c2410c" strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* 高光 */}
      <ellipse cx="44" cy="38" rx="5" ry="3" fill="#fff" opacity="0.5" />
      {/* 闪光 */}
      <g fill="#fbbf24">
        <path d="M 18 30 L 16 24 L 14 30 L 8 32 L 14 34 L 16 40 L 18 34 L 24 32 Z" opacity="0.9" />
        <circle cx="85" cy="65" r="2" opacity="0.7" />
        <circle cx="22" cy="68" r="1.5" opacity="0.6" />
      </g>
    </svg>
  )
}
