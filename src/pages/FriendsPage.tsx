// 朋友页：朋友发的视频
// 顶部头像 + 限时日常 + 人数；视频非全屏（上下黑边）；右侧互动栏

export function FriendsPage() {
  return (
    <div className="absolute inset-0 bg-black flex flex-col">
      <div className="absolute top-11 left-0 right-0 z-20 px-4 py-3 flex items-center text-white/90">
        <span className="w-7 h-7 rounded-full bg-white/20" />
        <div className="mx-auto px-3 py-1 rounded-full bg-white/10 text-sm">
          限时日常 ▾
        </div>
        <span className="text-sm">👥 1</span>
      </div>
      <div className="flex-1 flex items-center justify-center text-white/40 text-sm">
        朋友视频区（待填充）
      </div>
    </div>
  )
}
