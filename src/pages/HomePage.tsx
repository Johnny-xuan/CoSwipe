import { useState } from 'react'
import { Search } from 'lucide-react'

export function HomePage() {
  const [activeTab, setActiveTab] = useState<'recommend' | string>('recommend')

  const tabs = [
    { key: 'hefei', label: '合肥' },
    { key: 'jingxuan', label: '精选' },
    { key: 'live', label: '直播' },
    { key: 'tuangou', label: '团购' },
    { key: 'following', label: '关注' },
    { key: 'mall', label: '商城' },
    { key: 'recommend', label: '推荐' },
  ]

  return (
    <div className="absolute inset-0 bg-neutral-950 flex flex-col">
      {/* 1:1 复刻顶部高保真双排/导航栏 */}
      <div className="absolute top-[44px] left-0 right-0 z-20 px-3 flex items-center justify-between text-white select-none pointer-events-auto">
        {/* 左侧三条杠菜单按钮 */}
        <button className="flex items-center justify-center w-8 h-8 text-white/90 active:scale-90 transition-transform cursor-pointer" aria-label="菜单">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* 中间频道分类标签 (紧凑横排，完美塞入 390px 屏幕) */}
        <div className="flex items-center gap-x-[7px] text-[13px] font-bold text-white/70 tracking-tight">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative py-1 transition-all cursor-pointer ${
                  isActive ? 'text-white font-extrabold text-[13.5px]' : 'hover:text-white/90 active:scale-95'
                }`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-4 h-[2px] bg-white rounded-full" />
                )}
              </button>
            )
          })}
        </div>

        {/* 右侧搜索按钮 */}
        <button className="flex items-center justify-center w-8 h-8 text-white/90 active:scale-90 transition-transform cursor-pointer" aria-label="搜索">
          <Search className="w-[18px] h-[18px] stroke-[2.8]" />
        </button>
      </div>

      {/* 视频区占位 */}
      <div className="flex-1 flex items-center justify-center text-white/40 text-sm">
        视频流区（待填充）
      </div>
    </div>
  )
}

