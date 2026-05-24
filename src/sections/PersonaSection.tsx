import {
  ArrowRight,
  Bed,
  Bookmark,
  BriefcaseBusiness,
  Crosshair,
  HandFist,
  MirrorRound,
  Search,
  Sparkles,
  Timer,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { asset } from '@/lib/asset'

type SceneTone = 'mirror' | 'direct' | 'challenge'

const toneStyle: Record<SceneTone, {
  text: string
  bg: string
  halo: string
  line: string
}> = {
  mirror: {
    text: 'text-mirror-pink',
    bg: 'bg-mirror-pink/[0.08]',
    halo: 'bg-mirror-pink/12',
    line: 'from-mirror-pink/0 via-mirror-pink/22 to-mirror-pink/0',
  },
  direct: {
    text: 'text-direct-cyan',
    bg: 'bg-direct-cyan/[0.08]',
    halo: 'bg-direct-cyan/12',
    line: 'from-direct-cyan/0 via-direct-cyan/22 to-direct-cyan/0',
  },
  challenge: {
    text: 'text-challenge-orange',
    bg: 'bg-challenge-orange/[0.08]',
    halo: 'bg-challenge-orange/12',
    line: 'from-challenge-orange/0 via-challenge-orange/22 to-challenge-orange/0',
  },
}

const personaFrames = [
  {
    image: '/persona/1.png',
    label: '白天',
    title: '品牌电商运营',
    body: '看数据、改页面、盯素材、写活动文案。身体一直坐着，脑子一直在线。',
  },
  {
    image: '/persona/2.png',
    label: '晚上',
    title: '躺床刷视频',
    body: '她不是来完成任务的，只是想让生活轻一点：想出去、想舒服、想少费点劲。',
  },
  {
    image: '/persona/3.png',
    label: '被接住',
    title: 'CoSwipe 看见了这些信号',
    body: '周边游、肩颈、工位调整不再只是兴趣标签，而是一次可以被回应的状态。',
  },
]

const scenes = [
  {
    id: 'trip',
    no: '01',
    comicImage: '/scenes/mirror-comic.jpg',
    cardImage: '/scenes/mirror-card.png',
    window: '周边游窗口',
    mode: '吐槽',
    posture: '朋友式点破',
    tone: 'mirror' as const,
    modeIcon: <MirrorRound className="h-5 w-5 stroke-[1.9]" />,
    signalIcon: <Bookmark className="h-4 w-4 stroke-[1.9]" />,
    videos: [
      ['成都周末 1 天往返路线', '高停留'],
      ['不早起也能去的成都周边', '收藏'],
      ['周六下午出发也不亏', '完播'],
      ['不换乘懒人路线', '收藏'],
      ['打工人周末逃离计划', '高停留'],
    ],
    state: ['工作日经常收藏“想出去”。', '周末却更多在宅家、恢复电量、继续刷手机。'],
  },
  {
    id: 'neck',
    no: '02',
    comicImage: '/scenes/direct-comic.jpg',
    cardImage: '/scenes/direct-card.png',
    window: '靠背 / 肩颈窗口',
    mode: '直击',
    posture: '朋友式直说',
    tone: 'direct' as const,
    modeIcon: <Crosshair className="h-5 w-5 stroke-[1.9]" />,
    signalIcon: <Search className="h-4 w-4 stroke-[1.9]" />,
    videos: [
      ['上班族靠背到底有没有用', '主动搜索'],
      ['办公室久坐，腰靠怎么选', '主动搜索'],
      ['3 分钟肩颈拉伸', '高停留'],
      ['低头看电脑脖子酸', '完播'],
      ['下班后肩背放松', '收藏'],
    ],
    state: ['她不是偶然刷到拉伸。', '主动搜索“靠背”和“腰靠”，说明她在找一个更根上的办法。'],
  },
  {
    id: 'desk',
    no: '03',
    comicImage: '/scenes/challenge-comic.jpg',
    cardImage: '/scenes/challenge-card.png',
    window: '工位自检窗口',
    mode: '挑战',
    posture: '朋友式邀请',
    tone: 'challenge' as const,
    modeIcon: <HandFist className="h-5 w-5 stroke-[1.9]" />,
    signalIcon: <Timer className="h-4 w-4 stroke-[1.9]" />,
    videos: [
      ['屏幕高度不对，肩颈会紧', '高停留'],
      ['腰靠不是越软越好', '完播'],
      ['鼠标放太远会代偿', '收藏'],
      ['键盘高度怎么摆', '高停留'],
      ['3 分钟工位自检', '完播'],
    ],
    state: ['她开始看屏幕、腰靠、鼠标、键盘这些细节。', '继续讲原理不如拉她做一个 3 秒小动作。'],
  },
]

export function PersonaSection() {
  return (
    <section className="relative overflow-hidden bg-[#06070f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(205,168,122,0.11),transparent_29%),radial-gradient(circle_at_84%_22%,rgba(138,155,180,0.1),transparent_33%),linear-gradient(180deg,#080812_0%,#06070f_46%,#09080e_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent" />
      <div className="grain-overlay" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <SectionHeader />
        <PersonaIntro />

        <div className="mt-28">
          <div className="mb-6 grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.34em] text-direct-cyan/64">
                Three Feed Moments
              </p>
              <h3 className="font-cn-display text-[clamp(2.6rem,5vw,5.6rem)] font-black leading-[1.02] tracking-normal">
                三幕流程体验
              </h3>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-white/52">
              左侧是刚刚刷到的视频流信号，中间是 CoSwipe 此刻的内心独白，右侧是最后真正出现在信息流里的卡片。
            </p>
          </div>

          <div className="space-y-10">
            {scenes.map((scene, index) => (
              <SceneChain key={scene.id} scene={scene} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeader() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
      <div>
        <p className="mb-4 text-[11px] font-black uppercase tracking-[0.36em] text-mirror-pink/72">
          Li Ran Case
        </p>
        <h2 className="font-cn-display text-[clamp(3rem,6vw,6.5rem)] font-black leading-[1.02] tracking-normal">
          先认识
          <br />
          李然
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
          她不是一个“兴趣标签集合”。她是白天被工作消耗，晚上靠刷视频恢复电量的人。
        </p>
      </div>

      <div className="rounded-[26px] bg-white/[0.035] p-5 backdrop-blur-xl">
        <div className="flex flex-wrap gap-3 text-sm font-bold text-white/68">
          <ProfileChip icon={<BriefcaseBusiness className="h-4 w-4" />} text="27 岁 · 成都 · 品牌电商运营" />
          <ProfileChip icon={<Bed className="h-4 w-4" />} text="晚上躺床刷视频，只想让生活轻一点" />
          <ProfileChip icon={<Sparkles className="h-4 w-4" />} text="每 5 条视频，CoSwipe 思考一次" />
        </div>
      </div>
    </div>
  )
}

function PersonaIntro() {
  return (
    <div className="mt-16 grid gap-5 lg:grid-cols-3">
      {personaFrames.map((frame) => (
        <article key={frame.label} className="group relative min-h-[420px] overflow-hidden rounded-[28px] bg-black/28">
          <img
            src={asset(frame.image)}
            alt={`李然用户画像：${frame.label}`}
            className="absolute inset-0 h-full w-full object-cover opacity-78 transition duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/22 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="mb-2 w-fit rounded-full bg-black/32 px-3 py-1 text-xs font-black text-mirror-pink">
              {frame.label}
            </p>
            <h3 className="font-cn-display text-2xl font-black leading-tight text-white">{frame.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/62">{frame.body}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

function SceneChain({ scene, index }: { scene: (typeof scenes)[number]; index: number }) {
  const style = toneStyle[scene.tone]

  return (
    <article className="relative min-h-[920px] overflow-visible py-20">
      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[82%] w-screen -translate-x-1/2 -translate-y-1/2 ${
          index % 2 === 0
            ? 'bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.034),transparent_64%)]'
            : 'bg-[radial-gradient(ellipse_at_center,rgba(138,155,180,0.04),transparent_64%)]'
        }`}
      />
      <div className="relative mb-8 flex items-end justify-between gap-6">
        <div>
          <p className={`mb-2 text-[11px] font-black uppercase tracking-[0.34em] ${style.text}`}>
            Act {scene.no}
          </p>
          <h4 className="font-cn-display text-[clamp(2rem,3.8vw,4.2rem)] font-black leading-[1.05] tracking-normal">
            {scene.window}
          </h4>
        </div>
        <div className={`hidden items-center gap-2 rounded-full ${style.bg} px-4 py-2 text-sm font-black ${style.text} md:flex`}>
          {scene.modeIcon}
          <span>{scene.mode} · {scene.posture}</span>
        </div>
      </div>

      <div className="relative grid gap-6 lg:grid-cols-[minmax(180px,0.48fr)_40px_minmax(460px,1.25fr)_40px_minmax(300px,0.72fr)] lg:items-center">
        <SignalWindow scene={scene} />
        <CuteArrow tone={scene.tone} />
        <ComicPanel scene={scene} />
        <CuteArrow tone={scene.tone} />
        <GeneratedCard scene={scene} />
      </div>
    </article>
  )
}

function SignalWindow({ scene }: { scene: (typeof scenes)[number] }) {
  const style = toneStyle[scene.tone]

  return (
    <div className="relative overflow-hidden rounded-[20px] bg-white/[0.026] p-3 backdrop-blur-md">
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />
      <div className="relative">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <p className={`text-[11px] font-black uppercase tracking-[0.22em] ${style.text}`}>Feed Signals</p>
            <p className="mt-1 text-xs text-white/38">5 条内容形成短期窗口</p>
          </div>
          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${style.bg} ${style.text}`}>
            {scene.signalIcon}
          </div>
        </div>

        <div className="space-y-1.5">
          {scene.videos.map(([title, meta]) => (
            <div key={title} className="flex items-center justify-between gap-2 rounded-[11px] bg-black/18 px-2.5 py-1.5">
              <span className="min-w-0 truncate text-[11px] font-bold text-white/68">{title}</span>
              <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-black ${style.bg} ${style.text}`}>
                {meta}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-[14px] bg-black/18 p-3">
          <p className="mb-2 text-xs font-black text-white/35">此刻状态</p>
          <div className="space-y-1.5">
            {scene.state.map((line) => (
              <p key={line} className="text-[11px] leading-relaxed text-white/54">{line}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ComicPanel({ scene }: { scene: (typeof scenes)[number] }) {
  const style = toneStyle[scene.tone]

  return (
    <div className="relative mx-auto w-full max-w-[580px]">
      <div className={`absolute -inset-8 rounded-[48px] ${style.halo} blur-3xl`} />
      <img
        src={asset(scene.comicImage)}
        alt={`李然真实体验连环画：${scene.mode}`}
        className="relative mx-auto max-h-[780px] w-auto max-w-full object-contain drop-shadow-[0_28px_62px_rgba(0,0,0,0.52)]"
      />
    </div>
  )
}

function GeneratedCard({ scene }: { scene: (typeof scenes)[number] }) {
  return (
    <div className="relative mx-auto w-full max-w-[390px]">
      <img
        src={asset(scene.cardImage)}
        alt={`李然真实体验最终卡片：${scene.mode}`}
        className="mx-auto max-h-[780px] w-auto max-w-full object-contain drop-shadow-[0_28px_62px_rgba(0,0,0,0.5)]"
      />
    </div>
  )
}

function CuteArrow({ tone }: { tone: SceneTone }) {
  const style = toneStyle[tone]

  return (
    <div className="flex items-center justify-center py-1 lg:py-0">
      <div className={`relative flex h-12 w-20 items-center justify-center rounded-full ${style.bg} ${style.text} animate-charm-wiggle lg:h-12 lg:w-12`}>
        <Sparkles className="absolute -left-1 -top-2 h-3.5 w-3.5 opacity-70" />
        <ArrowRight className="hidden h-6 w-6 stroke-[2.2] lg:block" />
        <ArrowRight className="h-6 w-6 rotate-90 stroke-[2.2] lg:hidden" />
        <Sparkles className="absolute -bottom-2 -right-1 h-3.5 w-3.5 opacity-70" />
      </div>
    </div>
  )
}

function ProfileChip({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-black/18 px-3 py-2">
      <span className="text-direct-cyan/74">{icon}</span>
      {text}
    </span>
  )
}
