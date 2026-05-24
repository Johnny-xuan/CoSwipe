import { Crosshair, HandFist, MirrorRound } from 'lucide-react'

const modes = [
  {
    id: 'mirror',
    label: '吐槽模式',
    subtitle: '朋友式点破',
    body: '看见你收藏与行为之间的反差，轻轻戳一下，让负罪感变成会心一笑。',
    example: '收藏夹已经出发了，本人还在床上刷手机。',
    text: 'text-mirror-pink',
    border: 'border-mirror-pink/22',
    bg: 'bg-mirror-pink/[0.05]',
    icon: <MirrorRound className="h-6 w-6 stroke-[1.8]" />,
  },
  {
    id: 'direct',
    label: '直击模式',
    subtitle: '朋友式直说',
    body: '穿透表层兴趣，说出你没说出口的真实需求，给一个更准的入口。',
    example: '你不是缺一个拉伸动作，是肩膀和脖子一整天都没被放过。',
    text: 'text-direct-cyan',
    border: 'border-direct-cyan/22',
    bg: 'bg-direct-cyan/[0.05]',
    icon: <Crosshair className="h-6 w-6 stroke-[1.8]" />,
  },
  {
    id: 'challenge',
    label: '挑战模式',
    subtitle: '朋友式邀请',
    body: '把刚刷过的一组内容，变成一个 3 秒就能完成的轻互动。',
    example: '如果只能先改一个地方，你会从哪里开始？',
    text: 'text-challenge-orange',
    border: 'border-challenge-orange/22',
    bg: 'bg-challenge-orange/[0.05]',
    icon: <HandFist className="h-6 w-6 stroke-[1.8]" />,
  },
]

export function IntroSection() {
  return (
    <section className="relative overflow-hidden bg-[#080812] px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(205,168,122,0.06),transparent_40%,rgba(138,155,180,0.07)_80%,transparent)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      {/* 破冰宣言：承接 Cover 的「如果推荐系统能开口」 */}
      <div className="relative z-10 mx-auto max-w-5xl py-10 text-center md:py-16">
        <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.46em] text-mirror-pink/70">
          CoSwipe Manifesto
        </p>
        <p className="font-cn-display text-[clamp(1.4rem,3vw,2.5rem)] font-light leading-[1.7] tracking-normal text-white/85">
          它开口，
          <br />
          不是替你做决定，也不在旁边冰冷地解释算法。
          <br />
          而是在读懂你的那一刻，像个懂你的朋友，
          <br />
          <span className="font-black text-chrome drop-shadow-[0_4px_16px_rgba(205,168,122,0.18)]">
            陪你聊上一句。
          </span>
        </p>
        <h2 className="mt-12 font-cn-display text-[clamp(3rem,8vw,7rem)] font-black uppercase tracking-[0.16em] text-white">
          CoSwipe
        </h2>
        <p className="mt-4 text-xs font-bold tracking-[0.42em] text-direct-cyan/80">
          信息流里的 AI 陪刷好友
        </p>
      </div>

      <hr className="mx-auto my-16 max-w-2xl border-white/5" />

      {/* 说清是什么 + 三模式静态预告 */}
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="font-cn-display text-[clamp(1.7rem,3.2vw,2.8rem)] font-black leading-snug text-white/90">
            它读你的<span className="text-direct-cyan">短期刷视频窗口</span>和<span className="text-mirror-pink">长期画像</span>，
            <br className="hidden md:block" />
            在合适的那一刻，以一张<span className="text-challenge-orange">能回应的卡片</span>出现。
          </h3>
          <p className="mt-5 text-base leading-relaxed text-white/45">它有三种陪你刷的方式——</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {modes.map((mode) => (
            <article
              key={mode.id}
              className={`rounded-[24px] border ${mode.border} ${mode.bg} p-6 backdrop-blur-sm`}
            >
              <div className="mb-5 flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${mode.border} bg-black/20 ${mode.text}`}
                >
                  {mode.icon}
                </div>
                <div>
                  <h4 className="text-xl font-black text-white">{mode.label}</h4>
                  <p className={`mt-0.5 text-xs font-bold ${mode.text}`}>{mode.subtitle}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/55">{mode.body}</p>
              <p className="mt-4 border-t border-white/8 pt-4 text-xs italic leading-relaxed text-white/40">
                {mode.example}
              </p>
            </article>
          ))}
        </div>

        {/* 对比金句：传统推荐 vs CoSwipe */}
        <div className="mx-auto mt-16 grid max-w-3xl gap-6 border-t border-white/8 pt-10 md:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/32">传统推荐拷问</p>
            <p className="mt-1.5 text-lg font-medium text-white/48">下一条视频，继续推什么？</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-direct-cyan/60">CoSwipe 回应</p>
            <p className="mt-1.5 text-lg font-black text-white/90">这一刻，我该怎么陪你说一句？</p>
          </div>
        </div>
      </div>
    </section>
  )
}
