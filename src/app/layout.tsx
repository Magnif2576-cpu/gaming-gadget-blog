// src/app/layout.tsx
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Gaming Gadget Blog",
  description: "軽量・高性能ガジェットのレビューと比較",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <Link href="/" className="text-lg font-bold">Gaming Gadget Blog</Link>
            <div className="flex items-center gap-4">
              <Link href="/blog" className="text-sm hover:underline">Blog</Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
