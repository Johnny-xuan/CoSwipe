/**
 * 拼接 public 目录资源的 URL，自动带上 Vite base path。
 *
 * 部署到 GitHub Pages 子路径（/CoSwipe/）时，硬编码的 `/foo.png` 不会自动
 * 加 base 前缀、会 404。统一用 asset('/foo.png') 拼接即可正确解析。
 */
export const asset = (p: string): string =>
  `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`
