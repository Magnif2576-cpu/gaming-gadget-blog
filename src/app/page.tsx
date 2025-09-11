export const metadata = {
  title: "ブログ一覧",
  description: "最新のレビュー記事一覧",
  alternates: { canonical: "/blog" },
};

export default function Home() {
  return (
    <main className="min-h-screen px-6 sm:px-10 py-10">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Gaming Gadget Blog
        </h1>
        <p className="text-neutral-600 mt-3">
          ゲーミングデバイスと便利ガジェットのレビュー・比較・おすすめをわかりやすく。
        </p>
      </section>
    </main>
  );
}
