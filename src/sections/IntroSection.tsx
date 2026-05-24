import { motion } from 'framer-motion'
import { asset } from '@/lib/asset'

export function IntroSection() {
  return (
    <section className="relative overflow-hidden bg-[#080812] px-6 py-24 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(205,168,122,0.06),transparent_40%,rgba(138,155,180,0.07)_80%,transparent)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ① 介绍：CoSwipe 是什么 */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.5em] text-mirror-pink/70">
            What is
          </p>
          {/* CoSwipe 产品标志：Boldonse 字体 + 金属流光，醒目放大 */}
          <h2
            className="text-neon animate-shimmer-bg text-[clamp(3rem,8vw,6.2rem)] leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              letterSpacing: '0.02em',
            }}
          >
            CoSwipe
          </h2>
          {/* 中文定位副标题（得意黑，和上面的 Boldonse 区分）*/}
          <p className="mt-7 font-cn-display text-[clamp(1.5rem,3.2vw,2.8rem)] font-black leading-tight text-white/92">
            信息流里的
            <span className="bg-gradient-to-r from-mirror-pink via-direct-cyan to-challenge-orange bg-clip-text text-transparent">
              {' '}AI 陪刷好友
            </span>
          </p>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/65">
            它不替你做决定，也不在旁边冷冰冰解释算法——而是把推荐做成一张张可互动的 AI Feed Card，在合适的时刻，像朋友一样接你一句。
          </p>
        </div>

        {/* ② 对比图：一张图讲完 现状 → CoSwipe → 三模式 → 闭环 */}
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-16"
        >
          <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-[radial-gradient(ellipse_at_center,rgba(138,155,180,0.12),transparent_70%)] blur-2xl" />
          <img
            src={asset('/compare.png')}
            alt="现在的推荐：系统在猜、你只能被动接收；CoSwipe：AI 陪刷好友在合适的时刻接你一句，三种模式，回应改变后续推荐"
            className="relative w-full rounded-[24px] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.5)]"
          />
        </motion.figure>

        {/* 承接：在原链路上加一个前台交互层 */}
        <p className="mx-auto mt-12 max-w-3xl text-center text-base leading-relaxed text-white/55">
          传统推荐在后台推断画像、继续推下一条；CoSwipe 在这条链路上加了一个
          <span className="text-direct-cyan/90"> 前台交互层</span>
          ——一张和视频平级的卡片，把系统看见的状态说出来，让你能点击、回怼、表达或选择。
        </p>

        {/* ③ 金句 */}
        <div className="mx-auto mt-14 grid max-w-3xl gap-6 border-t border-white/8 pt-10 md:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/32">传统推荐问</p>
            <p className="mt-1.5 text-xl font-medium text-white/48">下一条，推什么？</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-direct-cyan/60">CoSwipe 问</p>
            <p className="mt-1.5 text-xl font-black text-white/90">这一刻，AI 该怎么陪你说一句？</p>
          </div>
        </div>
      </div>
    </section>
  )
}
