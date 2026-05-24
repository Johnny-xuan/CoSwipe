import { useState } from 'react'
import {
  Plus,
  Search,
  Menu,
  ShoppingCart,
  Bell,
  History,
  Lightbulb,
  Grid,
  Lock,
} from 'lucide-react'

export function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'work' | 'daily' | 'recommend' | 'favorites' | 'likes'>('work')

  const tabs = [
    { key: 'work', label: '作品' },
    { key: 'daily', label: '日常' },
    { key: 'recommend', label: '推荐' },
    { key: 'favorites', label: '收藏' },
    { key: 'likes', label: '喜欢' },
  ]

  return (
    <div className="absolute inset-0 bg-white text-neutral-900 flex flex-col overflow-y-auto no-scrollbar">
      {/* 顶部沙漠夕阳金沙渐变背景头部 */}
      <div 
        className="pt-11 pb-6 px-4 text-white shrink-0 relative bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(to bottom, #d2904c, #8a4e25, #4f2a11)' 
        }}
      >
        {/* 顶部按钮栏 */}
        <div className="flex items-center justify-between text-white text-[13px] font-medium mb-5">
          <button className="bg-white/20 hover:bg-white/30 active:scale-95 transition-all backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1 cursor-pointer">
            <span className="text-sm">👤⁺</span>
            <span>添加朋友</span>
          </button>
          <div className="flex items-center gap-2">
            <button className="bg-white/20 hover:bg-white/30 active:scale-95 transition-all backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1 cursor-pointer">
              <span className="text-sm">👥</span>
              <span>新访客 2</span>
            </button>
            <button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 active:scale-95 transition-all backdrop-blur flex items-center justify-center cursor-pointer">
              <Search className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 active:scale-95 transition-all backdrop-blur flex items-center justify-center cursor-pointer">
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 头像与基本资料区域 */}
        <div className="flex items-center gap-4">
          {/* 头像容器 - 白底加黑色经典图标 */}
          <div className="relative">
            <div className="w-[84px] h-[84px] rounded-full bg-[#f6f6f6] border-[3.5px] border-white/10 flex flex-col items-center justify-center overflow-hidden shadow-md cursor-pointer transition-transform active:scale-95">
              {/* 高保真抖音默认经典人形轮廓 */}
              <div className="w-[30px] h-[30px] border-[2.8px] border-neutral-700 rounded-lg flex items-center justify-center relative mt-1 bg-white">
                <div className="w-[8px] h-[8px] bg-neutral-700 rounded-full absolute top-[5px]" />
                <div className="w-[18px] h-[8px] border-[2.8px] border-neutral-700 border-b-0 rounded-t-full absolute bottom-[-1px]" />
              </div>
            </div>
            {/* 右下角绿色加号徽章 */}
            <div className="absolute bottom-0 right-0 w-[24px] h-[24px] bg-[#22c55e] border-[2.5px] border-white rounded-full flex items-center justify-center text-white shadow-sm cursor-pointer hover:bg-green-600 transition-colors">
              <Plus className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </div>

          {/* 用户姓名与ID */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <h1 className="text-[20px] font-bold tracking-wide truncate">模板用户</h1>
              <span className="text-white/60 text-xs mt-1">▾</span>
            </div>
            <div className="text-[11px] text-white/70 mt-1 flex items-center gap-1">
              <span>抖音号: 100000000</span>
              {/* 二维码微缩图标 */}
              <svg className="w-3.5 h-3.5 text-white/55 hover:text-white/80 cursor-pointer transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 3h6v6H3zm2 2v2h2V5zm8-2h6v6h-6zm2 2v2h2V5zM3 13h6v6H3zm2 2v2h2v-2zm10 0h2v2h-2zm2-2h2v2h-2zm-2 4h2v2h-2zm2 2h2v-2h-2zm0-4h2v-2h-2zm-4-2h2v2h-2zm0 4h2v2h-2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 底部白底面板内容区 */}
      <div className="rounded-t-[18px] bg-white -mt-3.5 relative z-10 flex-1 px-4 pt-5 pb-20 flex flex-col">
        {/* 数据统计与编辑主页 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="flex flex-col items-center">
              <span className="text-[17px] font-bold text-neutral-900 leading-none">999</span>
              <span className="text-[11px] text-neutral-400 mt-1.5 font-medium">获赞</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[17px] font-bold text-neutral-900 leading-none">88</span>
              <span className="text-[11px] text-neutral-400 mt-1.5 font-medium">互关</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[17px] font-bold text-neutral-900 leading-none">100</span>
              <span className="text-[11px] text-neutral-400 mt-1.5 font-medium">关注</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[17px] font-bold text-neutral-900 leading-none">200</span>
              <span className="text-[11px] text-neutral-400 mt-1.5 font-medium">粉丝</span>
            </div>
          </div>

          <button className="px-5 py-2 bg-neutral-100 hover:bg-neutral-200 active:scale-95 transition-all text-neutral-800 text-[12px] font-bold rounded-[6px] cursor-pointer">
            编辑主页
          </button>
        </div>

        {/* 个人介绍 / 标签 */}
        <div className="mt-4 flex flex-col items-start select-none">
          <div className="text-[12px] text-neutral-800 font-medium py-1">
            探索 AI 与短视频信息流的无限交互可能。
          </div>
          <div className="flex items-center gap-1.5 mt-2">
            <span className="px-2.5 py-0.5 bg-neutral-100 text-[11px] font-bold text-neutral-500 rounded-[4px]">
              中国·地区
            </span>
            <span className="px-2.5 py-0.5 bg-neutral-100 text-[11px] font-bold text-neutral-500 rounded-[4px]">
              青年·极客
            </span>
          </div>
        </div>

        {/* 常用功能区 (5 个图标 - 按截图打磨) */}
        <div className="flex justify-between items-center mt-6 pt-2 pb-1 border-t border-neutral-50">
          <div className="flex flex-col items-center justify-center flex-1 cursor-pointer hover:opacity-85 active:scale-95 transition-all">
            <div className="w-10 h-10 flex items-center justify-center text-neutral-700">
              <ShoppingCart className="w-5 h-5 stroke-[1.8]" />
            </div>
            <span className="text-[11px] text-neutral-600 mt-0.5 font-semibold">我的订单</span>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 cursor-pointer hover:opacity-85 active:scale-95 transition-all">
            <div className="w-10 h-10 flex items-center justify-center text-neutral-700">
              <Bell className="w-5 h-5 stroke-[1.8]" />
            </div>
            <span className="text-[11px] text-neutral-600 mt-0.5 font-semibold">我的预约</span>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 cursor-pointer hover:opacity-85 active:scale-95 transition-all">
            <div className="w-10 h-10 flex items-center justify-center text-neutral-700">
              <History className="w-5 h-5 stroke-[1.8]" />
            </div>
            <span className="text-[11px] text-neutral-600 mt-0.5 font-semibold">观看历史</span>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 cursor-pointer hover:opacity-85 active:scale-95 transition-all">
            <div className="w-10 h-10 flex items-center justify-center text-neutral-700">
              <Lightbulb className="w-5 h-5 stroke-[1.8]" />
            </div>
            <span className="text-[11px] text-neutral-600 mt-0.5 font-semibold">创作者中心</span>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 cursor-pointer hover:opacity-85 active:scale-95 transition-all">
            <div className="w-10 h-10 flex items-center justify-center text-neutral-700">
              <Grid className="w-5 h-5 stroke-[1.8]" />
            </div>
            <span className="text-[11px] text-neutral-600 mt-0.5 font-semibold">全部功能</span>
          </div>
        </div>

        {/* Tab 导航 (5 个 Tab) */}
        <div className="mt-4 border-t border-neutral-100 relative">
          <div className="flex items-center justify-around text-[14px] font-medium text-neutral-400 py-3 select-none">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`pb-1 cursor-pointer font-bold relative transition-colors ${
                    isActive ? 'text-neutral-900' : 'hover:text-neutral-600'
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <div className="absolute -bottom-[12.5px] left-1/2 -translate-x-1/2 w-8 h-[2.5px] bg-neutral-900 rounded-full" />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Divider 下划线 */}
        <div className="w-full h-[1px] bg-neutral-100"></div>

        {/* Tab 内容区 */}
        <div className="flex-1 flex flex-col mt-1">
          {activeTab === 'work' && (
            <div className="flex flex-col">
              {/* 私密作品行 */}
              <div className="mt-3 flex items-center justify-between px-3.5 py-2.5 bg-neutral-50 rounded-[8px] border border-neutral-100/50 cursor-pointer hover:bg-neutral-100 active:scale-[0.99] transition-all select-none">
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-neutral-500 stroke-[2.2]" />
                  <span className="text-[12px] font-extrabold text-neutral-800">私密作品</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-neutral-400 font-extrabold">
                  <span>6</span>
                  <span className="text-[8px] font-bold text-neutral-300">❯</span>
                </div>
              </div>

              {/* 美职篮全明星球员推荐快发 */}
              <div className="flex-1 flex flex-col items-center justify-center py-10 mt-2 text-center select-none">
                {/* 封面微缩组件 */}
                <div className="w-[68px] h-[68px] rounded-[10px] overflow-hidden border border-neutral-100 bg-neutral-100 flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.04)] relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                    <span className="text-[9px] font-extrabold text-neutral-600 bg-neutral-100/80 px-1 py-0.5 rounded shadow-sm border border-neutral-200 scale-90">
                      王朝
                    </span>
                  </div>
                </div>

                <h3 className="text-[14px] font-extrabold text-neutral-800 mt-4 tracking-wide">
                  美职篮全明星球员推荐
                </h3>
                <span className="text-[11px] text-neutral-400 mt-1 font-medium">
                  1086人参与
                </span>

                <button className="mt-5 px-6 py-2.5 bg-[#fe2c55] hover:bg-[#ea2047] active:scale-95 transition-all text-white rounded-full flex items-center justify-center gap-2 text-xs font-bold shadow-[0_4px_12px_rgba(254,44,85,0.2)] cursor-pointer">
                  {/* 快发相机图标 */}
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                  </svg>
                  <span>去发布</span>
                </button>
              </div>
            </div>
          )}

          {activeTab !== 'work' && (
            <div className="flex-1 flex items-center justify-center text-neutral-300 text-xs py-10">
              暂无内容
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

