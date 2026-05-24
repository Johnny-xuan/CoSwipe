import { motion } from 'framer-motion'
import { Heart, Bookmark, MessageCircle, PlayCircle } from 'lucide-react'

export interface VideoData {
  id: string
  title: string
  category: string
  behavior: string
  /** 主题情绪色，决定占位图色调 */
  tone?: 'sunset' | 'cozy' | 'mono' | 'food' | 'night'
}

const toneGradients: Record<NonNullable<VideoData['tone']>, string> = {
  sunset: 'linear-gradient(135deg, #f97316 0%, #ec4899 50%, #a855f7 100%)',
  cozy: 'linear-gradient(135deg, #92400e 0%, #c2410c 50%, #fbbf24 100%)',
  mono: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #6b7280 100%)',
  food: 'linear-gradient(135deg, #b45309 0%, #ea580c 50%, #facc15 100%)',
  night: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #6366f1 100%)',
}

export function VideoPlaceholder({
  data,
  index,
  highlight,
}: {
  data: VideoData
  index: number
  highlight?: boolean
}) {
  const tone = data.tone ?? 'night'
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className={`relative aspect-[9/14] overflow-hidden rounded-2xl border ${
        highlight ? 'border-mirror-pink/60 shadow-[0_0_24px_rgba(236,72,153,0.4)]' : 'border-white/15'
      } group`}
    >
      {/* 模拟视频缩略图（颜色渐变 + 模糊光点） */}
      <div className="absolute inset-0" style={{ background: toneGradients[tone] }} />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute -left-4 top-1/4 h-32 w-32 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -right-4 bottom-1/4 h-24 w-24 rounded-full bg-white/15 blur-2xl" />

      {/* 顶部 video id 标签 */}
      <div className="absolute left-2 top-2 z-10 rounded bg-black/50 px-2 py-0.5 text-[10px] font-mono text-white/80 backdrop-blur-sm">
        {data.id}
      </div>

      {/* 中央播放图标 */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <PlayCircle
          size={36}
          className="text-white/60 transition-transform group-hover:scale-110"
          strokeWidth={1.5}
        />
      </div>

      {/* 底部标题 + 行为 */}
      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-2.5">
        <p className="line-clamp-2 text-[11px] font-medium leading-tight text-white">
          {data.title}
        </p>
        <p className="mt-1 text-[9px] uppercase tracking-wider text-white/50" style={{ fontFamily: 'var(--font-display)' }}>
          {data.category}
        </p>
        {/* 行为标签 */}
        <div className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[9px] text-white/85 backdrop-blur-sm">
          <BehaviorIcon behavior={data.behavior} />
          {data.behavior}
        </div>
      </div>
    </motion.div>
  )
}

function BehaviorIcon({ behavior }: { behavior: string }) {
  if (behavior.includes('收藏')) return <Bookmark size={10} fill="currentColor" />
  if (behavior.includes('完播')) return <PlayCircle size={10} />
  if (behavior.includes('点赞')) return <Heart size={10} fill="currentColor" />
  if (behavior.includes('评论')) return <MessageCircle size={10} />
  return <PlayCircle size={10} />
}

export function VideoStrip({ videos }: { videos: VideoData[] }) {
  return (
    <div className="grid grid-cols-5 gap-2.5 md:gap-3">
      {videos.map((v, i) => (
        <VideoPlaceholder key={v.id} data={v} index={i} />
      ))}
    </div>
  )
}
