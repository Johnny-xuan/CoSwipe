/**
 * 三个陪刷模式的深度展开数据 —— 给 Section 2 用，每个模式独占一个 viewport。
 * 内容来自 phase1.md 的 hero example。
 */

export interface ModeDeepDive {
  key: 'mirror' | 'direct' | 'challenge'
  enName: string
  zhName: string
  verb: string
  oneLine: string

  // 它看见 / 它做 / 它给
  sees: string
  does: string
  gives: string

  // 心理感受
  feels: string
  feelsDetail: string

  // vs 普通推荐
  vsBefore: string
  vsAfter: string

  // 黄金结构 / 关键边界
  goldenRule: string
  goldenRuleDetail: string

  // Hero example
  heroTitle: string
  heroSetup: string[]
  heroCardTitle: string
  heroCardLines: string[]
  heroAccept: string
  heroPushback: string
  heroWhy: string
}

export const MIRROR_DEEP: ModeDeepDive = {
  key: 'mirror',
  enName: 'Mirror',
  zhName: '吐槽模式',
  verb: '点破反差',
  oneLine: 'AI 看见你短期行为和长期行为之间的反差，用轻微调侃说出来，然后递一个台阶。',

  sees: '你行为里的反差',
  does: '朋友式点破，不是审判',
  gives: '一个不让你尴尬的台阶',

  feels: '"它怎么这么懂我？"',
  feelsDetail: '被看见 + 被轻轻戳中。用户会瞬间反应：靠，它刚刚真的看见我是怎么刷的。这不就是我吗？',

  vsBefore: '"你喜欢周边游，那继续给你推周边游。"',
  vsAfter: '"我刚刚看见你嘴上/收藏夹是 A，但你现在刷出来的是 B。这个反差有点好笑，我替你说出来。"',

  goldenRule: '点破 → 调侃 → 递台阶',
  goldenRuleDetail: '一定不能变成审判。最后必须给一个低压力出口——"我不要求你早起，也不教育你自律。我给你一个下午出门也不亏的版本。"',

  heroTitle: '周五收藏，周六赖床',
  heroSetup: [
    '周五晚上，用户连续收藏：',
    '《成都周末 1 天往返小众路线》',
    '《不早起也能去的周边游》',
    '《周六下午出发也不亏的地方》',
    '',
    '长期画像显示：她每到周五都收藏周边游攻略，但周末打开收藏次数很少，周六上午更常刷"周末在家躺着也很好"。',
  ],
  heroCardTitle: '我刚刚都看见了',
  heroCardLines: [
    '你今晚又收藏了 3 条周边游攻略。',
    '但根据你之前的记录，',
    '你的周末旅行经常是：',
    '周五收藏，周六赖床。',
    '',
    '不是不想出去，',
    '是那些攻略都太像"完整旅行计划"了。',
  ],
  heroAccept: '给我一个下午出门也不亏的版本',
  heroPushback: '少管我',
  heroWhy: '它没攻击用户，是戳中了一个很普遍的状态——周五晚上雄心壮志，周六早上原地关机。最后递台阶——所以它不会烦。',
}

export const DIRECT_DEEP: ModeDeepDive = {
  key: 'direct',
  enName: 'Direct',
  zhName: '直击模式',
  verb: '翻译真实需求',
  oneLine: 'AI 从你刚刚高停留、点赞、收藏的视频里，挖出表层兴趣背后的真实需求，给一个更准的观看入口。',

  sees: '表层兴趣背后的真实需求',
  does: '把没说出口的话翻译出来',
  gives: '一个更准的观看入口',

  feels: '"对，我真正想要的是这个。"',
  feelsDetail: '被说中真实需求。用户会觉得：我刚刚刷这些视频，其实不是想看更多同类，我真正想要的是这个角度。',

  vsBefore: '"你看了 A，那继续给你 A。"',
  vsAfter: '"你表面上在看 A，但你真正想解决的是 B。我直接把 B 点出来，再给你看最贴 B 的内容。"',

  goldenRule: '先翻译，再承接',
  goldenRuleDetail: '直接推荐只做"相似内容续推"。直击模式先完成一次"需求翻译"——区分清楚"表层兴趣"和"真实需求"，再给出一个更准的入口。',

  heroTitle: '租房改造，其实想要今晚立刻舒服一点',
  heroSetup: [
    '晚上刷到：',
    '《出租屋桌面改造前后对比》',
    '《小房间不打孔收纳，真的能多出半面墙》',
    '《下班后 5 分钟恢复房间秩序》',
    '《小房间氛围灯布置》',
    '',
    '普通推荐会继续推更多出租屋改造视频。',
  ],
  heroCardTitle: '你真正想要的，可能不是这个',
  heroCardLines: [
    '你刚刚看的几条租房改造，',
    '表面是在讲桌面、灯光、收纳。',
    '',
    '但你真正想要的可能不是"完整改造"。',
    '',
    '是今晚回到房间，',
    '立刻舒服一点。',
  ],
  heroAccept: '看一个 5 分钟能做的版本',
  heroPushback: '我只是想房间别这么乱',
  heroWhy: '表层兴趣是"租房改造"，真实需求是"我现在生活有点乱，想让当下环境立刻舒服一点"。所以承接的不是大改造教程，而是"5 分钟整理版"。它没有突然转向，也没有分析人格——只是在说"我知道你刚才为什么停在这里"。',
}

export const CHALLENGE_DEEP: ModeDeepDive = {
  key: 'challenge',
  enName: 'Challenge',
  zhName: '挑战模式',
  verb: '邀请轻参与',
  oneLine: 'AI 基于你刚刚看过的一组内容，生成一个 3 秒内能完成的小互动，让你从被动观看变成轻量参与。',

  sees: '可参与的轻量瞬间',
  does: '朋友式邀请，不是考试',
  gives: '一个 3 秒就能玩完的入口',

  feels: '"我顺手玩一下。"',
  feelsDetail: '轻量参与感。用户会觉得：我不用认真学习，也不用进入工具状态。只是顺手点一下，还挺好玩。',

  vsBefore: '"你看了一堆，继续给你推更多。"',
  vsAfter: '"你刚刚看了这么多，要不你选一下？"',

  goldenRule: '很轻、很短、很生活化',
  goldenRuleDetail: '最怕变成考试。不需要输入文字、不需要答对、不评价用户、点一下就结束、点完以后给一个有用承接。',

  heroTitle: '深夜晚餐快答',
  heroSetup: [
    '用户刚刚刷过：',
    '《下班太累也能做的 10 分钟晚餐》',
    '《便利店也能买到的低负担晚餐组合》',
    '《周五晚上不想做饭怎么办》',
    '《空气炸锅鸡腿真的比外卖香》',
    '',
    '普通推荐会继续推美食视频。',
  ],
  heroCardTitle: '快答一下',
  heroCardLines: [
    '现在 23:18。',
    '如果你已经很累了，',
    '最不容易翻车的晚餐是哪种？',
    '',
    'A. 沙拉',
    'B. 便利店鸡蛋 + 牛奶 + 玉米',
    'C. 水煮菜',
    'D. 不吃',
  ],
  heroAccept: '点 B 后回复："更推荐 B。因为今晚不是拼自律的时候。"',
  heroPushback: '不想选，给我省心版',
  heroWhy: '它不是饮食建议，是把用户刚看过的一组内容转成一个低压力选择题。不需要输入文字、不需要答对、不评价用户——点完以后给一个有用承接。"最容易成功的晚餐，不是最完美的，是你现在真的能做到的。"',
}

export const MODES_DEEP = [MIRROR_DEEP, DIRECT_DEEP, CHALLENGE_DEEP] as const
