# CoSwipe

[![Live Demo](https://img.shields.io/badge/Live%20Demo-johnny--xuan.github.io%2FCoSwipe-22c55e?style=for-the-badge&logo=githubpages&logoColor=white)](https://johnny-xuan.github.io/CoSwipe/)
[![Deploy](https://img.shields.io/github/actions/workflow/status/Johnny-xuan/CoSwipe/deploy.yml?branch=main&style=for-the-badge&label=Deploy&logo=github)](https://github.com/Johnny-xuan/CoSwipe/actions)
[![Stack](https://img.shields.io/badge/Vite%208-React%2019-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)

> Submitted to **Douyin AI Creator Plan 2026 · Hackathon @ University of Science and Technology of China · Track 1**.

**An AI co-scrolling friend embedded in your short-video feed.**

CoSwipe doesn't scroll *for* you — it scrolls *with* you. It reads your pauses, saves, searches, and swipes; and at the right moment, like a friend would, it speaks up and meets you where you are.

---

## 🌐 Live Demo

**👉 [https://johnny-xuan.github.io/CoSwipe/](https://johnny-xuan.github.io/CoSwipe/)**

> Best viewed on desktop. Each push to `main` auto-redeploys in ~1-2 minutes.

---

## 📊 Today's Recommender vs CoSwipe

![Traditional recommendation versus CoSwipe — on the left, a passive feed where the system silently infers and keeps pushing the next video; on the right, an AI companion card appears in the same feed slot, with three response modes (Mirror / Direct / Challenge), and the user's responses continuously update the underlying profile.](public/compare.png)

- **Left — today's recommender**: a passive feed. Your only channels back to the system are *like / save / comment / swipe*. The system silently infers a profile, and keeps pushing the next video.
- **Right — CoSwipe**: an *AI co-scrolling friend* appears as a card sitting on the same level as videos. Three modes — **Mirror / Direct / Challenge** — let it speak up at the right moment. Your responses — *accept, push back, express, skip* — flow back into the profile in real time.

> Same recommendation pipeline. We add a **foreground interaction layer**.

| Today's recommender asks | CoSwipe asks |
| --- | --- |
| *What should we recommend next?* | *In this moment, what should the AI say to you?* |

---

## 🧭 What This Project Actually Is

Recommendation systems are quietly shifting from **silent one-way push** toward **agentic recommendation** — letting an AI speak up inside the feed, read the user's current state, and be responded to. Signals of *stay / save / push back / swipe away* stop being offline log entries and become **real-time, semantically interpretable feedback** the system can act on.

CoSwipe places this direction into a concrete short-video form: **a card that sits at the same level as the videos themselves** — one that sees you, catches your reaction, and lets your response actually shape the next stretch of feed.

We offer this product-grade prototype as **one viable application path for agentic recommendation on short-video platforms**.

### 📌 An Honest Statement

**This is not a fully interactive, end-to-end runnable product.** It is a *pitch-website prototype* that, at most, delivers:

- **Three co-scrolling modes** — product-level design (Mirror / Direct / Challenge)
- **Agent workflow framework** — system-level sketch (Router → Connection → CardSpec → 4-channel Downstream → weak-signal profile loop)

Both stop at the **design / prototype layer**. CoSwipe is not wired to a real recommendation engine, and the end-to-end online decision loop has not been validated against production traffic.

### 🌱 The Direction We're Betting On

Not the generic framing of *"let AI make decisions inside recommendation."* Something more specific:

> **Train an AI as a character with personality — a *companion*, a network persona — and let it become the foreground interface of the recommendation system.**

We believe the next curve for short-video platforms is not "make the algorithm smarter," but **replace the cold next-video with a character that has personality, can talk, and can be talked back to.** CoSwipe's *co-scrolling friend* is one small attempt in that direction.

---

## Three Co-scrolling Modes

| Mode | What it does | What it sees |
| --- | --- | --- |
| **Mirror** (吐槽) | Calls out the contrast | Behavioral contradictions — what you say vs. what you actually do |
| **Direct** (直击) | Translates the real need | The actual need behind your surface interest |
| **Challenge** (挑战) | Invites light participation | A moment ripe for a 3-second interaction |

---

## Site Structure

- **Prologue** — The silent feed: the loneliness of scrolling alone
- **01 What It Is** — AI breaks the silence; product positioning
- **02 How Li Ran Gets Read** — A real user's three-act co-scrolling story (left: video signals / middle: AI inner monologue / right: AI card)
- **03 More Moments** — Three modes × three real scenarios each, in a thumbnail gallery
- **04 How It Works** — System architecture

---

## Tech Stack

- Vite 8 · React 19 · TypeScript 6
- Tailwind CSS 4
- Framer Motion (animations)
- Lucide (icons)

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # output → dist/
npm run preview    # preview built artifacts locally
```

## Deployment

Pushing to `main` triggers GitHub Actions to build and deploy to GitHub Pages (see `.github/workflows/deploy.yml`).

> Vite `base` is set to `/CoSwipe/` to match the GitHub Pages project path. All `public/` assets are resolved through the `asset()` helper in `src/lib/asset.ts`, which prepends the base prefix at runtime.
