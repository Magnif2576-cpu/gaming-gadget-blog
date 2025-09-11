// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Gaming Gadget Blog",
    template: "%s | Gaming Gadget Blog",
  },
  description: "ゲーミングデバイス＆便利ガジェットのレビュー・比較・おすすめ",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    siteName: "Gaming Gadget Blog",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-dvh bg-white text-black">
        {/* ここにグローバルナビ等を置くならこの中 */}
        {children}
      </body>
    </html>
  );
}
