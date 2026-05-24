// 仿抖音手机顶部状态栏
// 左：时间
// 右：NFC、蓝牙、静音、信号、电量（含闪电充电）

interface Props {
  time?: string
  battery?: number
  charging?: boolean
}

export function StatusBar({
  time = '11:20',
  battery = 84,
  charging = true,
}: Props) {
  return (
    <div className="h-11 px-6 flex items-center justify-between text-[14px] font-semibold text-white shrink-0 relative z-30">
      <span className="flex items-center gap-1.5 tabular-nums">
        <span>{time}</span>
        <svg className="w-3.5 h-3.5 fill-current rotate-45 -mt-0.5" viewBox="0 0 24 24">
          <path d="M12 2L2 22l10-6 10 6L12 2z" />
        </svg>
      </span>
      <div className="flex items-center gap-1.5">
        <NfcIcon />
        <BluetoothIcon />
        <MuteIcon />
        <SignalBars />
        <BatteryIndicator level={battery} charging={charging} />
      </div>
    </div>
  )
}

function NfcIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 5h14v14H5z M9 9c0-1 1-2 3-2s3 1 3 2v6c0 1-1 2-3 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BluetoothIcon() {
  return (
    <svg width="11" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 7l10 10-5 5V2l5 5L7 17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MuteIcon() {
  // 铃铛 + 斜线
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 8a6 6 0 0112 0c0 6 3 6 3 8H3c0-2 3-2 3-8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 22a2 2 0 004 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function SignalBars() {
  return (
    <div className="flex items-end gap-[1px] h-3 ml-0.5">
      <span className="w-[2px] h-[3px] bg-white rounded-[0.5px]" />
      <span className="w-[2px] h-[5px] bg-white rounded-[0.5px]" />
      <span className="w-[2px] h-[7px] bg-white rounded-[0.5px]" />
      <span className="w-[2px] h-[10px] bg-white rounded-[0.5px]" />
      <span className="ml-1 text-[10px] leading-none">.ull</span>
    </div>
  )
}

function BatteryIndicator({ level, charging }: { level: number; charging: boolean }) {
  return (
    <div className="flex items-center gap-0.5 ml-1">
      <span className="text-[11px] tabular-nums">{level}</span>
      <div className="relative">
        <div className="w-6 h-3 border border-white rounded-[3px] p-[1.5px]">
          <div
            className="h-full bg-white rounded-[1px]"
            style={{ width: `${level}%` }}
          />
        </div>
        <div className="absolute top-1/2 -right-[3px] -translate-y-1/2 w-[2px] h-1.5 bg-white rounded-r-[1px]" />
      </div>
      {charging && (
        <svg width="10" height="14" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
          <path d="M13 2L4 14h7l-2 8 9-12h-7l2-8z" />
        </svg>
      )}
    </div>
  )
}
