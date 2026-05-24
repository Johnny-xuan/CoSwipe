import { ArrowRight } from 'lucide-react'
import { asset } from '@/lib/asset'

export function CoverSection({ onEnter }: { onEnter: () => void }) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#05060d] text-white">
      {/* AIGC 背景图：右侧推荐隧道 + 中心用户 + 固定按钮，左侧留空写字 */}
      <img
        src={asset('/cover-bg.png')}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* 左侧暗化：保证文字可读，同时右侧隧道视觉露出来 */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,13,0.94)_0%,rgba(5,6,13,0.78)_34%,rgba(5,6,13,0.22)_64%,transparent_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05060d] to-transparent" />

      {/* 左侧文字 */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-12">
        <div className="max-w-xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.42em] text-white/35">
            Silent Feed · 沉默的信息流
          </p>

          <h1 className="font-cn-display text-[clamp(2rem,4.2vw,3.8rem)] font-black leading-[1.2] tracking-normal text-white/95">
            推荐系统一直在<span className="text-mirror-pink">猜你</span>，
            <br />
            但你只能用<span className="text-white">几个按钮</span>回应它。
          </h1>

          <div className="mt-8 space-y-3 text-[clamp(0.98rem,1.5vw,1.2rem)] leading-relaxed text-white/62">
            <p>
              点赞、收藏、评论、转发，能告诉系统你
              <span className="text-white/82">可能喜欢什么</span>，
            </p>
            <p className="font-bold text-white/90">
              却很难说清你为什么停下、此刻什么状态、真正想解决什么。
            </p>
          </div>

          <button onClick={onEnter} className="group mt-12 inline-flex flex-col items-start gap-3">
            <span className="text-sm font-bold tracking-[0.14em] text-direct-cyan/80 transition group-hover:text-direct-cyan">
              如果回应能更准、更贴合此刻呢？
            </span>
            <span className="flex items-center gap-2 rounded-full border border-direct-cyan/30 bg-direct-cyan/[0.08] px-6 py-3 text-sm font-black text-white/88 backdrop-blur-sm transition-all group-hover:gap-3 group-hover:border-direct-cyan/55 group-hover:bg-direct-cyan/16">
              让它开口
              <ArrowRight className="h-4 w-4 stroke-[2.4]" />
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
