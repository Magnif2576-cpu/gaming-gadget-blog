import Link from "next/link";
// 相対パスで安全に参照（blog → app → lib）
import { getAllPosts } from "../../lib/posts";

export const metadata = { title: "Blog | Gaming Gadget Blog" };

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">最新記事</h1>
      <ul className="mt-6 space-y-4">
        {posts.map((p) => (
          <li key={p.slug} className="border-b pb-4">
            <h2 className="text-xl font-semibold">
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <p className="text-sm text-neutral-600">{p.date}</p>
            {p.description && (
              <p className="text-neutral-700 mt-1">{p.description}</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
