import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { IntroSection } from '@/sections/IntroSection'
import { PersonaSection } from '@/sections/PersonaSection'
import { ShowcaseSection } from '@/sections/ShowcaseSection'
import { ArchitectureSection } from '@/sections/ArchitectureSection'

type TabKey = 'intro' | 'persona' | 'showcase' | 'arch'

const TABS: { key: TabKey; label: string }[] = [
  { key: 'intro', label: '是什么' },
  { key: 'persona', label: '李然怎么被读懂' },
  { key: 'showcase', label: '更多瞬间' },
  { key: 'arch', label: '怎么运转' },
]

export function TabShell({ onBack }: { onBack: () => void }) {
  const [active, setActive] = useState<TabKey>('intro')
  const topRef = useRef<HTMLDivElement>(null)

  const switchTab = (key: TabKey) => {
    setActive(key)
    // 切 tab 后回到主 tab 栏位置（避免停在上一 tab 的滚动深处）
    requestAnimationFrame(() => {
      topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <div ref={topRef} className="relative">
      {/* 主 tab 栏：顶部 sticky，章节级导航 */}
      <nav className="sticky top-0 z-40 border-b border-white/8 bg-cosmic-void/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3.5">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              aria-label="返回开场"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/55 transition hover:bg-white/12 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 stroke-[2.2]" />
            </button>
            <span className="font-cn-display text-lg font-black tracking-wide text-white">
              CoSwipe
            </span>
          </div>
          <div className="flex items-center gap-0.5 md:gap-1">
            {TABS.map((tab, i) => {
              const isActive = tab.key === active
              return (
                <button
                  key={tab.key}
                  onClick={() => switchTab(tab.key)}
                  className={`relative rounded-full px-3 py-2 text-xs font-bold transition-colors md:text-sm ${
                    isActive ? 'text-white' : 'text-white/40 hover:text-white/72'
                  }`}
                >
                  <span className="mr-1.5 hidden text-[10px] font-black opacity-45 sm:inline">
                    0{i + 1}
                  </span>
                  {tab.label}
                  {isActive && (
                    <motion.span
                      layoutId="main-tab-underline"
                      className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-gradient-to-r from-mirror-pink via-direct-cyan to-challenge-orange"
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* tab 内容 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {active === 'intro' && <IntroSection />}
          {active === 'persona' && <PersonaSection />}
          {active === 'showcase' && <ShowcaseSection />}
          {active === 'arch' && <ArchitectureSection />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
