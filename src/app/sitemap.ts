// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://gaming-gadget-blog.vercel.app";
  const posts = getAllPosts();

  const staticUrls: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
  ];

  const postUrls: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.frontmatter.date ? new Date(p.frontmatter.date) : new Date(),
  }));

  return [...staticUrls, ...postUrls];
}
