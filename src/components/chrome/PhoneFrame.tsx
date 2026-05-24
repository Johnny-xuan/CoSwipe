// 仿最先进 iPhone 17 Pro Max 的极窄边框与高质感机身
// 具有超窄边框、灵动岛（Dynamic Island）、iOS 底部 Home 指示条及钛金属金属质感边缘

import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  /** 是否显示灵动岛（默认显示）*/
  notch?: boolean
}

export function PhoneFrame({ children, notch = true }: Props) {
  return (
    <div className="w-[390px] h-[844px] bg-black rounded-[52px] border-[4px] border-neutral-900 ring-[2.5px] ring-neutral-700/80 ring-offset-[0.5px] ring-offset-neutral-950 overflow-hidden relative shadow-[0_25px_65px_rgba(0,0,0,0.65)] select-none">
      {/* 极细微高光钛金属边缘质感 */}
      <div className="absolute inset-0 border border-white/5 rounded-[48px] pointer-events-none z-50" />

      {/* 灵动岛 (Dynamic Island) - 浮动在状态栏中间偏上 */}
      {notch && (
        <div className="absolute top-[11px] left-1/2 -translate-x-1/2 w-[86px] h-[26px] bg-black rounded-full z-50 flex items-center justify-end px-2.5 shadow-[inset_0_0_4px_rgba(255,255,255,0.08)] pointer-events-auto hover:w-[130px] transition-all duration-300 group cursor-pointer">
          {/* 灵动岛内的极微相机/传感器光点 (绿色安全指示灯，平时隐藏，hover时微弱显现) */}
          <div className="w-1.5 h-1.5 rounded-full bg-[#34c759] opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
        </div>
      )}

      {/* 手机屏幕主视图 */}
      <div className="w-full h-full flex flex-col relative rounded-[48px] overflow-hidden bg-black">
        {children}
      </div>

      {/* iOS 底部 Home Indicator 指示条 (底端居中悬浮) */}
      <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-[124px] h-[4.5px] bg-white/35 rounded-full z-50 pointer-events-none shadow-[0_1px_2px_rgba(0,0,0,0.15)]" />
    </div>
  )
}

