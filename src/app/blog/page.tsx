// src/app/blog/page.tsx
import PostCard, { PostMeta } from "@/components/PostCard";

type RawPost = {
  slug?: string;
  slugAsParams?: string;
  id?: string;
  title?: string;
  date?: string;
  description?: string;
  image?: string | null;
  meta?: Partial<Omit<PostMeta, "slug">>;
  frontmatter?: Partial<Omit<PostMeta, "slug">>;
};

// 受け取る posts はあなたの実装に合わせて取得してください
// 例: const posts: RawPost[] = await getAllPosts();
export default async function BlogPage() {
  const posts: RawPost[] = await getAllPosts(); // ←既存の取得関数名に合わせてください

  const normalize = (p: RawPost): PostMeta => ({
    slug: p.slug ?? p.slugAsParams ?? p.id ?? crypto.randomUUID(),
    title:
      p.title ??
      p.meta?.title ??
      p.frontmatter?.title ??
      "Untitled",
    date:
      p.date ??
      p.meta?.date ??
      p.frontmatter?.date ??
      new Date().toISOString(),
    description:
      p.description ??
      p.meta?.description ??
      p.frontmatter?.description ??
      "",
    image:
      p.image ??
      p.meta?.image ??
      p.frontmatter?.image ??
      null,
  });

  const list: PostMeta[] = posts.map(normalize);

  return (
    <main className="mx-auto max-w-5xl px-4 py-6">
      <h1 className="mb-6 text-2xl font-bold">Blog</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
    </main>
  );
}

// 例: ダミーの取得関数（あなたの実装と置き換えてOK）
async function getAllPosts(): Promise<RawPost[]> {
  // ここでファイル/MDX/DBから取得
  return [];
}
