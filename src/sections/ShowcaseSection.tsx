import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, Crosshair, Gamepad2, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import type { ReactNode } from 'react'
import { asset } from '@/lib/asset'

type ModeKey = 'mirror' | 'direct' | 'challenge'

interface Example {
  no: string
  title: string
  punch: string
  comic: string
  card: string
}

interface Mode {
  key: ModeKey
  zh: string
  en: string
  verb: string
  icon: ReactNode
  examples: Example[]
}

const toneStyle: Record<ModeKey, {
  text: string
  bg: string
  halo: string
  border: string
  tabActive: string
  tabGlow: string
  ring: string
}> = {
  mirror: {
    text: 'text-mirror-pink',
    bg: 'bg-mirror-pink/[0.08]',
    halo: 'bg-mirror-pink/12',
    border: 'border-mirror-pink/30',
    tabActive: 'bg-mirror-pink/14 text-mirror-pink',
    tabGlow: 'shadow-[0_0_30px_rgba(205,168,122,0.18)]',
    ring: 'group-hover:border-mirror-pink/45',
  },
  direct: {
    text: 'text-direct-cyan',
    bg: 'bg-direct-cyan/[0.08]',
    halo: 'bg-direct-cyan/12',
    border: 'border-direct-cyan/30',
    tabActive: 'bg-direct-cyan/14 text-direct-cyan',
    tabGlow: 'shadow-[0_0_30px_rgba(138,155,180,0.18)]',
    ring: 'group-hover:border-direct-cyan/45',
  },
  challenge: {
    text: 'text-challenge-orange',
    bg: 'bg-challenge-orange/[0.08]',
    halo: 'bg-challenge-orange/12',
    border: 'border-challenge-orange/30',
    tabActive: 'bg-challenge-orange/14 text-challenge-orange',
    tabGlow: 'shadow-[0_0_30px_rgba(194,124,89,0.18)]',
    ring: 'group-hover:border-challenge-orange/45',
  },
}

const MODES: Mode[] = [
  {
    key: 'mirror',
    zh: '吐槽模式',
    en: 'Mirror',
    verb: '点破反差',
    icon: <Eye className="h-5 w-5 stroke-[1.9]" />,
    examples: [
      { no: '01', title: '精致穷', punch: '收藏夹全是省钱攻略，停留最久的却是犒赏自己的小东西。', comic: '/showcase/mirror/1-comic.png', card: '/showcase/mirror/1-card.png' },
      { no: '02', title: '深夜炸鸡', punch: '收藏全是减脂备餐，今晚却停在炸鸡和烧烤。', comic: '/showcase/mirror/2-comic.png', card: '/showcase/mirror/2-card.png' },
      { no: '03', title: '越睡越刷', punch: '收藏一堆助眠白噪音，手指还在继续往下滑。', comic: '/showcase/mirror/3-comic.png', card: '/showcase/mirror/3-card.png' },
    ],
  },
  {
    key: 'direct',
    zh: '直击模式',
    en: 'Direct',
    verb: '翻译真实需求',
    icon: <Crosshair className="h-5 w-5 stroke-[1.9]" />,
    examples: [
      { no: '01', title: '卡在第一步', punch: '你不是缺学习方法，是这件事看起来太大，不知道第一步从哪下手。', comic: '/showcase/direct/1-comic.png', card: '/showcase/direct/1-card.png' },
      { no: '02', title: '想透口气', punch: '你不是想做攻略，是想从现在的生活里出去透口气。', comic: '/showcase/direct/2-comic.png', card: '/showcase/direct/2-card.png' },
      { no: '03', title: '今晚立刻舒服', punch: '你要的不是完整改造，是今晚回到房间立刻舒服一点。', comic: '/showcase/direct/3-comic.png', card: '/showcase/direct/3-card.png' },
    ],
  },
  {
    key: 'challenge',
    zh: '挑战模式',
    en: 'Challenge',
    verb: '邀请轻参与',
    icon: <Gamepad2 className="h-5 w-5 stroke-[1.9]" />,
    examples: [
      { no: '01', title: '搭一套', punch: '把刚刷的通勤穿搭，变成「明天见客户」的搭配小游戏。', comic: '/showcase/challenge/1-comic.png', card: '/showcase/challenge/1-card.png' },
      { no: '02', title: '猜一球', punch: '把刚刷的投篮教学，变成「这球会怎么飞」的 3 秒判断。', comic: '/showcase/challenge/2-comic.png', card: '/showcase/challenge/2-card.png' },
      { no: '03', title: '这条鱼身上有什么', punch: '把刚刷的海洋科普，变成一道零压力的 3 秒知识问答。', comic: '/showcase/challenge/3-comic.png', card: '/showcase/challenge/3-card.png' },
    ],
  },
]

export function ShowcaseSection() {
  const [active, setActive] = useState<ModeKey>('mirror')
  const [lightbox, setLightbox] = useState<number | null>(null)
  const mode = MODES.find((m) => m.key === active)!
  const style = toneStyle[active]

  const close = useCallback(() => setLightbox(null), [])
  const go = useCallback(
    (dir: 1 | -1) => {
      setLightbox((cur) => {
        if (cur === null) return cur
        const n = mode.examples.length
        return (cur + dir + n) % n
      })
    },
    [mode.examples.length],
  )

  // 键盘控制 + 锁定 body 滚动
  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [lightbox, close, go])

  // 切 tab 时关灯箱
  const switchTab = (key: ModeKey) => {
    setLightbox(null)
    setActive(key)
  }

  return (
    <section className="relative overflow-hidden bg-[#06070f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_8%,rgba(205,168,122,0.09),transparent_30%),radial-gradient(circle_at_85%_18%,rgba(138,155,180,0.08),transparent_32%),linear-gradient(180deg,#09080e_0%,#06070f_50%,#08080f_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent" />
      <div className="grain-overlay" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        {/* Section 标题 */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.36em] text-mirror-pink/72">
            More Showcases
          </p>
          <h2 className="font-cn-display text-[clamp(2.8rem,6vw,6rem)] font-black leading-[1.02]">
            不只是李然，
            <br className="md:hidden" />
            <span className="bg-gradient-to-r from-mirror-pink via-direct-cyan to-challenge-orange bg-clip-text text-transparent">
              每一种刷都被接住
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/56">
            三种陪刷模式，各看三个真实场景。点开任意一张，看 AI 的内心独白和最后出现在信息流里的卡片。
          </p>
        </div>

        {/* Tab 切换 */}
        <div className="mx-auto mb-16 flex w-fit gap-2 rounded-full border border-white/8 bg-black/40 p-1.5 backdrop-blur-xl">
          {MODES.map((m) => {
            const isActive = m.key === active
            const s = toneStyle[m.key]
            return (
              <button
                key={m.key}
                onClick={() => switchTab(m.key)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-black transition-all duration-300 ${
                  isActive ? `${s.tabActive} ${s.tabGlow}` : 'text-white/45 hover:text-white/70'
                }`}
              >
                {m.icon}
                <span>{m.zh}</span>
                <span className="hidden text-[10px] font-bold uppercase tracking-wider opacity-60 sm:inline">
                  {m.en}
                </span>
              </button>
            )
          })}
        </div>

        {/* 缩略图墙 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* 模式小标题 */}
            <div className="mb-10 flex items-center justify-center gap-3">
              <span className={`flex h-10 w-10 items-center justify-center rounded-full ${style.bg} ${style.text}`}>
                {mode.icon}
              </span>
              <h3 className="font-cn-display text-3xl font-black">{mode.zh}</h3>
              <span className={`rounded-full ${style.bg} px-3 py-1 text-sm font-black ${style.text}`}>
                {mode.verb}
              </span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mode.examples.map((ex, i) => (
                <Thumbnail key={ex.no} example={ex} modeKey={active} index={i} onOpen={() => setLightbox(i)} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 灯箱 */}
      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox
            example={mode.examples[lightbox]}
            modeKey={active}
            index={lightbox}
            total={mode.examples.length}
            onClose={close}
            onPrev={() => go(-1)}
            onNext={() => go(1)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

function Thumbnail({
  example,
  modeKey,
  index,
  onOpen,
}: {
  example: Example
  modeKey: ModeKey
  index: number
  onOpen: () => void
}) {
  const style = toneStyle[modeKey]
  return (
    <motion.button
      onClick={onOpen}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className={`group relative block aspect-[9/13] w-full overflow-hidden rounded-[24px] border border-white/10 bg-black/30 text-left transition-all duration-300 ${style.ring} hover:-translate-y-1`}
    >
      {/* 卡片封面 */}
      <img
        src={asset(example.card)}
        alt={`${example.title} 卡片`}
        loading={index === 0 ? 'eager' : 'lazy'}
        className="absolute inset-0 h-full w-full object-cover object-top opacity-80 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-95"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/30 to-black/10" />

      {/* hover 放大角标 */}
      <div className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full ${style.bg} ${style.text} opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100`}>
        <Maximize2 className="h-4 w-4 stroke-[2]" />
      </div>

      {/* 底部文字 */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className={`mb-1.5 text-[11px] font-black uppercase tracking-[0.3em] ${style.text}/80`}>
          Case {example.no}
        </p>
        <h4 className="font-cn-display text-2xl font-black leading-tight text-white">
          {example.title}
        </h4>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/60">
          {example.punch}
        </p>
        <p className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-white/45">
          点击看推理 + 卡片
        </p>
      </div>
    </motion.button>
  )
}

function Lightbox({
  example,
  modeKey,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  example: Example
  modeKey: ModeKey
  index: number
  total: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const style = toneStyle[modeKey]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md"
    >
      {/* 关闭 */}
      <button
        onClick={onClose}
        className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 backdrop-blur-md transition hover:bg-white/12 hover:text-white"
      >
        <X className="h-5 w-5 stroke-[2]" />
      </button>

      {/* 左右切换 */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/70 backdrop-blur-md transition hover:bg-white/12 hover:text-white md:left-6"
      >
        <ChevronLeft className="h-6 w-6 stroke-[2]" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/70 backdrop-blur-md transition hover:bg-white/12 hover:text-white md:right-6"
      >
        <ChevronRight className="h-6 w-6 stroke-[2]" />
      </button>

      {/* 内容 */}
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative mx-auto flex h-[95vh] w-full max-w-[100rem] flex-col px-4 md:px-16"
      >
        {/* 标题（紧凑，把垂直空间让给图） */}
        <div className="mb-3 shrink-0 text-center">
          <p className={`text-xs font-black uppercase tracking-[0.28em] ${style.text}/85`}>
            Case {example.no} · {index + 1}/{total} · <span className="text-white">{example.title}</span>
          </p>
          <p className="mx-auto mt-1 max-w-3xl text-sm leading-relaxed text-white/55">{example.punch}</p>
        </div>

        {/* 连环画 + 卡片 并排，撑满剩余高度 */}
        <div className="flex min-h-0 flex-1 items-center justify-center gap-5 overflow-y-auto no-scrollbar md:gap-12 md:overflow-visible">
          <figure className="flex h-full min-w-0 flex-1 flex-col items-center justify-center">
            <figcaption className="mb-2 shrink-0 text-[11px] font-black uppercase tracking-[0.24em] text-white/40">
              AI 内心独白
            </figcaption>
            <img
              src={asset(example.comic)}
              alt={`${example.title} 连环画`}
              className="min-h-0 w-auto max-w-full flex-1 rounded-[16px] border border-white/10 object-contain shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
            />
          </figure>
          <figure className="flex h-full min-w-0 flex-1 flex-col items-center justify-center">
            <figcaption className={`mb-2 shrink-0 text-[11px] font-black uppercase tracking-[0.24em] ${style.text}/70`}>
              最终卡片
            </figcaption>
            <img
              src={asset(example.card)}
              alt={`${example.title} 卡片`}
              className={`min-h-0 w-auto max-w-full flex-1 rounded-[22px] border ${style.border} object-contain shadow-[0_24px_60px_rgba(0,0,0,0.6)]`}
            />
          </figure>
        </div>
      </motion.div>
    </motion.div>
  )
}
