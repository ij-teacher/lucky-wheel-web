import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "幸運轉盤｜隨機抽選工具",
  description: "免費、好用的幸運轉盤，支援文字名單、數字範圍、抽後移除與跨裝置分享。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
