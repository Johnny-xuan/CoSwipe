# CoSwipe · 信息流里的 AI 陪刷好友

> 抖音 AI 创变者计划 2026 · 黑客松联赛「中国科学技术大学站」· 赛道一参赛作品

CoSwipe 是一个嵌入短视频信息流的 **AI 陪刷决策系统**。它不是替你刷，而是陪你刷——读懂你刚刚的停留、收藏、搜索、划走，在被刷到的那一刻，像朋友一样接住你。

**在线预览**：https://johnny-xuan.github.io/CoSwipe/

## 三种陪刷模式

| 模式 | 系统动作 | 看见什么 |
|---|---|---|
| 吐槽 Mirror | 点破反差 | 你行为里的反差（说一套做一套）|
| 直击 Direct | 翻译真实需求 | 表层兴趣背后的真实需求 |
| 挑战 Challenge | 邀请轻参与 | 可参与的轻量瞬间 |

## 网页结构

- **序幕**：沉默的信息流 —— 一个人刷视频的孤独
- **01 是什么**：AI 破冰登场 + 产品理念
- **02 李然怎么被读懂**：一个真实用户的三幕陪刷故事（左视频信号 / 中 AI 内心独白 / 右 AI 卡片）
- **03 更多瞬间**：三种模式各三个真实场景的画廊
- **04 怎么运转**：系统架构

## 技术栈

- Vite 8 + React 19 + TypeScript 6
- Tailwind CSS 4
- Framer Motion（动效）
- Lucide（图标）

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build      # 产物在 dist/
npm run preview    # 本地预览构建产物
```

## 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages（见 `.github/workflows/deploy.yml`）。

> 注意：Vite `base` 配置为 `/CoSwipe/`，对应 GitHub Pages 项目站点路径。public 资源统一通过 `src/lib/asset.ts` 的 `asset()` 拼接 base 前缀。
