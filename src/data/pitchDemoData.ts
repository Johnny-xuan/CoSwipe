/**
 * Pitch website 的 demo 数据 —— 来自 demo_sample.md 的 4 窗口 + 0 幕介绍。
 *
 * 注意：这份数据是给 pitch 网页用的，不是真实运行时数据。
 */
import type { VideoData } from '@/components/demo/VideoPlaceholder'
import type { AICardData } from '@/components/demo/AICard'
import type { DialogueTurn, WorkflowLine } from '@/components/demo/DialoguePanel'

// === 用户 ===
export const liRan = {
  name: '李然',
  age: 27,
  city: '成都',
  job: '品牌电商运营',
  vibe: '工作日加班、晚 22:30 躺床刷视频。她不是来学习也不是来完成任务，只是想刷点"让生活变好一点"的内容。',
  oneLine: '她典型：想出去玩但起不来，想房间舒服但不想大改造，想穿得好看但早上不想动脑。',
}

export const interestClusters = [
  {
    key: 'trip' as const,
    name: '成都周边游',
    icon: '🚗',
    color: 'mirror' as const,
    saved: 18,
    pattern: '每周五收藏，周末打开次数很少',
    keywords: ['不早起', '不换乘', '下午出发', '不累'],
    insight: '她不是不想出去，她是不想执行复杂旅行计划。',
  },
  {
    key: 'home' as const,
    name: '租房改造 / 小房间整理',
    icon: '🏠',
    color: 'direct' as const,
    saved: 26,
    pattern: '高停留多是"前后对比"，真正回看和执行较少',
    keywords: ['低成本', '不打孔', '5 分钟', '立刻变舒服'],
    insight: '她表面在看改造，真实需求是"今晚立刻舒服一点"。',
  },
  {
    key: 'fit' as const,
    name: '通勤穿搭 / 省心搭配',
    icon: '👔',
    color: 'challenge' as const,
    saved: 14,
    pattern: '周日晚和工作日前一晚更容易刷',
    keywords: ['不费力', '普通人', '不出错', '省心'],
    insight: '她不是想变时尚博主，只是想明早不用思考也能穿得像认真出门。',
  },
]

// === Window 1: 周边游 → 吐槽卡 ===
export const window1Videos: VideoData[] = [
  { id: 'v01', title: '成都周末 1 天往返小众路线', category: '周边游', behavior: '高停留 · 收藏', tone: 'sunset' },
  { id: 'v02', title: '不早起也能去的成都周边', category: '周边游', behavior: '完播 · 收藏', tone: 'sunset' },
  { id: 'v03', title: '周六下午出发也不亏的地方', category: '周边游', behavior: '高停留', tone: 'cozy' },
  { id: 'v04', title: '成都周边不换乘懒人路线', category: '周边游', behavior: '收藏', tone: 'cozy' },
  { id: 'v05', title: '打工人周末逃离成都计划', category: '周边游', behavior: '完播', tone: 'sunset' },
]

export const mirrorCard: AICardData = {
  mode: 'mirror',
  badge: 'AI 陪刷好友 · 我刚刚都看见了',
  title: '周五收藏，周六赖床',
  body: [
    '你今晚又收藏了 3 条周边游攻略。',
    '但你的周末旅行经常是：周五收藏，周六赖床。',
    '不是不想出去，是那些攻略都太像"完整旅行计划"了。',
  ],
  actions: [
    { id: 'accept', label: '给我一个下午出门版', intent: 'accept' },
    { id: 'pushback', label: '少管我', intent: 'pushback' },
  ],
  highlightActionId: 'pushback',
}

export const mirrorDialogue: DialogueTurn[] = [
  { from: 'ai', text: '我刚刚都看见了。你今晚又收藏了 3 条周边游攻略，但你的周末经常是周五收藏，周六赖床。' },
  { from: 'user', text: '少管我', hint: '用户点击' },
  { from: 'ai', text: '好好好，我少管你。但下午出门版我先放后面，真醒了再看。' },
]

export const mirrorWorkflow: WorkflowLine[] = [
  { label: 'short_term', value: '5 周边游 · 3 收藏 · 2 高停留', color: 'cyan' },
  { label: 'long_term', value: '周五收藏 vs 周末低回看', color: 'cyan' },
  { label: 'mode', value: 'mirror（点破反差）', color: 'pink' },
  { label: 'connection', value: '"周五收藏，周六赖床"', color: 'purple' },
  { label: 'response', value: 'pushback_leave_me_alone', color: 'pink' },
  { label: 'emotion', value: 'acknowledge: "好好好，我少管你"', color: 'pink' },
  { label: 'profile', value: 'cooldown(mirror, 1d) · mode_pref −0.1', color: 'orange' },
]

// === Window 2: 租房改造 → 直击卡 ===
export const window2Videos: VideoData[] = [
  { id: 'v06', title: '出租屋桌面改造前后对比', category: '租房改造', behavior: '高停留', tone: 'mono' },
  { id: 'v07', title: '小房间不打孔收纳，真的多出半面墙', category: '收纳', behavior: '收藏', tone: 'cozy' },
  { id: 'v08', title: '下班后 5 分钟恢复房间秩序', category: '低成本整理', behavior: '完播', tone: 'mono' },
  { id: 'v09', title: '小房间氛围灯布置', category: '氛围改造', behavior: '高停留', tone: 'night' },
  { id: 'v10', title: '租房党低成本改造清单', category: '租房改造', behavior: '收藏', tone: 'mono' },
]

export const directCard: AICardData = {
  mode: 'direct',
  badge: 'AI 陪刷好友',
  title: '你真正想要的，可能不是这个',
  body: [
    '你刚刚看的几条租房改造，表面是在讲桌面、灯光、收纳。',
    '但你真正想要的，可能不是完整改造。',
    '是今晚回到房间，立刻舒服一点。',
  ],
  actions: [
    { id: 'accept', label: '看一个 5 分钟版本', intent: 'accept' },
    { id: 'redirect', label: '我只是想房间别这么乱', intent: 'pushback' },
  ],
  highlightActionId: 'redirect',
}

export const directDialogue: DialogueTurn[] = [
  { from: 'ai', text: '你刚刚反复看几条租房改造，但你真正想要的，可能不是完整改造——是今晚回到房间立刻舒服一点。' },
  { from: 'user', text: '我只是想房间别这么乱', hint: '用户点击' },
  { from: 'ai', text: '懂。那我先不推大改造了，接下来给你一点不用准备、马上能轻松一点的。' },
]

export const directWorkflow: WorkflowLine[] = [
  { label: 'short_term', value: '5 改造内容 · 2 收藏 · 3 高停留', color: 'cyan' },
  { label: 'long_term', value: '改造收藏 26 条 · 偏低成本', color: 'cyan' },
  { label: 'mode', value: 'direct（翻译真实需求）', color: 'pink' },
  { label: 'X → Y', value: '"改造"→"今晚立刻舒服一点"', color: 'purple' },
  { label: 'response', value: 'pushback_venting + need redirect', color: 'pink' },
  { label: 'content', value: 'feed 转向 5 分钟整理 / 治愈系', color: 'cyan' },
  { label: 'profile', value: 'current_state=low_energy(ttl 3d)', color: 'orange' },
]

// === Window 3: 通勤穿搭 → 挑战卡 ===
export const window3Videos: VideoData[] = [
  { id: 'v11', title: '普通女生通勤 Clean Fit', category: '通勤穿搭', behavior: '高停留', tone: 'mono' },
  { id: 'v12', title: '上班穿得舒服但不邋遢', category: '通勤穿搭', behavior: '完播', tone: 'mono' },
  { id: 'v13', title: '黑白灰怎么穿不无聊', category: '穿搭技巧', behavior: '收藏', tone: 'mono' },
  { id: 'v14', title: '早上不想搭配，就照这个穿', category: '省心穿搭', behavior: '完播', tone: 'mono' },
  { id: 'v15', title: '小个子通勤包怎么选', category: '配饰', behavior: '高停留', tone: 'cozy' },
]

export const challengeCard: AICardData = {
  mode: 'challenge',
  badge: 'AI 陪刷好友 · 快答一下',
  title: '明早赶通勤，哪套最不容易出错？',
  body: [],
  quizOptions: [
    { id: 'A', label: '黑色西装 + 牛仔裤' },
    { id: 'B', label: '卫衣 + 阔腿裤' },
    { id: 'C', label: '白衬衫 + 半裙' },
    { id: 'D', label: '全黑运动套装' },
  ],
  actions: [
    { id: 'easy', label: '不想选，直接给我省心版', intent: 'pushback' },
  ],
  highlightActionId: 'easy',
}

export const challengeDialogue: DialogueTurn[] = [
  { from: 'ai', text: '快答一下：明天早上赶通勤，最不容易出错的一套是？A / B / C / D' },
  { from: 'user', text: '不想选，直接给我省心版', hint: '用户点击' },
  { from: 'ai', text: '收到。今天脑子不营业。直接给你一个不用搭配脑子的版本。' },
]

export const challengeWorkflow: WorkflowLine[] = [
  { label: 'short_term', value: '5 通勤穿搭 · 主题连续', color: 'cyan' },
  { label: 'long_term', value: '偏省心 · 不费力 · 不出错', color: 'cyan' },
  { label: 'mode', value: 'challenge（邀请轻参与）', color: 'pink' },
  { label: 'candidate', value: '3 秒判断 + 省心反馈承接', color: 'purple' },
  { label: 'response', value: 'pushback_low_decision', color: 'pink' },
  { label: 'content', value: 'AI 替你选 + 注入省心穿搭', color: 'cyan' },
  { label: 'profile', value: 'current_state=low_decision · wants_easy', color: 'orange' },
]

// === Window 4: Downstream feed 兑现 ===
export const window4Videos: VideoData[] = [
  { id: 'v16', title: '成都周边下午出发也不亏的懒人路线', category: '周边游', behavior: '吐槽卡保留', tone: 'sunset' },
  { id: 'v17', title: '下班后 5 分钟让房间看起来舒服一点', category: '整理', behavior: '直击 downstream', tone: 'mono' },
  { id: 'v18', title: '普通人通勤万能公式：黑白灰不出错', category: '穿搭', behavior: '挑战 downstream', tone: 'mono' },
  { id: 'v19', title: '不想出门的周末，也可以这样恢复电量', category: '情绪生活', behavior: '情绪承接', tone: 'night' },
  { id: 'v20', title: '一个人住，怎么把晚上过舒服一点', category: '独居生活', behavior: '画像综合更新', tone: 'night' },
]
