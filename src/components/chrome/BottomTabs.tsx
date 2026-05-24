// 仿抖音底部 5 tab：首页 / 朋友 / + / 消息 / 我
// 中间 "+" 比其他 tab 大，且形态是粗描边方块（不是文本）

import type { TabKey } from '@/types/schemas'

interface Props {
  activeTab: TabKey
  onTabChange: (tab: TabKey) => void
}

const TEXT_TABS: Array<{ key: TabKey; label: string }> = [
  { key: 'home', label: '首页' },
  { key: 'friends', label: '朋友' },
  { key: 'messages', label: '消息' },
  { key: 'profile', label: '我' },
]

export function BottomTabs({ activeTab, onTabChange }: Props) {
  return (
    <div
      className="h-[76px] flex items-start justify-between px-2 pt-2 shrink-0 relative z-30 bg-black/90 backdrop-blur border-t border-white/5"
      style={{ paddingBottom: 20 }}
    >
      {/* 左 2 tab */}
      <div className="flex-1 flex items-center justify-around mt-0.5">
        {TEXT_TABS.slice(0, 2).map((tab) => (
          <TabButton
            key={tab.key}
            label={tab.label}
            active={activeTab === tab.key}
            onClick={() => onTabChange(tab.key)}
          />
        ))}
      </div>

      {/* 中间 + 按钮 */}
      <div className="mt-0.5">
        <PlusButton />
      </div>

      {/* 右 2 tab */}
      <div className="flex-1 flex items-center justify-around mt-0.5">
        {TEXT_TABS.slice(2).map((tab) => (
          <TabButton
            key={tab.key}
            label={tab.label}
            active={activeTab === tab.key}
            onClick={() => onTabChange(tab.key)}
          />
        ))}
      </div>
    </div>
  )
}

function TabButton({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`text-[16px] py-2 px-1 transition-colors ${
        active
          ? 'text-white font-semibold'
          : 'text-white/70 font-medium hover:text-white/90'
      }`}
    >
      {label}
      {label === '首页' && active && (
        <span className="inline-block ml-0.5 text-[10px] align-top opacity-70">⇋</span>
      )}
    </button>
  )
}

function PlusButton() {
  return (
    <button
      className="flex items-center justify-center w-[46px] h-[32px] mx-2"
      aria-label="发布"
    >
      <span className="block w-[44px] h-[30px] border-[2.5px] border-white rounded-[8px] flex items-center justify-center text-white text-[20px] font-light leading-none pb-0.5">
        +
      </span>
    </button>
  )
}
