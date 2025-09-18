// ✅ Node.js ランタイムで fs を使う
export const runtime = "nodejs";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// --- SEO ---
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params; // 👈 ここがポイント
  const post = getPostBySlug(slug);
  if (!post) return { title: "記事が見つかりません" };

  const { title, description, thumbnail } = post.frontmatter;
  const url = `https://gaming-gadget-blog.vercel.app/blog/${post.slug}`;

  return {
    title: `${title} | Gaming Gadget Blog`,
    description,
    openGraph: {
      title: `${title} | Gaming Gadget Blog`,
      description,
      url,
      images: thumbnail ? [{ url: thumbnail }] : [],
      type: "article",
    },
    alternates: { canonical: url },
  };
}

// --- ページ本体 ---
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // 👈 ここがポイント
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const { title, date } = post.frontmatter;

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">{title}</h1>
        {date && (
          <time className="text-sm text-gray-500">
            {new Date(date).toLocaleDateString("ja-JP")}
          </time>
        )}
      </header>

      <article className="prose max-w-none prose-img:rounded-xl">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: "wrap" }],
              ],
            },
          }}
        />
      </article>
    </main>
  );
}
