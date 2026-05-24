import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { VideoStrip, type VideoData } from './VideoPlaceholder'
import { AICard, type AICardData } from './AICard'
import { DialoguePanel, type DialogueTurn, type WorkflowLine } from './DialoguePanel'
import { CosmicBackground } from '@/components/effects/CosmicBackground'

interface SceneProps {
  index: number
  windowLabel: string
  windowSubtitle: string
  windowGoal: string
  videos: VideoData[]
  card: AICardData
  dialogue: DialogueTurn[]
  workflow: WorkflowLine[]
  variant: 'pink' | 'cyan' | 'orange'
}

const variantToBg = {
  pink: 'pink' as const,
  cyan: 'cyan' as const,
  orange: 'orange' as const,
}

const variantColors = {
  pink: 'text-mirror-pink',
  cyan: 'text-direct-cyan',
  orange: 'text-challenge-orange',
}

export function Scene({
  index,
  windowLabel,
  windowSubtitle,
  windowGoal,
  videos,
  card,
  dialogue,
  workflow,
  variant,
}: SceneProps) {
  return (
    <CosmicBackground variant={variantToBg[variant]} className="relative w-full overflow-hidden py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Scene header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex items-end justify-between gap-6"
        >
          <div>
            <p className={`mb-2 text-xs uppercase tracking-[0.4em] ${variantColors[variant]}`} style={{ fontFamily: 'var(--font-display)' }}>
              Scene {index} · K=5 window
            </p>
            <h3 className="mb-1 text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: 'var(--font-cn-display)' }}>
              {windowLabel}
            </h3>
            <p className="text-base text-white/55">{windowSubtitle}</p>
          </div>
          <div className="hidden max-w-md rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-right text-sm text-white/65 backdrop-blur-sm md:block">
            <p className="mb-1 text-[10px] uppercase tracking-[0.3em] text-white/35" style={{ fontFamily: 'var(--font-display)' }}>
              Window 目标
            </p>
            {windowGoal}
          </div>
        </motion.div>

        {/* 主体：左 videos + 右 AI 卡 */}
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* 左侧：5 视频 */}
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm text-white/55">
              <span className={`inline-block h-1.5 w-6 rounded-full ${variantColors[variant]} bg-current`} />
              <span>当前窗口的 5 条 video</span>
            </div>
            <VideoStrip videos={videos} />
          </div>

          {/* 右侧：AI 卡 */}
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm text-white/55">
              <span className={`inline-block h-1.5 w-6 rounded-full ${variantColors[variant]} bg-current`} />
              <span>窗口结束 → AI 卡出现</span>
            </div>
            <AICard data={card} />
          </div>
        </div>

        {/* 下方：对话面板 + workflow 心流 */}
        <div className="mt-10">
          <DialoguePanel turns={dialogue} workflow={workflow} />
        </div>
      </div>
    </CosmicBackground>
  )
}

export function SceneWrap({ children }: { children: ReactNode }) {
  return <section>{children}</section>
}
