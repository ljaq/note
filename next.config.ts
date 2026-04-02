import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  /** 静态导出必须关闭默认图片优化，否则会 build 失败 */
  images: {
    unoptimized: true,
  },
  /**
   * 资源（/_next/static 等）改为相对路径，便于把 `out` 拷到任意目录、或用 file:// 打开。
   * 页面间链接仍为绝对路径 /xxx；若 file:// 下点击跳转异常，请用本地静态服务预览。
   */
  assetPrefix: "./",
  /** 生成 about/index.html 形式，利于部分静态托管 */
  trailingSlash: true,
};

export default nextConfig;
