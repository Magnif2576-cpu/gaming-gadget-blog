// src/app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Script from "next/script";
import { GA_ID } from "@/lib/gtag";

// ✅ メタデータ（App Router 用）
export const metadata: Metadata = {
  title: "Gaming Gadget Blog",
  description: "軽量・高性能ガジェットのレビューと比較",
  verification: {
    google: "zcYcSQ1xt1oXvPra_qnhFQf2ART9uxUKIZYiPpGF5Ig", // ← Search Console発行のコード
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {/* ヘッダー */}
        <header className="border-b bg-white">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <Link href="/" className="text-lg font-bold">
              Gaming Gadget Blog
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/blog" className="text-sm hover:underline">Blog</Link>
              <Link href="/about" className="text-sm hover:underline">About</Link>
              <Link href="/privacy-policy" className="text-sm hover:underline">Privacy</Link>
              <Link href="/contact" className="text-sm hover:underline">Contact</Link>
            </div>
          </nav>
        </header>

        {/* ページ内容 */}
        {children}

        {/* Google Analytics (GA4) */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
