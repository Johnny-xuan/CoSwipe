import { ArrowRight, Heart, MessageCircle, Share2, Search } from 'lucide-react'

const videoCards = [
  { title: '下班后 5 分钟拉伸', color: 'from-direct-cyan/18' },
  { title: '周末不早起也能去', color: 'from-mirror-pink/18' },
  { title: '工位肩颈自救', color: 'from-challenge-orange/18' },
  { title: '快速划走的高强度训练', color: 'from-router-purple/18' },
  { title: '小房间今晚舒服一点', color: 'from-direct-cyan/18' },
  { title: '低成本通勤穿搭', color: 'from-mirror-pink/18' },
]

export function CoverSection({ onEnter }: { onEnter: () => void }) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#05060d] px-6 py-10 text-white">
      {/* 远景：极淡的视频瀑布纹理 */}
      <div className="absolute inset-0 opacity-[0.12]">
        <FeedRain />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,13,0.55),rgba(5,6,13,0.82)_50%,rgba(5,6,13,0.96))]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(138,155,180,0.06),transparent_60%)]" />

      <div className="relative z-20 mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* 左：大白话问题 + CTA */}
        <div>
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.42em] text-white/30">
            Silent Feed · 沉默的信息流
          </p>
          <h1 className="font-cn-display text-[clamp(2.4rem,5.5vw,5rem)] font-black leading-[1.1] tracking-normal text-white/94">
            它一直在
            <span className="text-mirror-pink">猜你</span>。
          </h1>
          <div className="mt-8 max-w-xl space-y-3 text-[clamp(1rem,1.6vw,1.3rem)] leading-relaxed text-white/62">
            <p>你停在哪条、收藏了什么、又划走了什么——它全看见了，越猜越准。</p>
            <p>而你能回应的，只有点赞、评论、分享、搜索这几个固定动作。</p>
            <p className="font-bold text-white/90">
              可这几个按钮，说不清你此刻到底想要什么。
            </p>
          </div>

          <button onClick={onEnter} className="group mt-12 inline-flex flex-col items-start gap-3">
            <span className="text-sm font-bold tracking-[0.14em] text-direct-cyan/80 transition group-hover:text-direct-cyan">
              如果回应能更准、更贴合此刻呢？
            </span>
            <span className="flex items-center gap-2 rounded-full border border-direct-cyan/30 bg-direct-cyan/[0.06] px-6 py-3 text-sm font-black text-white/88 backdrop-blur-sm transition-all group-hover:gap-3 group-hover:border-direct-cyan/55 group-hover:bg-direct-cyan/14">
              让它开口
              <ArrowRight className="h-4 w-4 stroke-[2.4]" />
            </span>
          </button>
        </div>

        {/* 右：包围对比图 */}
        <div className="flex flex-col items-center">
          <RecommendationTrap />
          <p className="mt-6 max-w-sm text-center text-sm leading-relaxed text-white/50">
            它的内容千变万化，<span className="text-white/80">你的回应只有那几个固定按钮。</span>
          </p>
        </div>
      </div>
    </section>
  )
}

/**
 * 包围对比图：8 个「推荐」从四周经连线持续向中心的「你」涌入（光点向内流动），
 * 中心的「你」只有几条想向外发声、却立刻断裂的虚线 —— 单向不对等。
 */
function RecommendationTrap() {
  const N = 8
  const nodes = Array.from({ length: N }, (_, i) => {
    const a = (i / N) * Math.PI * 2 - Math.PI / 2
    return { i, x: 50 + Math.cos(a) * 45, y: 50 + Math.sin(a) * 45 }
  })

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      {/* 推荐通道：外 → 中心，dash 向内流动（海量涌入）*/}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        {nodes.map((n) => (
          <line
            key={n.i}
            x1={n.x}
            y1={n.y}
            x2={50}
            y2={50}
            stroke="rgba(138,155,180,0.45)"
            strokeWidth={0.5}
            strokeDasharray="2.5 2.5"
            className="flow-line"
          />
        ))}
      </svg>

      {/* 四周推荐标签（无穷内容）*/}
      {nodes.map((n) => (
        <div
          key={n.i}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-bold text-white/50 backdrop-blur-sm"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          推荐
        </div>
      ))}

      {/* 中心「你」+ 仅有的 4 个固定回应按钮 */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2.5">
        <div className="glow-mirror flex h-[72px] w-[72px] items-center justify-center rounded-full border border-mirror-pink/40 bg-mirror-pink/[0.08] backdrop-blur-md">
          <span className="font-cn-display text-2xl font-black text-white">你</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/12 bg-black/45 px-3 py-1.5 backdrop-blur-md">
          <Heart className="h-3.5 w-3.5 text-white/55" />
          <MessageCircle className="h-3.5 w-3.5 text-white/55" />
          <Share2 className="h-3.5 w-3.5 text-white/55" />
          <Search className="h-3.5 w-3.5 text-white/55" />
        </div>
        <span className="text-[9px] tracking-[0.2em] text-white/40">仅有的回应</span>
      </div>
    </div>
  )
}

const columnConfigs = [
  { speed: 38, direction: 'normal', blurPx: 3.2, opacityVal: 0.16 },
  { speed: 26, direction: 'reverse', blurPx: 1.8, opacityVal: 0.4 },
  { speed: 18, direction: 'normal', blurPx: 0.6, opacityVal: 0.65 },
  { speed: 12, direction: 'reverse', blurPx: 0, opacityVal: 0.85 },
  { speed: 15, direction: 'normal', blurPx: 0.6, opacityVal: 0.65 },
  { speed: 22, direction: 'reverse', blurPx: 1.8, opacityVal: 0.45 },
  { speed: 34, direction: 'normal', blurPx: 3.0, opacityVal: 0.2 },
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
                <p className="z-10 max-w-[75%] text-[13px] font-bold leading-snug text-white/70 drop-shadow-md">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
