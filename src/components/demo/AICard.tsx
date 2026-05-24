import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import type { ReactNode } from 'react'

export type Mode = 'mirror' | 'direct' | 'challenge'

interface QuizOption {
  id: string
  label: string
  recommended?: boolean
}

export interface AICardData {
  mode: Mode
  badge: string
  title: string
  body: string[]
  actions: { id: string; label: string; intent: 'accept' | 'pushback' }[]
  quizOptions?: QuizOption[]
  highlightActionId?: string
}

const modeStyle: Record<Mode, {
  border: string
  glow: string
  text: string
  bg: string
  ring: string
  badgeBg: string
}> = {
  mirror: {
    border: 'border-mirror-pink/60',
    glow: 'shadow-[0_0_50px_rgba(236,72,153,0.45),inset_0_0_30px_rgba(236,72,153,0.08)]',
    text: 'text-mirror-pink',
    bg: 'bg-gradient-to-br from-pink-950/80 via-purple-950/60 to-black/80',
    ring: 'ring-mirror-pink/30',
    badgeBg: 'bg-mirror-pink/15 border-mirror-pink/40',
  },
  direct: {
    border: 'border-direct-cyan/60',
    glow: 'shadow-[0_0_50px_rgba(77,208,225,0.45),inset_0_0_30px_rgba(77,208,225,0.08)]',
    text: 'text-direct-cyan',
    bg: 'bg-gradient-to-br from-cyan-950/80 via-blue-950/60 to-black/80',
    ring: 'ring-direct-cyan/30',
    badgeBg: 'bg-direct-cyan/15 border-direct-cyan/40',
  },
  challenge: {
    border: 'border-challenge-orange/60',
    glow: 'shadow-[0_0_50px_rgba(251,146,60,0.45),inset_0_0_30px_rgba(251,146,60,0.08)]',
    text: 'text-challenge-orange',
    bg: 'bg-gradient-to-br from-orange-950/80 via-red-950/60 to-black/80',
    ring: 'ring-challenge-orange/30',
    badgeBg: 'bg-challenge-orange/15 border-challenge-orange/40',
  },
}

export function AICard({ data }: { data: AICardData }) {
  const s = modeStyle[data.mode]
  return (
    <motion.div
      initial={{ opacity: 0, y: -40, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden rounded-3xl border-2 ${s.border} ${s.bg} ${s.glow} backdrop-blur-2xl`}
    >
      {/* 顶部装饰光线 */}
      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-current ${s.text} to-transparent opacity-70`} />

      <div className="relative p-6">
        {/* Badge */}
        <div className="mb-4 flex items-center gap-2">
          <div className={`inline-flex items-center gap-1.5 rounded-full border ${s.badgeBg} px-3 py-1`}>
            <Sparkles size={12} className={s.text} />
            <span className="text-xs font-medium text-white/95">{data.badge}</span>
          </div>
        </div>

        {/* Title */}
        <h3
          className="mb-3 text-2xl font-bold leading-tight text-white md:text-[26px]"
          style={{ fontFamily: 'var(--font-cn-display)' }}
        >
          {data.title}
        </h3>

        {/* Body lines */}
        <div className="mb-5 space-y-1.5">
          {data.body.map((line, i) => (
            <p key={i} className="text-[15px] leading-relaxed text-white/85">
              {line}
            </p>
          ))}
        </div>

        {/* Quiz options (only for challenge) */}
        {data.quizOptions && (
          <div className="mb-5 grid grid-cols-2 gap-2">
            {data.quizOptions.map((q) => (
              <div
                key={q.id}
                className="rounded-xl border border-white/15 bg-white/[0.04] p-2.5 text-sm text-white/85 backdrop-blur-sm"
              >
                <span className={`mr-1 font-bold ${s.text}`}>{q.id}.</span>
                {q.label}
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-2">
          {data.actions.map((a) => {
            const isAccept = a.intent === 'accept'
            const isHighlight = data.highlightActionId === a.id
            return (
              <button
                key={a.id}
                className={`group relative flex-1 min-w-[120px] rounded-full border px-4 py-2.5 text-sm font-medium transition-all ${
                  isAccept
                    ? `${s.text} ${s.border} bg-white/5 hover:bg-white/10`
                    : 'border-white/20 bg-white/[0.03] text-white/75 hover:bg-white/10'
                } ${isHighlight ? `ring-2 ${s.ring} ring-offset-2 ring-offset-black/80` : ''}`}
              >
                {a.label}
                {isHighlight && (
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                    className="absolute -right-1.5 -top-1.5 h-2.5 w-2.5 rounded-full bg-current"
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

export function AICardWrapper({ children }: { children: ReactNode }) {
  return <div className="relative">{children}</div>
}
