import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata = {
  title: "Blog | Gaming Gadget Blog",
  description: "ゲーミングガジェットのレビュー・ニュース・ノウハウを発信",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">Blog</h1>

      {posts.length === 0 && (
        <p className="text-gray-600">記事がありません。まずは1本書いてみましょう！</p>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
    </main>
  );
}
