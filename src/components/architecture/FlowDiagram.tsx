import { motion } from 'framer-motion'

/**
 * CoSwipe 系统架构流程图。
 * SVG 1400x780 viewBox, responsive 缩放。
 *
 * 节点布局（横向主线 + 4 通道分支 + 闭环回流）：
 *
 *   [UserCtx]──▶[Router]──▶[Connection]──▶[CardSpec]──▶[AI Card]──▶[UserResp]
 *      ▲          ▲                                                     │
 *      │          │                                                     ▼
 *      │          │                                            ┌── Downstream ──┐
 *      │          │                                            │ content        │
 *      │          │                                            │ dialogue       │
 *      │          │                                            │ emotion        │
 *      │          │                                            │ profile        │
 *      │          │                                            └────────────────┘
 *      └─[ProfileWriteback]◀─────────────────────────────────────────┘
 */

interface NodeBoxProps {
  x: number
  y: number
  w: number
  h: number
  title: string
  subtitle?: string
  color: string
  glowColor: string
  delay: number
  big?: boolean
}

function NodeBox({ x, y, w, h, title, subtitle, color, glowColor, delay, big }: NodeBoxProps) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* 外发光 */}
      <rect
        x={x - 4}
        y={y - 4}
        width={w + 8}
        height={h + 8}
        rx={16}
        fill={glowColor}
        opacity={0.25}
        filter="blur(12px)"
      />
      {/* 主体 */}
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={14}
        fill="rgba(15, 8, 40, 0.85)"
        stroke={color}
        strokeWidth={big ? 2 : 1.5}
      />
      {/* 顶部 highlight 渐变线 */}
      <rect x={x} y={y} width={w} height={2} rx={1} fill={color} opacity={0.7} />
      {/* 文字 */}
      <text
        x={x + w / 2}
        y={subtitle ? y + h / 2 - 6 : y + h / 2 + 5}
        textAnchor="middle"
        fill="white"
        fontSize={big ? 18 : 15}
        fontWeight={600}
        style={{ fontFamily: 'var(--font-cn-display)' }}
      >
        {title}
      </text>
      {subtitle && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 14}
          textAnchor="middle"
          fill="rgba(255,255,255,0.55)"
          fontSize={11}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {subtitle}
        </text>
      )}
    </motion.g>
  )
}

interface FlowPathProps {
  d: string
  color: string
  delay: number
  dashFlow?: boolean
}

function FlowPath({ d, color, delay, dashFlow = true }: FlowPathProps) {
  return (
    <>
      {/* 主路径：先 draw-in，再持续 dash-flow */}
      <motion.path
        d={d}
        stroke={color}
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.8 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ delay, duration: 0.8, ease: 'easeInOut' }}
      />
      {/* 流动 dash 叠加 */}
      {dashFlow && (
        <motion.path
          d={d}
          stroke={color}
          strokeWidth={2.5}
          fill="none"
          strokeLinecap="round"
          strokeDasharray="6 12"
          className="flow-line"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.6, duration: 0.4 }}
        />
      )}
    </>
  )
}

export function FlowDiagram() {
  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 1400 820"
        className="w-full"
        style={{ maxHeight: '78vh' }}
      >
        <defs>
          <marker id="arrow-purple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M 0 0 L 9 3 L 0 6 z" fill="#a855f7" />
          </marker>
          <marker id="arrow-cyan" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M 0 0 L 9 3 L 0 6 z" fill="#4dd0e1" />
          </marker>
          <marker id="arrow-pink" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M 0 0 L 9 3 L 0 6 z" fill="#ec4899" />
          </marker>
          <marker id="arrow-orange" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M 0 0 L 9 3 L 0 6 z" fill="#fb923c" />
          </marker>
          <marker id="arrow-indigo" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <path d="M 0 0 L 9 3 L 0 6 z" fill="#6366f1" />
          </marker>
        </defs>

        {/* ===== 主链路节点 ===== */}
        {/* UserCtx (左侧入口) */}
        <NodeBox
          x={40} y={60} w={180} h={90}
          title="用户上下文"
          subtitle="long-term + short-term"
          color="#6366f1"
          glowColor="#6366f1"
          delay={0.05}
        />
        {/* Router (中枢, big) */}
        <NodeBox
          x={290} y={50} w={180} h={110}
          title="Agent Router"
          subtitle="should_fire? which mode?"
          color="#a855f7"
          glowColor="#a855f7"
          delay={0.2}
          big
        />
        {/* Connection */}
        <NodeBox
          x={540} y={60} w={170} h={90}
          title="Connection"
          subtitle="evidence-based"
          color="#a855f7"
          glowColor="#a855f7"
          delay={0.4}
        />
        {/* CardSpec */}
        <NodeBox
          x={780} y={60} w={170} h={90}
          title="CardSpec"
          subtitle="LLM 生成 JSON"
          color="#4dd0e1"
          glowColor="#4dd0e1"
          delay={0.55}
        />
        {/* AI Card */}
        <NodeBox
          x={1020} y={60} w={170} h={90}
          title="AI Feed Card"
          subtitle="前端组件渲染"
          color="#4dd0e1"
          glowColor="#4dd0e1"
          delay={0.7}
        />
        {/* User Response */}
        <NodeBox
          x={1210} y={210} w={160} h={90}
          title="用户回应"
          subtitle="click / pushback / dismiss"
          color="#ec4899"
          glowColor="#ec4899"
          delay={0.85}
        />

        {/* ===== 主链路连接 ===== */}
        <FlowPath d="M 220 105 L 285 105" color="#6366f1" delay={0.1} />
        <FlowPath d="M 470 105 L 540 105" color="#a855f7" delay={0.3} />
        <FlowPath d="M 710 105 L 780 105" color="#a855f7" delay={0.45} />
        <FlowPath d="M 950 105 L 1020 105" color="#4dd0e1" delay={0.6} />
        <FlowPath d="M 1190 105 Q 1290 105 1290 210" color="#4dd0e1" delay={0.75} />

        {/* ===== Downstream 4 通道分支 ===== */}
        <motion.text
          x={620} y={340}
          fill="rgba(255,255,255,0.45)"
          fontSize={13}
          fontWeight={500}
          letterSpacing={2}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          DOWNSTREAM · 4 CHANNELS
        </motion.text>

        {/* 4 通道盒子 */}
        <NodeBox x={420} y={380} w={150} h={75} title="内容" subtitle="content" color="#4dd0e1" glowColor="#4dd0e1" delay={1.3} />
        <NodeBox x={600} y={380} w={150} h={75} title="对话" subtitle="dialogue" color="#a855f7" glowColor="#a855f7" delay={1.4} />
        <NodeBox x={780} y={380} w={150} h={75} title="情绪" subtitle="emotion" color="#ec4899" glowColor="#ec4899" delay={1.5} />
        <NodeBox x={960} y={380} w={150} h={75} title="画像" subtitle="profile" color="#fb923c" glowColor="#fb923c" delay={1.6} />

        {/* User Response → 4 通道（汇聚线） */}
        <FlowPath d="M 1290 300 Q 1290 350 1110 380 Q 1100 385 1085 388" color="#fb923c" delay={1.0} />
        <FlowPath d="M 1290 300 Q 1290 350 950 380 Q 940 385 925 388" color="#ec4899" delay={1.05} />
        <FlowPath d="M 1290 300 Q 1290 350 750 380 Q 740 385 725 388" color="#a855f7" delay={1.1} />
        <FlowPath d="M 1290 300 Q 1290 350 575 380 Q 565 385 545 388" color="#4dd0e1" delay={1.15} />

        {/* ===== Profile Writeback 闭环 ===== */}
        <NodeBox
          x={420} y={580} w={250} h={100}
          title="Profile Writeback"
          subtitle="weak signals · confidence · ttl"
          color="#fb923c"
          glowColor="#fb923c"
          delay={1.8}
          big
        />

        {/* 4 通道 → Profile Writeback（汇聚到 profile 输出） */}
        <FlowPath d="M 1035 455 Q 1035 520 545 580" color="#fb923c" delay={1.7} />

        {/* Profile Writeback → UserCtx（大闭环回流） */}
        <motion.path
          d="M 420 630 Q 60 630 60 360 Q 60 200 130 150"
          stroke="#fb923c"
          strokeWidth={2.5}
          fill="none"
          strokeLinecap="round"
          strokeDasharray="6 12"
          markerEnd="url(#arrow-orange)"
          className="flow-line"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.85 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 2, duration: 1.4, ease: 'easeInOut' }}
        />

        {/* 闭环标注 */}
        <motion.text
          x={50}
          y={440}
          fill="#fb923c"
          fontSize={12}
          fontWeight={500}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.5, duration: 0.6 }}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          CLOSED LOOP
        </motion.text>
        <motion.text
          x={50}
          y={458}
          fill="rgba(255,255,255,0.5)"
          fontSize={12}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.6, duration: 0.6 }}
        >
          回应改变下一次决策
        </motion.text>

        {/* Router 沉默标注 */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <text x={380} y={210} fill="rgba(168,85,247,0.7)" fontSize={11} style={{ fontFamily: 'var(--font-display)' }}>
            SILENCE IS LEGITIMATE
          </text>
          <text x={380} y={228} fill="rgba(255,255,255,0.4)" fontSize={11}>
            沉默是合法决策
          </text>
        </motion.g>
      </svg>
    </div>
  )
}
