import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CoverSection } from '@/sections/CoverSection'
import { TabShell } from '@/components/shell/TabShell'

export function LandingPage() {
  const [entered, setEntered] = useState(false)

  return (
    <main className="relative w-full bg-cosmic-void text-white selection:bg-direct-cyan/30">
      <AnimatePresence mode="wait">
        {!entered ? (
          <motion.div
            key="cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* 开场层：抛出问题。点「让它开口」才进入，进入后不在 DOM —— 上滑无处可回 */}
            <CoverSection onEnter={() => setEntered(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="shell"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* 主体层：顶部 sticky 主 tab + 左侧显式 back 返回开场 */}
            <TabShell onBack={() => setEntered(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
