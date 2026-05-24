import { motion } from 'framer-motion'

export interface DialogueTurn {
  from: 'ai' | 'user'
  text: string
  /** 用户视角的元注释（"用户点击" / "用户划走"）*/
  hint?: string
}

export interface WorkflowLine {
  label: string
  value: string
  color?: 'cyan' | 'purple' | 'pink' | 'orange'
}

const colorClass = {
  cyan: 'text-direct-cyan',
  purple: 'text-router-purple',
  pink: 'text-mirror-pink',
  orange: 'text-challenge-orange',
}

export function DialoguePanel({
  turns,
  workflow,
}: {
  turns: DialogueTurn[]
  workflow: WorkflowLine[]
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="grid gap-4 md:grid-cols-[1fr_1fr]"
    >
      {/* 用户视角 */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
        <div className="mb-3 flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-mirror-pink shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
          <h4 className="text-xs uppercase tracking-[0.3em] text-white/45" style={{ fontFamily: 'var(--font-display)' }}>
            User View
          </h4>
          <span className="text-xs text-white/40">· 用户视角</span>
        </div>
        <div className="space-y-2.5">
          {turns.map((t, i) => (
            <Bubble key={i} turn={t} index={i} />
          ))}
        </div>
      </div>

      {/* 系统视角 */}
      <div className="rounded-2xl border border-router-purple/25 bg-router-purple/[0.04] p-5 backdrop-blur-sm">
        <div className="mb-3 flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-router-purple shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
          <h4 className="text-xs uppercase tracking-[0.3em] text-router-purple/85" style={{ fontFamily: 'var(--font-display)' }}>
            System Mind
          </h4>
          <span className="text-xs text-white/40">· 系统心流</span>
        </div>
        <div className="space-y-2 font-mono text-[13px]">
          {workflow.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.35 }}
              className="flex items-start gap-3"
            >
              <span className="shrink-0 text-router-purple/70">▸</span>
              <div className="flex-1">
                <span className="text-white/55">{line.label}</span>
                <span className="mx-1.5 text-white/30">→</span>
                <span className={line.color ? colorClass[line.color] : 'text-white/90'}>
                  {line.value}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function Bubble({ turn, index }: { turn: DialogueTurn; index: number }) {
  const isAi = turn.from === 'ai'
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 + index * 0.15, duration: 0.4 }}
      className={`flex ${isAi ? 'justify-start' : 'justify-end'}`}
    >
      <div className={`max-w-[85%] ${isAi ? '' : 'text-right'}`}>
        {turn.hint && (
          <p className="mb-1 text-[10px] uppercase tracking-widest text-white/35" style={{ fontFamily: 'var(--font-display)' }}>
            {turn.hint}
          </p>
        )}
        <div
          className={`inline-block rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
            isAi
              ? 'rounded-tl-sm border border-router-purple/30 bg-router-purple/10 text-white/90'
              : 'rounded-tr-sm border border-mirror-pink/30 bg-mirror-pink/10 text-white/90'
          }`}
        >
          {turn.text}
        </div>
      </div>
    </motion.div>
  )
}
