import { getAllPostSlugs, getPostBySlug } from "../../../lib/posts";
import Markdown from "../../../components/Markdown";
import type { Metadata } from "next";

type Params = { slug: string };

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

// ★ v15対応: params は Promise。await してから使う
export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = getPostBySlug(slug);
  return {
    title: `${meta.title} | Gaming Gadget Blog`,
    description: meta.description,
  };
}

// ★ ページ本体も async & await
export default async function PostPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const { meta, content } = getPostBySlug(slug);

  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">{meta.title}</h1>
      <p className="text-sm text-neutral-600 mt-1">{meta.date}</p>
      <div className="mt-6">
        <Markdown source={content} />
      </div>
      {/* SEO: JSON-LD (BlogPosting) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": meta.title,
            "datePublished": meta.date,
            "description": meta.description,
            "author": { "@type": "Person", "name": "Magni" },
            "publisher": { "@type": "Organization", "name": "Gaming Gadget Blog" },
            "mainEntityOfPage": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/blog/${meta.slug}`
          }),
        }}
      />
    </main>
  );
}
