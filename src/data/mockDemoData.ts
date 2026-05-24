import type { FeedVideoEntry, MicroEvent } from '@/types/schemas'

export interface WalkthroughStep {
  stepIndex: number
  title: string
  description: string
  feedType: 'video' | 'ai_card'
  videoData?: FeedVideoEntry
  aiCardData?: MicroEvent
  pitchHighlight: string
  downstreamExecuted?: string
}

// 预设 9 步高保真脱敏路演数据
export const DEMO_STEPS: WalkthroughStep[] = [
  {
    stepIndex: 0,
    title: '用户行为：自律期望',
    description: '模拟用户在深夜刷到减脂晚餐视频，表现出强烈的“想变健康”的期望，并点击了收藏。',
    feedType: 'video',
    pitchHighlight: '用户建立起“自律、健康”的囤积型收藏意图。',
    videoData: {
      index: 1,
      video_id: 'v_demo_001',
      title: '下班太累也能做的10分钟低卡营养晚餐',
      summary: '打工人快手餐，用鸡胸肉和时蔬做一份低卡晚餐',
      tags: ['健康轻食', '快手菜', '打工人'],
      topic: ['低卡晚餐'],
      watch_ratio: 0.95,
      favorited: true,
      liked: true,
      shared: false,
      commented: false,
      music: '原声 - @营养减脂达人',
      stats: { likes: 12400, comments: 450, favorites: 8900, shares: 1200 }
    }
  },
  {
    stepIndex: 1,
    title: '用户行为：出游期望',
    description: '临近周末，用户刷到成都周边的短途出游视频。产生想出去散心的意图，并加入收藏夹。',
    feedType: 'video',
    pitchHighlight: '建立起对“生活品质、户外散心”的收藏意图，继续囤积。',
    videoData: {
      index: 2,
      video_id: 'v_demo_002',
      title: '周末1天往返周边小众放松路线',
      summary: '都江堰周边静心古镇一日游，主打不请假低预算',
      tags: ['成都周边游', '周末去哪儿', '小众路线'],
      topic: ['周末出游'],
      watch_ratio: 0.88,
      favorited: true,
      liked: false,
      shared: false,
      commented: false,
      music: '原声 - @户外小向导',
      stats: { likes: 8500, comments: 210, favorites: 4300, shares: 540 }
    }
  },
  {
    stepIndex: 2,
    title: '用户行为：理想生活',
    description: '用户继续游荡，刷到温馨的出租屋改造前后对比视频，完播并点赞。',
    feedType: 'video',
    pitchHighlight: '用户喜欢看让生活变好的灵感，但通常停留在想象，行动率极低。',
    videoData: {
      index: 3,
      video_id: 'v_demo_003',
      title: '出租屋桌面低预算改造对比',
      summary: '使用不打孔收纳和温馨暖光布置18平米个人空间',
      tags: ['租房改造', '桌面收纳', '生活美学'],
      topic: ['租房改造'],
      watch_ratio: 0.92,
      favorited: true,
      liked: true,
      shared: false,
      commented: false,
      music: '温暖旋律 - @美学博主',
      stats: { likes: 32000, comments: 1100, favorites: 18000, shares: 3200 }
    }
  },
  {
    stepIndex: 3,
    title: '行为张力：身体是诚实的',
    description: '周五深夜，疲惫的用户刷到香气扑鼻的高热量外卖测评。虽然没有收藏，但身体很诚实地看完了全程并点了赞。',
    feedType: 'video',
    pitchHighlight: '理想（收藏低卡晚餐）与现实行为（完播高热量测评）在后台产生了极强的张力冲突！',
    videoData: {
      index: 4,
      video_id: 'v_demo_004',
      title: '深夜高热量外卖红黑测评',
      summary: '实测成都深夜必点炸鸡与烧烤外卖，高能治愈警告',
      tags: ['宵夜外卖', '美食测评', '周五夜晚'],
      topic: ['美食外卖'],
      watch_ratio: 1.0,
      favorited: false,
      liked: true,
      shared: true,
      commented: false,
      music: '爵士摇摆 - @吃货测评组',
      stats: { likes: 45000, comments: 2400, favorites: 2900, shares: 9800 }
    }
  },
  {
    stepIndex: 4,
    title: 'AI 微事件：镜像反差唤醒',
    description: '此时用户上滑，系统没有生硬推荐下一个视频，而是触发了 Mirror Workflow，戳穿用户低卡收藏 vs 深夜停留的反差。',
    feedType: 'ai_card',
    pitchHighlight: '首个路演高潮。把推荐系统的后台观察变成前台卡片，用“轻微冒犯”的损友语气叫醒用户。',
    aiCardData: {
      event_id: 'e_mirror_resurrect',
      texture: 'mirror',
      connection: {
        id: 'c_low_carb_vs_midnight',
        source_texture: 'mirror',
        observation: '用户今晚收藏多条低卡健康晚餐，但深夜高停留外卖炸鸡测评',
        relation: '长期健康自律期望与周五深夜即时犒劳的心理张力',
        hook: { type: 'behavior_contrast', description: '收藏在自律，深夜在犒劳' },
        evidence: { low_carb_saves: 4, midnight_watch_ratio: 1.0 }
      },
      card_spec: {
        visual: 'autopsy_report',
        voice: 'cold_forensic',
        title: '收藏夹“尸检”报告 #908',
        body: '发现：你今晚收藏了 4 条健康减脂晚餐，但刚把 100% 完备的炸鸡外卖测评也看完了。\n\n诊断：不是不自律，是忙碌了一周，周五深夜的电量过低。\n\n别去点外卖了，要不要复活一个真正能在 5 分钟内吃上的健康替代方案？',
        cta: [
          { label: '一键复活健康餐', action: 'revive_action' }
        ]
      },
      downstream_plan: {
        type: 'inject_video',
        target_video_id: 'v_demo_005',
        position: 'next_1'
      },
      state_update: { write_to_history: true }
    }
  },
  {
    stepIndex: 5,
    title: '下游闭环：复活视频注入',
    description: '用户点击了“一键复活”，上滑后发现，系统顺理成章地在下一屏注入了行动成本极低的低卡晚餐教程！',
    feedType: 'video',
    pitchHighlight: '证明 AI 卡片不是孤立的交互，而是通过 Downstream 机制真实地接回并改变了视频流。',
    downstreamExecuted: '由 Step 5 镜像卡点击一键复活注入',
    videoData: {
      index: 5,
      video_id: 'v_demo_005',
      title: '便利店也能搞定的 5 分钟无痛健康减脂餐',
      summary: '不用开火，无油烟，便利店鸡蛋加即食鸡胸肉，5分钟吃上',
      tags: ['极简减脂餐', '便利店搭配', '无痛自律'],
      topic: ['低卡晚餐'],
      watch_ratio: 0.96,
      favorited: true,
      liked: true,
      shared: false,
      commented: false,
      music: '轻快音乐 - @便利店美食家',
      stats: { likes: 19000, comments: 400, favorites: 12000, shares: 800 }
    }
  },
  {
    stepIndex: 6,
    title: 'AI 微事件：轻量答题挑战',
    description: '用户看完了极简餐，AI 紧接着推出了一张挑战卡，邀请用户进行一次关于深夜健康自律的极速快答。',
    feedType: 'ai_card',
    pitchHighlight: '通过 3 秒极简交互，把用户从视频的被动观看状态，拉入到轻量思考的主动参与中。',
    aiCardData: {
      event_id: 'e_challenge_dinner',
      texture: 'challenge',
      connection: {
        id: 'c_dinner_quiz',
        source_texture: 'challenge',
        observation: '用户刚看完 5 分钟无痛健康减脂餐，处于行动期望高点',
        relation: '趁热打铁，将输入信息转化为极轻量交互',
        hook: { type: 'testability', description: '无痛自律快答' },
        evidence: { recent_watch: 'v_demo_005' }
      },
      card_spec: {
        visual: 'quiz_card',
        voice: 'host',
        title: '深夜极速挑战',
        body: '现在这个深夜点，最不容易失败、最适合吃完去睡觉的自律晚餐是哪一种？',
        cta: [
          { label: 'A. 水煮生菜 (太痛苦)', action: 'ans_wrong' },
          { label: 'B. 鸡蛋 + 牛奶 (极简且有饱腹感)', action: 'ans_correct' },
          { label: 'C. 不吃饿着 (容易引起暴饮暴食)', action: 'ans_wrong' }
        ]
      },
      downstream_plan: {
        type: 'show_explanation_card'
      },
      state_update: { write_to_history: true }
    }
  },
  {
    stepIndex: 7,
    title: '用户行为：出游怕累的心态',
    description: '用户答完题继续刷，刷到一条周边短途出游视频，主打不早起、不挤人的“懒人”路线。',
    feedType: 'video',
    pitchHighlight: '系统后台结合 Step 2 的收藏，提炼出周然对于周边出游“既向往又怕累”的核心潜意识。',
    videoData: {
      index: 6,
      video_id: 'v_demo_006',
      title: '周末不想早起也能去的周边懒人避暑路线',
      summary: '下午1点出发，自驾直达溪谷，不用爬山不换乘的避暑方案',
      tags: ['懒人出游', '周边一日游', '避暑溪谷'],
      topic: ['周末出游'],
      watch_ratio: 0.91,
      favorited: true,
      liked: true,
      shared: false,
      commented: false,
      music: '蝉鸣原声 - @周末避暑大王',
      stats: { likes: 11000, comments: 340, favorites: 6500, shares: 1900 }
    }
  },
  {
    stepIndex: 8,
    title: 'AI 微事件：久别重逢的陪伴感',
    description: '最后，Reunion 工作流启动，抓取到了 Step 2 和 Step 8 用户对于周末出游“囤积了很多却总是怕累没去”的历史心绪，生成一张暖心的重逢卡。',
    feedType: 'ai_card',
    pitchHighlight: '压轴亮点。展示系统长期跨 session 记住用户偏好并进行关系回访的“AI 陪刷智能体”温情属性。',
    aiCardData: {
      event_id: 'e_reunion_trip',
      texture: 'reunion',
      connection: {
        id: 'c_reunion_weekend_lazy',
        source_texture: 'reunion',
        observation: '用户之前囤积了多条出游计划但未成行，今晚又收藏了不早起路线',
        relation: '前后的多次出游意图，都因为“怕累、行动成本高”而沉没',
        hook: { type: 'memory_echo', description: '你其实在等一个不早起的版本' },
        evidence: { previous_ignored_events: 1, current_saves: 'v_demo_006' }
      },
      card_spec: {
        visual: 'sticky_note',
        voice: 'past_self',
        title: '陪刷日记 · 老地方再见',
        body: '上周末那条都江堰一日游你没去。\n\n但这几天你又收藏了懒人避暑路线。\n\n我大概看穿你了：你不是不想出门，你是在等一个“不早起、不挤人、不折腾”的彻底懒人版本对不对？\n\n别等了，这次给你个绝不踩雷、离你超近的懒人宝藏单子：',
        cta: [
          { label: '揭晓懒人定制指南', action: 'reveal_action' }
        ]
      },
      downstream_plan: {
        type: 'fulfill_previous_promise'
      },
      state_update: { write_to_history: true }
    }
  }
]
