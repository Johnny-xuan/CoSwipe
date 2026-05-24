import { ArrowRight } from 'lucide-react'

const videoCards = [
  { title: '下班后 5 分钟拉伸', meta: '停留 12s', color: 'from-direct-cyan/18' },
  { title: '周末不早起也能去', meta: '收藏', color: 'from-mirror-pink/18' },
  { title: '工位肩颈自救', meta: '主动搜索', color: 'from-challenge-orange/18' },
  { title: '快速划走的高强度训练', meta: '快速划走', color: 'from-router-purple/18' },
  { title: '小房间今晚舒服一点', meta: '高停留', color: 'from-direct-cyan/18' },
  { title: '低成本通勤穿搭', meta: '反复观看', color: 'from-mirror-pink/18' },
]

export function CoverSection({ onEnter }: { onEnter: () => void }) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#05060d] px-6 py-10 text-white">
      <div className="absolute inset-0 opacity-30">
        <FeedRain />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,13,0.28),rgba(5,6,13,0.74)_42%,rgba(5,6,13,0.96))]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(138,155,180,0.08),transparent_58%)]" />

      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl flex-col items-center justify-center text-center">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.42em] text-white/28">
          Silent Feed
        </p>
        <h1 className="max-w-4xl font-cn-display text-[clamp(2.2rem,6vw,5.8rem)] font-black leading-[1.08] tracking-normal text-white/92">
          信息流早就读懂了你，
          <br />
          却只把理解藏进下一条推荐。
        </h1>
        <div className="mt-9 max-w-2xl space-y-3 text-[clamp(1rem,2vw,1.35rem)] leading-relaxed text-white/62">
          <p>停留、收藏、搜索、划走……这些动作都在写下你的状态。</p>
          <p>但过去，它们只会让系统继续推。</p>
          <p>没有人把它说出来，也没有人让你回应它。</p>
        </div>
        <button onClick={onEnter} className="group mt-16 flex flex-col items-center gap-4">
          <span className="text-sm font-bold tracking-[0.18em] text-direct-cyan/80 transition group-hover:text-direct-cyan">
            如果推荐系统能开口，它应该说什么？
          </span>
          <span className="flex items-center gap-2 rounded-full border border-direct-cyan/30 bg-direct-cyan/[0.06] px-6 py-3 text-sm font-black text-white/88 backdrop-blur-sm transition-all group-hover:gap-3 group-hover:border-direct-cyan/55 group-hover:bg-direct-cyan/14">
            让它开口
            <ArrowRight className="h-4 w-4 stroke-[2.4]" />
          </span>
        </button>
      </div>
    </section>
  )
}

const columnConfigs = [
  { speed: 38, direction: 'normal', blurPx: 3.2, opacityVal: 0.16 }, // Far Left (ambient)
  { speed: 26, direction: 'reverse', blurPx: 1.8, opacityVal: 0.40 }, // Left-Mid
  { speed: 18, direction: 'normal', blurPx: 0.6, opacityVal: 0.65 }, // Left-Center
  { speed: 12, direction: 'reverse', blurPx: 0, opacityVal: 0.85 }, // Exact Center (Fast, ultra-sharp!)
  { speed: 15, direction: 'normal', blurPx: 0.6, opacityVal: 0.65 }, // Right-Center
  { speed: 22, direction: 'reverse', blurPx: 1.8, opacityVal: 0.45 }, // Right-Mid
  { speed: 34, direction: 'normal', blurPx: 3.0, opacityVal: 0.20 }, // Far Right (ambient)
]

function FeedRain() {
  const extendedCards = [...videoCards, ...videoCards, ...videoCards, ...videoCards]

  return (
    <div className="absolute left-1/2 -top-[25vh] flex h-[260vh] w-[160vw] -translate-x-1/2 -rotate-[8deg] gap-6">
      {columnConfigs.map((cfg, columnIndex) => (
        <div
          key={columnIndex}
          className="flex flex-1 flex-col gap-6 animate-silent-scroll"
          style={{
            animationDuration: `${cfg.speed}s`,
            animationDirection: cfg.direction,
            filter: `blur(${cfg.blurPx}px)`,
            opacity: cfg.opacityVal,
          }}
        >
          {extendedCards.map((card, index) => (
            <div
              key={`${columnIndex}-${index}`}
              className={`relative h-64 shrink-0 overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-b ${card.color} to-black/80 p-2 shadow-2xl`}
            >
              <div className="relative flex h-full w-full flex-col justify-end rounded-[14px] border border-white/5 bg-black/40 p-4">
                {/* Fake Interaction Icons */}
                <div className="absolute bottom-10 right-3 flex flex-col gap-3 opacity-30">
                  <div className="h-5 w-5 rounded-full bg-white/40" />
                  <div className="h-5 w-5 rounded-full bg-white/40" />
                  <div className="h-5 w-5 rounded-full bg-white/40" />
                </div>
                {/* Fake Progress Bar */}
                <div className="absolute bottom-3 left-4 right-4 h-1 rounded-full bg-white/10">
                  <div className="h-full w-1/3 rounded-full bg-white/30" />
                </div>
                <p className="z-10 max-w-[75%] text-[13px] font-bold leading-snug text-white/70 drop-shadow-md">
                  {card.title}
                </p>
                <p className="z-10 mt-1.5 mb-2 text-[10px] font-medium text-white/40">
                  {card.meta}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
