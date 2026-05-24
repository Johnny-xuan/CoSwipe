/**
 * 第 8 部分：架构展示 + 抖音平台可扩展性。
 * 目前是占位骨架，待填充：
 *   块 A — CoSwipe 系统链路（短期窗口+长期画像 → Router → Connection → CardSpec → 卡片 → 回应 → Downstream → 写回画像，闭环）
 *   块 B — Demo→Production 对照 + Agentic Recommendation 交互层定位
 */
export function ArchitectureSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#06070f] px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(90,101,124,0.12),transparent_32%),linear-gradient(180deg,#08080f_0%,#06070f_60%,#09080e_100%)]" />
      <div className="grain-overlay" />

      <div className="relative z-10 mx-auto max-w-5xl text-center py-20">
        <p className="mb-4 text-[11px] font-black uppercase tracking-[0.36em] text-router-purple/72">
          System & Scalability
        </p>
        <h2 className="font-cn-display text-[clamp(2.6rem,5.5vw,5.4rem)] font-black leading-[1.04]">
          它背后<span className="text-direct-cyan">怎么运转</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/52">
          短期窗口 + 长期画像 → Router 判断出不出卡、出哪种 → Connection → CardSpec → 前端渲染 → 用户回应 → Downstream 改 feed、弱信号写回画像。
        </p>
        <p className="mx-auto mt-10 inline-block rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-bold text-white/38">
          架构链路图 + 抖音平台可扩展性 · 建设中
        </p>
      </div>
    </section>
  )
}
