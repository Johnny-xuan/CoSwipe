import { useDemo } from '@/lib/demoContext'
import { useState, useEffect } from 'react'
import { Heart, MessageCircle, Star, Share2 } from 'lucide-react'

export function FeedContainer() {
  const { currentStep, currentStepIndex, setStep, steps } = useDemo()
  const [showChallengeFeedback, setShowChallengeFeedback] = useState<string | null>(null)

  // 每次步骤变化时重置挑战卡答题反馈状态
  useEffect(() => {
    setShowChallengeFeedback(null)
  } , [currentStepIndex])

  // 手机端的手动上下滑（模拟）
  const handleScrollUp = () => {
    if (currentStepIndex < steps.length - 1) {
      setStep(currentStepIndex + 1)
    }
  }

  const handleScrollDown = () => {
    if (currentStepIndex > 0) {
      setStep(currentStepIndex - 1)
    }
  }

  return (
    <div className="absolute inset-0 bg-neutral-950 flex flex-col select-none">
      {/* 隐蔽的上下滑测试手势热区 (顶部和底部透明长条) */}
      <div 
        onClick={handleScrollDown}
        className="absolute top-[80px] left-0 right-0 h-10 bg-transparent hover:bg-white/5 active:bg-white/10 z-30 flex items-center justify-center text-[10px] text-white/10 cursor-ns-resize transition-all"
      >
        ▲ 点击向下滑动 (上一个视频)
      </div>

      <div className="flex-1 w-full relative overflow-hidden flex items-center justify-center">
        {currentStep.feedType === 'video' && currentStep.videoData ? (
          <VideoPlayerView 
            video={currentStep.videoData} 
            downstreamExecuted={currentStep.downstreamExecuted} 
          />
        ) : currentStep.feedType === 'ai_card' && currentStep.aiCardData ? (
          <AICardView 
            event={currentStep.aiCardData}
            feedback={showChallengeFeedback}
            onSelectOption={(opt) => {
              if (currentStep.aiCardData?.texture === 'challenge') {
                setShowChallengeFeedback(opt)
              }
            }}
          />
        ) : (
          <div className="text-white/30 text-xs">无内容</div>
        )}
      </div>

      <div 
        onClick={handleScrollUp}
        className="absolute bottom-[80px] left-0 right-0 h-10 bg-transparent hover:bg-white/5 active:bg-white/10 z-30 flex items-center justify-center text-[10px] text-white/10 cursor-ns-resize transition-all"
      >
        ▼ 点击向上滑动 (下一个视频)
      </div>
    </div>
  )
}

function VideoPlayerView({ video, downstreamExecuted }: { video: any; downstreamExecuted?: string }) {
  return (
    <div className="absolute inset-0 flex flex-col justify-end p-4 pb-24 relative overflow-hidden bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950">
      {/* 极简动态高保真视频骨架 Placeholder */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white/5 bg-neutral-900/50">
        <div className="w-16 h-16 rounded-full border-[3px] border-dashed border-white/10 animate-spin flex items-center justify-center">
          <div className="w-10 h-10 rounded-full border-[2px] border-white/5" />
        </div>
        <span className="text-[11px] mt-4 font-bold tracking-widest uppercase text-white/20 select-none">
          {video.topic?.[0] || '推荐视频'}
        </span>
      </div>

      {/* Downstream 复活注入标识水印 */}
      {downstreamExecuted && (
        <div className="absolute top-[96px] left-4 right-4 z-20 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md flex items-center gap-2 text-emerald-400 text-[11px] font-bold shadow-md select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>{downstreamExecuted}</span>
        </div>
      )}

      {/* 右侧互动按钮组 (点赞、收藏、转发) */}
      <div className="absolute right-3 bottom-24 flex flex-col items-center gap-4.5 z-20 text-white">
        {/* 作者头像 */}
        <div className="relative mb-2 select-none">
          <div className="w-11 h-11 rounded-full bg-[#eee] border-2 border-white flex items-center justify-center overflow-hidden shadow-md">
            <span className="text-xl">👤</span>
          </div>
          <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-[18px] h-[18px] bg-[#fe2c55] rounded-full flex items-center justify-center text-[11px] font-extrabold shadow-sm">
            +
          </div>
        </div>

        {/* 爱心点赞 */}
        <div className="flex flex-col items-center cursor-pointer group active:scale-90 transition-transform">
          <div className={`w-10 h-10 rounded-full bg-black/35 backdrop-blur flex items-center justify-center shadow-sm ${video.liked ? 'text-[#fe2c55]' : 'text-white/90'}`}>
            <Heart className="w-[23px] h-[23px] fill-current stroke-[2.2]" />
          </div>
          <span className="text-[11px] font-bold mt-1 text-white/80 select-none">{video.stats?.likes || 0}</span>
        </div>

        {/* 评论 */}
        <div className="flex flex-col items-center cursor-pointer active:scale-90 transition-transform">
          <div className="w-10 h-10 rounded-full bg-black/35 backdrop-blur flex items-center justify-center text-white/90 shadow-sm">
            <MessageCircle className="w-[23px] h-[23px] fill-current stroke-[2.2]" />
          </div>
          <span className="text-[11px] font-bold mt-1 text-white/80 select-none">{video.stats?.comments || 0}</span>
        </div>

        {/* 星星收藏 */}
        <div className="flex flex-col items-center cursor-pointer group active:scale-90 transition-transform">
          <div className={`w-10 h-10 rounded-full bg-black/35 backdrop-blur flex items-center justify-center shadow-sm ${video.favorited ? 'text-[#fac33f]' : 'text-white/90'}`}>
            <Star className="w-[23px] h-[23px] fill-current stroke-[2.2]" />
          </div>
          <span className="text-[11px] font-bold mt-1 text-white/80 select-none">{video.stats?.favorites || 0}</span>
        </div>

        {/* 分享 */}
        <div className="flex flex-col items-center cursor-pointer active:scale-90 transition-transform">
          <div className="w-10 h-10 rounded-full bg-black/35 backdrop-blur flex items-center justify-center text-white/90 shadow-sm">
            <Share2 className="w-[21px] h-[21px] fill-current stroke-[2.2]" />
          </div>
          <span className="text-[11px] font-bold mt-1 text-white/80 select-none">{video.stats?.shares || 0}</span>
        </div>
      </div>

      {/* 底部信息层 (作者名字、描述、话题、唱片) */}
      <div className="z-10 text-white select-none pr-16">
        <h2 className="text-[15px] font-extrabold tracking-wide mb-1">@{video.title ? '模板创作者' : '创作者'}</h2>
        <p className="text-[12.5px] font-medium leading-relaxed text-white/90 tracking-wide mb-2 line-clamp-2">
          {video.summary}
        </p>
        
        {/* 标签栏 */}
        <div className="flex flex-wrap items-center gap-1.5 mb-3.5">
          {video.tags?.map((tag: string) => (
            <span key={tag} className="px-2 py-0.5 bg-white/10 backdrop-blur rounded-[4px] text-[10px] font-bold text-white/80">
              #{tag}
            </span>
          ))}
        </div>

        {/* 唱片机音轨旋转 */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold text-white/60">🎵</span>
          <div className="text-[11px] font-bold text-white/70 overflow-hidden relative w-[130px] h-4">
            <div className="absolute whitespace-nowrap animate-marquee">
              {video.music || '原声 - @模板创作者'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AICardView({ event, feedback, onSelectOption }: { event: any; feedback: string | null; onSelectOption: (opt: string) => void }) {
  const spec = event.card_spec

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 bg-neutral-950 relative overflow-hidden select-none">
      {/* 动态微背景网格氛围 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950 opacity-90" />

      {/* 氛围彩色发光雾 */}
      <div className={`absolute top-1/4 w-[160px] h-[160px] rounded-full blur-[64px] opacity-25 transition-all duration-700 ${
        event.texture === 'mirror' ? 'bg-[#ef4444]' :
        event.texture === 'challenge' ? 'bg-[#3b82f6]' : 'bg-[#eab308]'
      }`} />

      {/* 浮动卡片主容器 */}
      <div className="w-full max-w-[318px] bg-white rounded-[24px] border border-neutral-100 shadow-[0_15px_45px_rgba(0,0,0,0.35)] overflow-hidden z-10 flex flex-col relative select-none animate-scaleUp">
        {/* 卡片头部标识 */}
        <div className="px-4.5 pt-4.5 pb-2.5 border-b border-neutral-50 flex items-center justify-between">
          <span className="text-[11px] font-black uppercase tracking-wider text-neutral-400">
            {event.texture === 'mirror' ? '🔍 镜像透视' :
             event.texture === 'challenge' ? '⚡️ 深夜快答' : '🕰️ 时空重逢'}
          </span>
          <span className="text-[10px] font-extrabold text-neutral-300">
            {spec.title || 'AI微事件'}
          </span>
        </div>

        {/* 卡片内容主体 */}
        <div className="p-4.5 flex-1 flex flex-col">
          {/* 正文 */}
          <div className="text-[12.5px] font-bold text-neutral-700 leading-relaxed tracking-wide whitespace-pre-line mb-5">
            {spec.body}
          </div>

          {/* CTA 交互部分 */}
          <div className="flex flex-col gap-2 mt-auto">
            {event.texture === 'challenge' ? (
              // 挑战单选题支
              <div className="flex flex-col gap-2">
                {spec.cta.map((btn: any) => {
                  const isSelected = feedback === btn.action
                  const isCorrect = btn.action === 'ans_correct'
                  return (
                    <button
                      key={btn.label}
                      onClick={() => onSelectOption(btn.action)}
                      className={`w-full py-2.5 px-3 rounded-[10px] border text-left text-[11.5px] font-extrabold tracking-wide transition-all active:scale-[0.98] cursor-pointer ${
                        isSelected 
                          ? isCorrect 
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-600 shadow-sm' 
                            : 'bg-rose-50 border-rose-300 text-rose-600 shadow-sm'
                          : 'bg-neutral-50 hover:bg-neutral-100/80 border-neutral-100 text-neutral-600'
                      }`}
                    >
                      {btn.label}
                    </button>
                  )
                })}

                {/* 挑战卡答题后的 Downstream 解释反馈 */}
                {feedback && (
                  <div className={`mt-3 p-3 rounded-[10px] border text-[11px] font-bold leading-relaxed animate-fadeIn ${
                    feedback === 'ans_correct'
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600'
                      : 'bg-rose-500/10 border-rose-500/20 text-rose-600'
                  }`}>
                    {feedback === 'ans_correct' 
                      ? '🎉 回答正确！今晚不是逞强跟自律拼命的时候，无痛健康餐才是最不易崩溃放弃的安全牌。'
                      : '❌ 回答错误。这个点如果逼自己水煮菜或不吃，很容易诱发报复性宵夜。最无痛的自律才是长久之道。'}
                  </div>
                )}
              </div>
            ) : (
              // 镜像卡/重逢卡标准 CTA 按钮
              spec.cta.map((btn: any) => (
                <button
                  key={btn.label}
                  className="w-full py-3 bg-[#fe2c55] hover:bg-[#ea2047] active:scale-[0.97] transition-all text-white font-black text-xs tracking-wider rounded-xl shadow-[0_4px_12px_rgba(254,44,85,0.25)] flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {event.texture === 'reunion' ? '📂' : 'Resurrect'} {btn.label}
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
