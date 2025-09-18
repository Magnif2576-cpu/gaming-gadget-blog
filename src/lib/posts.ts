// lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostFrontmatter = {
  title: string;
  description?: string;
  date?: string;         // ISO形式 "2025-09-10"
  thumbnail?: string;    // "/images/xxx.jpg"
};

export type Post = {
  slug: string;
  content: string;
  frontmatter: PostFrontmatter;
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
}

export function getPostBySlug(slug: string): Post | null {
  const realSlug = slug.replace(/\.mdx?$/, "");
  const fullPathMd = path.join(POSTS_DIR, `${realSlug}.md`);
  const fullPathMdx = path.join(POSTS_DIR, `${realSlug}.mdx`);
  const filePath = fs.existsSync(fullPathMdx) ? fullPathMdx : fullPathMd;

  if (!fs.existsSync(filePath)) return null;

  const file = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(file);

  return {
    slug: realSlug,
    content,
    frontmatter: {
      title: data.title ?? realSlug,
      description: data.description ?? "",
      date: data.date ?? "",
      thumbnail: data.thumbnail ?? "",
    },
  };
}

export function getAllPosts(): Post[] {
  const posts = getPostSlugs()
    .map((slug) => getPostBySlug(slug)!)
    .filter(Boolean);

  // 新しい日付順にソート（dateが無いものは後ろ）
  return posts.sort((a, b) => {
    const da = a.frontmatter.date ? Date.parse(a.frontmatter.date) : 0;
    const db = b.frontmatter.date ? Date.parse(b.frontmatter.date) : 0;
    return db - da;
  });
}
