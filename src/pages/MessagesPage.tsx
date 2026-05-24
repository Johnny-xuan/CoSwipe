import { useState } from 'react'
import { Search } from 'lucide-react'

interface StoryItem {
  id: string
  name: string
  avatarType: 'placeholder' | 'gradient-border' | 'heart' | 'anime' | 'default'
  avatarUrl?: string
  borderColor: 'dashed' | 'colorful' | 'black' | 'thin' | 'none'
  hasBadge?: boolean
}

interface MessageItem {
  id: string
  sender: string
  avatarType: 'messenger' | 'cat' | 'shopping' | 'avatar-eagle' | 'groupbuy' | 'heart' | 'anime' | 'avatar-yian' | 'girl'
  subtext: string
  time: string
  unread?: boolean
  readStatus?: 'read' | 'none'
}

export function MessagesPage() {
  const [stories] = useState<StoryItem[]>([
    { id: '1', name: '限时日常', avatarType: 'placeholder', borderColor: 'dashed', hasBadge: true },
    { id: '2', name: '用户_A', avatarType: 'gradient-border', borderColor: 'colorful' },
    { id: '3', name: 'AI智能助手', avatarType: 'heart', borderColor: 'black' },
    { id: '4', name: '用户_B', avatarType: 'anime', borderColor: 'thin' },
    { id: '5', name: '用户_C', avatarType: 'default', borderColor: 'thin' },
  ])

  const [messages] = useState<MessageItem[]>([
    {
      id: 'm1',
      sender: '互动消息',
      avatarType: 'messenger',
      subtext: '收到一条新的互动点赞',
      time: '周三',
    },
    {
      id: 'm2',
      sender: '兴趣交流社群 (2群)',
      avatarType: 'cat',
      subtext: '小组成员通过您的分享卡片加入了群聊，欢迎新成员加入...',
      time: '昨天 23:53',
    },
    {
      id: 'm3',
      sender: '购物消息',
      avatarType: 'shopping',
      subtext: '系统精选好物及相关商品推荐',
      time: '5/8',
    },
    {
      id: 'm4',
      sender: '用户_C',
      avatarType: 'avatar-eagle',
      subtext: '向您分享了精彩的视频内容',
      time: '4/22',
    },
    {
      id: 'm5',
      sender: '本地生活消息',
      avatarType: 'groupbuy',
      subtext: '专属大额立减优惠券已发放到账',
      time: '4/2',
      unread: true,
    },
    {
      id: 'm6',
      sender: 'AI智能助手',
      avatarType: 'heart',
      subtext: '[语音消息] 5"',
      time: '3/12',
      readStatus: 'read',
    },
    {
      id: 'm7',
      sender: '用户_B',
      avatarType: 'anime',
      subtext: '好的，收到！非常感谢您的解答！',
      time: '1/24',
      readStatus: 'read',
    },
    {
      id: 'm8',
      sender: '开发者技术群',
      avatarType: 'avatar-yian',
      subtext: '大家下午好，请问刚才展示的交互机制在小程序内能完美实现吗？',
      time: '1/19',
    },
  ])

  return (
    <div className="absolute inset-0 bg-white text-neutral-900 flex flex-col overflow-y-auto no-scrollbar">
      {/* 顶部高保真导航栏 */}
      <div className="absolute top-[44px] left-0 right-0 z-20 px-3.5 py-2.5 flex items-center justify-between bg-white/95 backdrop-blur border-b border-neutral-100/50 shrink-0 select-none">
        {/* 左侧：菜单 + 豆包 AI 呼吸球 */}
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center w-8 h-8 text-neutral-800 active:scale-90 transition-transform cursor-pointer" aria-label="菜单">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          
          {/* 豆包 AI 炫彩能量球 */}
          <div className="w-[26px] h-[26px] rounded-full bg-gradient-to-tr from-[#3b82f6] via-[#10b981] to-[#60a5fa] border border-white shadow-sm flex items-center justify-center relative overflow-hidden animate-pulse cursor-pointer">
            <div className="absolute inset-[2.5px] rounded-full bg-white/10 backdrop-blur-sm" />
            <div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-white/40" />
          </div>
        </div>

        {/* 中间：标题 */}
        <span className="text-[17px] font-extrabold text-neutral-900 tracking-wide">消息</span>

        {/* 右侧：搜索 + ⊕ (发消息入口) */}
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 flex items-center justify-center text-neutral-800 active:scale-90 transition-all cursor-pointer">
            <Search className="w-[19px] h-[19px] stroke-[2.2]" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-neutral-800 active:scale-90 transition-all cursor-pointer">
            <div className="w-[18px] h-[18px] rounded-full border-[2px] border-neutral-800 flex items-center justify-center font-bold text-xs text-neutral-800 pb-0.5 leading-none">
              +
            </div>
          </button>
        </div>
      </div>

      {/* 横向限时日常 Stories 区 */}
      <div className="flex items-center gap-4 px-4 pt-3 pb-3.5 border-b border-neutral-100 overflow-x-auto no-scrollbar mt-[88px] bg-white shrink-0 select-none">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center flex-shrink-0 cursor-pointer active:scale-95 transition-transform">
            {/* 头像圈环 */}
            <div className="relative">
              {story.borderColor === 'dashed' && (
                <div className="w-[58px] h-[58px] rounded-full border-[2.2px] border-dashed border-neutral-300 flex items-center justify-center p-[2.5px]">
                  <StoryAvatar type={story.avatarType} />
                </div>
              )}

              {story.borderColor === 'colorful' && (
                <div className="w-[58px] h-[58px] rounded-full bg-gradient-to-tr from-[#3b82f6] via-[#10b981] to-[#eab308] p-[2.2px] flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-white p-[1px] flex items-center justify-center">
                    <StoryAvatar type={story.avatarType} />
                  </div>
                </div>
              )}

              {story.borderColor === 'black' && (
                <div className="w-[58px] h-[58px] rounded-full border-[1.8px] border-neutral-800 flex items-center justify-center p-[2px]">
                  <StoryAvatar type={story.avatarType} />
                </div>
              )}

              {story.borderColor === 'thin' && (
                <div className="w-[58px] h-[58px] rounded-full border-[1.2px] border-neutral-200 flex items-center justify-center p-[2px]">
                  <StoryAvatar type={story.avatarType} />
                </div>
              )}

              {/* 加号徽章 */}
              {story.hasBadge && (
                <div className="absolute bottom-0 right-0 w-[18px] h-[18px] bg-[#22c55e] border-2 border-white rounded-full flex items-center justify-center text-white text-[10px] font-extrabold">
                  +
                </div>
              )}
            </div>

            {/* 名字 */}
            <span className="text-[11px] text-neutral-600 mt-1.5 font-bold tracking-tight truncate w-[64px] text-center">
              {story.name}
            </span>
          </div>
        ))}
      </div>

      {/* 消息列表区域 */}
      <div className="flex-1 bg-white select-none">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="flex items-center gap-3.5 px-4 py-3.5 border-b border-neutral-50/50 hover:bg-neutral-50/50 active:bg-neutral-100/50 transition-colors cursor-pointer"
          >
            {/* 头像 */}
            <div className="shrink-0">
              <MessageAvatar type={msg.avatarType} />
            </div>

            {/* 文本内容 */}
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <div className="flex items-center justify-between">
                <span className="text-[14.5px] font-extrabold text-neutral-900 truncate">
                  {msg.sender}
                </span>
                <span className="text-[10px] font-semibold text-neutral-400">
                  {msg.time}
                </span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <p className="text-[12.5px] font-medium text-neutral-400 truncate leading-snug pr-3">
                  {msg.readStatus === 'read' && (
                    <span className="text-[11px] text-neutral-300 font-bold mr-1">已读 ·</span>
                  )}
                  {msg.subtext}
                </p>
                {/* 消息小红点 */}
                {msg.unread && (
                  <div className="w-2 h-2 bg-[#fe2c55] rounded-full mr-0.5 shrink-0" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function StoryAvatar({ type }: { type: string }) {
  if (type === 'placeholder') {
    return (
      <div className="w-full h-full rounded-full bg-neutral-50 flex items-center justify-center p-[6px]">
        {/* 极简经典占位框 */}
        <div className="w-full h-full border border-neutral-300 rounded-[4px] relative flex items-center justify-center bg-white">
          <div className="w-2 h-2 bg-neutral-400 rounded-full" />
        </div>
      </div>
    )
  }

  if (type === 'gradient-border') {
    return (
      <div className="w-full h-full rounded-full bg-[#fae8ff] flex items-center justify-center overflow-hidden border border-neutral-100">
        <span className="text-base">👩🏻</span>
      </div>
    )
  }

  if (type === 'heart') {
    return (
      <div className="w-full h-full rounded-full bg-gradient-to-b from-[#12122b] to-[#25102d] flex items-center justify-center p-2 relative shadow-inner">
        {/* 浪漫日落爱心卡片徽标 */}
        <div className="w-3.5 h-3.5 bg-gradient-to-br from-pink-500 to-rose-600 rotate-45 relative rounded-[2px]" />
      </div>
    )
  }

  if (type === 'anime') {
    return (
      <div className="w-full h-full rounded-full bg-[#fef08a] flex items-center justify-center overflow-hidden border border-neutral-100">
        <span className="text-base">👦🏻</span>
      </div>
    )
  }

  return (
    <div className="w-full h-full rounded-full bg-[#dbeafe] flex items-center justify-center overflow-hidden border border-neutral-100">
      <span className="text-base">👱🏻</span>
    </div>
  )
}

function MessageAvatar({ type }: { type: string }) {
  if (type === 'messenger') {
    return (
      <div className="w-[46px] h-[46px] rounded-full bg-gradient-to-br from-[#ff2f74] to-[#f472b6] flex items-center justify-center text-white shadow-sm">
        {/* 互动消息闪电聊天泡泡 */}
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.93.55 3.73 1.5 5.25L2 22l4.85-1.45C8.27 21.45 10.07 22 12 22c5.48 0 10-4.52 10-10S17.48 2 12 2zm1 14h-2v-4h2v4zm0-6h-2V8h2v2z" />
        </svg>
      </div>
    )
  }

  if (type === 'cat') {
    return (
      <div className="w-[46px] h-[46px] rounded-full bg-[#fed7aa] flex items-center justify-center overflow-hidden border border-neutral-100 shadow-sm">
        <span className="text-2xl">🐱</span>
      </div>
    )
  }

  if (type === 'shopping') {
    return (
      <div className="w-[46px] h-[46px] rounded-full bg-gradient-to-br from-[#ef4444] to-[#f87171] flex items-center justify-center text-white shadow-sm">
        {/* 购物车红底气泡 */}
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
        </svg>
      </div>
    )
  }

  if (type === 'avatar-eagle') {
    return (
      <div className="w-[46px] h-[46px] rounded-full bg-[#bfdbfe] flex items-center justify-center overflow-hidden border border-neutral-100 shadow-sm">
        <span className="text-2xl">👨🏼</span>
      </div>
    )
  }

  if (type === 'groupbuy') {
    return (
      <div className="w-[46px] h-[46px] rounded-full bg-gradient-to-br from-[#f97316] to-[#fb923c] flex items-center justify-center text-white shadow-sm">
        {/* 团购店铺橙底包 */}
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4L3 12v2c0 .55.45 1 1 1h1v6h10v-6h4v6h2v-6h1c.55 0 1-.45 1-1zM6 18v-4h4v4H6z" />
        </svg>
      </div>
    )
  }

  if (type === 'heart') {
    return (
      <div className="w-[46px] h-[46px] rounded-full bg-gradient-to-b from-[#12122b] to-[#25102d] flex items-center justify-center relative shadow-sm border border-neutral-800">
        <div className="w-[13px] h-[13px] bg-gradient-to-br from-pink-500 to-rose-600 rotate-45 rounded-[2px]" />
      </div>
    )
  }

  if (type === 'anime') {
    return (
      <div className="w-[46px] h-[46px] rounded-full bg-[#fef08a] flex items-center justify-center overflow-hidden border border-neutral-100 shadow-sm">
        <span className="text-2xl">👦🏻</span>
      </div>
    )
  }

  return (
    <div className="w-[46px] h-[46px] rounded-full bg-[#ffedd5] flex items-center justify-center overflow-hidden border border-neutral-100 shadow-sm">
      <span className="text-2xl">👨🏽</span>
    </div>
  )
}

