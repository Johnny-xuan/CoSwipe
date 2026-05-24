// ============================================================
// Texture-guided Connection Discovery — TypeScript schemas
// Source: design.md (v0 报告) + demo_sample.md (周然 样本)
// ============================================================

// ─── Texture ────────────────────────────────────────────────
export type Texture = 'mirror' | 'suspense' | 'challenge' | 'reunion'

// ─── Hook 类型（design.md §3）────────────────────────────────
export type HookType =
  | 'behavior_contrast'      // 反差
  | 'unfinished_intent'      // 未完成
  | 'curiosity_gap'          // 信息缺口
  | 'hidden_commonality'     // 隐藏共同点
  | 'testability'            // 可测试性
  | 'time_echo'              // 时间回响
  | 'memory_echo'            // 重逢感
  | 'coincidence'            // 巧合感
  | 'absurdity'              // 荒诞感
  | 'recognition'            // “它怎么知道我”

export interface Hook {
  type: HookType
  description: string
}

// ─── Connection（design.md §3 / §9）─────────────────────────
export interface Connection {
  id: string
  source_texture: Texture
  observation: string
  relation: string
  hook: Hook
  evidence: Record<string, unknown>
  scores?: {
    hook_strength: number
    evidence_strength: number
    freshness: number
    playability: number
    repetition_risk?: number
  }
  /** Extractor 内部参考句，最终展示文案由 Renderer 重写 */
  candidate_sentence?: string
}

// ─── Card Spec（design.md §19）──────────────────────────────
export type CardVisual =
  | 'autopsy_report'    // 法医尸检
  | 'chat_bubble'       // 聊天气泡
  | 'quiz_card'         // 答题卡
  | 'sticky_note'       // 便利贴
export type CardVoice =
  | 'cold_forensic'     // 冷峻法医
  | 'chat_friend'       // 聊天损友
  | 'host'              // 轻松主持人
  | 'past_self'         // 过去的自己

export interface CardCTA {
  label: string
  action: string
}
export interface CardSpec {
  visual: CardVisual
  voice: CardVoice
  title?: string
  body: string
  cta: CardCTA[]
}

// ─── Downstream Plan（design.md §19 / §16）──────────────────
export type DownstreamType =
  | 'inject_video'             // Mirror / Reunion 注入已知视频
  | 'show_explanation_card'    // Challenge 答完后解释卡
  | 'delayed_payoff'           // Suspense 延后兑现
  | 'fulfill_previous_promise' // Reunion 兑现旧 promise
  | 'resume_thread'            // Reunion 接回旧线程

export interface DownstreamPlan {
  type: DownstreamType
  target_video_id?: string
  target_cluster?: string
  position?: 'next_1' | 'next_2' | 'next_3'
  promise_id?: string
}

// ─── MicroEvent（design.md §19）─────────────────────────────
export interface MicroEvent {
  event_id: string
  texture: Texture
  connection: Connection
  card_spec: CardSpec
  downstream_plan: DownstreamPlan
  state_update: {
    write_to_history: boolean
    [key: string]: unknown
  }
}

// ─── Workflow Candidate / 输出────────────────────────────────
export interface ValidCandidate {
  status: 'valid'
  source_texture: Texture
  connection_id: string
  hook_strength: number
  novelty: number
  downstream_ready: boolean
  /** 完整 connection 引用 */
  connection: Connection
  /** 渲染建议 */
  suggested_render?: {
    voice: string
    visual: string
    cta: string
    downstream: string
  }
}

export interface NoCandidate {
  status: 'no_candidate'
  source_texture: Texture
  reason: string
  related_previous_event?: string
  note_for_reunion?: string
}

export type WorkflowCandidate = ValidCandidate | NoCandidate

// ─── MicroEvent History（design.md §14）─────────────────────
export interface MicroEventHistoryEntry {
  event_id: string
  texture: Texture
  topic: string
  connection_summary?: string
  card_text?: string
  question?: string
  options?: string[]
  user_action?:
    | 'clicked_primary'
    | 'dismissed'
    | 'ignored'
    | 'answered'
    | 'continued_scrolling'
  primary_action?: string
  user_answer?: string
  explanation_watched?: boolean
  downstream_executed?: boolean
  promise?: string
  fulfilled?: boolean
  answer?: string
  timestamp: string
  state_note?: string
}

// ─── 用户画像（demo_sample.md §1）───────────────────────────
export interface UserProfile {
  user_id: string
  name: string
  gender: 'female' | 'male' | 'other'
  age: number
  city: string
  occupation: string
  living_status: string
  pet?: string
  daily_rhythm: string
  main_douyin_scenes: string[]
  personality_tags: string[]
  avatar_url?: string
  intro?: string
  douyin_id?: string
  stats?: {
    likes: number
    mutual_follows: number
    following: number
    followers: number
  }
}

// ─── 长期兴趣（demo_sample.md §3）───────────────────────────
export interface LongTermInterest {
  topic: string
  strength: number
  description: string
  behavior_pattern: string
}

// ─── 收藏簇（demo_sample.md §4）─────────────────────────────
export interface FavoriteCluster {
  cluster_id: string
  topic: string
  saved_count: number
  rewatch_count: number
  shared_theme: string
  behavior_pattern: string
  last_14_days_new_saves?: number
  last_30_days_new_saves?: number
  last_7_days_new_saves?: number
  emotional_meaning?: string
  pattern?: string
  constraints?: Record<string, unknown>
  pet_name?: string
  video_ids: string[]
}

// ─── 视频对象 ─────────────────────────────────────────────────
export interface Video {
  video_id: string
  title: string
  summary: string
  tags: string[]
  saved_at?: string
  rewatch_count?: number
  /** 视频文件路径（占位 / 真实路径都可）*/
  src?: string
  /** 视频缩略图 */
  thumbnail?: string
  /** 作者 */
  author?: {
    name: string
    avatar?: string
  }
  /** 互动统计 */
  stats?: {
    likes: number
    comments: number
    favorites: number
    shares: number
  }
  /** 配乐 */
  music?: string
  duration?: number
}

// ─── Feed 里的视频条目（含本次会话行为）────────────────────
export interface FeedVideoEntry extends Video {
  index: number
  topic: string[]
  watch_ratio: number
  favorited: boolean
  liked: boolean
  shared: boolean
  commented: boolean
  behavior_note?: string
}

// ─── Session 状态（demo_sample.md §5）───────────────────────
export interface SessionState {
  session_id: string
  date: string
  weekday: string
  time: string
  scene: string
  device: string
  network: string
  recent_k: number
  session_pattern: string
  dominant_topics: string[]
  favorite_count_in_session: number
  high_watch_count: number
  skip_count: number
  fatigue_score: number
  emotional_state_inferred: string
}

// ─── 完整的用户数据包 ────────────────────────────────────────
export interface UserSample {
  profile: UserProfile
  long_term_interests: LongTermInterest[]
  favorite_clusters: FavoriteCluster[]
  videos: Record<string, Video>  // video_id -> Video
  session: SessionState
  feed_sequence: FeedVideoEntry[]
  micro_event_history: MicroEventHistoryEntry[]
}

// ─── UI 状态：导航 Tab ──────────────────────────────────────
export type TabKey = 'home' | 'friends' | 'messages' | 'profile'

// ─── UI 状态：Workflow 运行态 ──────────────────────────────
export type WorkflowRunState =
  | { state: 'idle' }
  | { state: 'running' }
  | { state: 'candidate'; candidate: ValidCandidate }
  | { state: 'no_candidate'; reason: string }
