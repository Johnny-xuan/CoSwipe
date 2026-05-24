import { motion } from 'framer-motion'
import { asset } from '@/lib/asset'

/**
 * Tab4「怎么运转」：CoSwipe 系统架构 + 抖音平台可扩展性。
 *
 * 主视觉是 teaser.png（完整链路图），配 4 条核心原则 + Demo→Production 对照 + 金句。
 */

const principles = [
  {
    title: 'Agent Router',
    en: 'Decide if speak',
    body: '不是模式分发器，是上下文理解器。默认沉默——只有当卡片价值高于打扰成本，才开口。',
    accent: 'text-router-purple',
    border: 'border-router-purple/24',
    bg: 'bg-router-purple/[0.06]',
  },
  {
    title: '4 通道 Downstream',
    en: 'content · dialogue · emotion · profile',
    body: '每次回应触发四种可组合的承接：换 feed、开对话、AI 表态、写画像。挂在每个 action 上。',
    accent: 'text-direct-cyan',
    border: 'border-direct-cyan/24',
    bg: 'bg-direct-cyan/[0.06]',
  },
  {
    title: '弱信号闭环',
    en: 'Profile writeback w/ ttl',
    body: '每次回应不是永久标签，是带 confidence/evidence/ttl 的弱信号。累积影响下一次 Router 决策。',
    accent: 'text-challenge-orange',
    border: 'border-challenge-orange/24',
    bg: 'bg-challenge-orange/[0.06]',
  },
  {
    title: 'LLM 只动嘴',
    en: 'LLM writes copy, not logic',
    body: 'LLM 只生成文案；触发判断、按钮、downstream、画像写回，全部由 workflow 用模板控制。',
    accent: 'text-mirror-pink',
    border: 'border-mirror-pink/24',
    bg: 'bg-mirror-pink/[0.06]',
  },
]

const compareRows = [
  { layer: 'RouterContext', demo: '静态 mock 数据', prod: '实时特征服务' },
  { layer: 'Trigger', demo: '固定 K-window / 触发表', prod: '周期 + 事件驱动' },
  { layer: 'Candidate Generator', demo: '规则 + 预置数据', prod: '规则 + 小模型 / LLM 辅助' },
  { layer: 'Card Copy', demo: 'LLM live + fallback', prod: '小模型 / 模板 / 缓存 + 高价值 LLM' },
  { layer: 'Renderer', demo: 'React 组件', prod: '客户端原生 / Server-Driven UI' },
  { layer: 'Downstream', demo: 'mutate feedSequence', prod: '推荐系统 slot 调度' },
  { layer: 'Profile', demo: '内存对象', prod: '画像服务 + 衰减聚合' },
  { layer: 'Visual', demo: 'AIGC 预生成', prod: '资产库复用' },
]

export function ArchitectureSection() {
  return (
    <section className="relative overflow-hidden bg-[#06070f] px-6 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_14%,rgba(90,101,124,0.13),transparent_32%),radial-gradient(circle_at_82%_26%,rgba(138,155,180,0.1),transparent_32%),linear-gradient(180deg,#08080f_0%,#06070f_50%,#09080e_100%)]" />
      <div className="grain-overlay" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ① 顶部介绍 */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.42em] text-router-purple/72">
            System & Scalability
          </p>
          <h2 className="font-cn-display text-[clamp(2.3rem,5vw,4.4rem)] font-black leading-[1.1] tracking-normal">
            它背后是一套
            <br className="md:hidden" />
            <span className="bg-gradient-to-r from-router-purple via-direct-cyan to-mirror-pink bg-clip-text text-transparent">
              {' '}陪刷决策系统
            </span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/62">
            从 4 类上下文输入、到 Router 决策、Mode Workflow 挖 Connection、卡片生成与渲染、4 通道 Downstream，再到画像弱信号闭环——整条链路如下。
          </p>
        </div>

        {/* ② 架构主视觉：teaser.png */}
        <motion.figure
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-16"
        >
          <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.13),transparent_72%)] blur-2xl" />
          <img
            src={asset('/architecture.png')}
            alt="CoSwipe 完整系统架构：Context Inputs → Agent Router → Mode Workflows → ConnectionCandidate → CardSpec → Renderer → User Response → 4-channel Downstream → Profile Writeback → 闭环回到 Long-term Profile"
            className="relative w-full rounded-[20px] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
          />
        </motion.figure>

        {/* ③ 4 条核心原则 */}
        <div className="mt-24">
          <p className="mb-8 text-center text-[11px] font-black uppercase tracking-[0.36em] text-white/32">
            Core Principles · 四条贯穿原则
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <article
                key={p.title}
                className={`rounded-[22px] border ${p.border} ${p.bg} p-5 backdrop-blur-sm`}
              >
                <p className={`mb-1.5 text-[10px] font-black uppercase tracking-wider ${p.accent}`}>
                  {p.en}
                </p>
                <h4 className="font-cn-display text-lg font-black text-white">{p.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{p.body}</p>
              </article>
            ))}
          </div>
        </div>

        {/* ④ Demo → Production 对照 */}
        <div className="mt-24">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.34em] text-direct-cyan/64">
              From Demo to Production
            </p>
            <h3 className="font-cn-display text-[clamp(1.8rem,3.6vw,3.2rem)] font-black leading-tight">
              接口不变，<span className="text-direct-cyan">实现替换</span>
            </h3>
            <p className="mt-5 text-base leading-relaxed text-white/55">
              Demo 是静态网页模拟，但所有 schema / type / 接口都按 production 标准设计。真实接入抖音推荐平台时，只换实现，不动接口。
            </p>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.025] backdrop-blur-md">
            <div className="grid grid-cols-[1fr_1.4fr_1.4fr] gap-4 border-b border-white/10 px-6 py-4 text-[11px] font-black uppercase tracking-[0.28em]">
              <span className="text-white/40">Layer</span>
              <span className="text-mirror-pink/80">Demo（当前）</span>
              <span className="text-direct-cyan/80">Production（可落地）</span>
            </div>
            {compareRows.map((row, i) => (
              <div
                key={row.layer}
                className={`grid grid-cols-[1fr_1.4fr_1.4fr] gap-4 px-6 py-3.5 text-sm ${
                  i % 2 === 0 ? 'bg-white/[0.015]' : ''
                }`}
              >
                <span className="font-bold text-white/82">{row.layer}</span>
                <span className="text-white/55">{row.demo}</span>
                <span className="text-white/72">{row.prod}</span>
              </div>
            ))}
          </div>

          {/* 落地说明 */}
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-white/45">
            Production 不应假设每张卡都实时调大模型——可用模板化生成 / 小模型 / 离线候选 / 高频
            Connection 缓存，只在高价值触发时调 LLM。
          </p>
        </div>

        {/* ⑤ 收尾金句 */}
        <div className="mt-24 text-center">
          <p className="font-cn-display text-[clamp(1.5rem,3vw,2.6rem)] font-black leading-tight text-white/92">
            CoSwipe 不是一张卡片，
            <br />
            是一个嵌入信息流的
            <span className="text-direct-cyan">陪刷决策系统</span>。
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/52">
            每一次接受、回怼、表达和划走，都会让它更懂你下一刻。
          </p>
        </div>
      </div>
    </section>
  )
}
