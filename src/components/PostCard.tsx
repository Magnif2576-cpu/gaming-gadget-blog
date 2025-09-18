// components/PostCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  const { slug, frontmatter } = post;
  const { title, description, date, thumbnail } = frontmatter;

  return (
    <article className="rounded-2xl border border-gray-200 hover:shadow-md transition p-4 bg-white">
      <Link href={`/blog/${slug}`} className="block">
        <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-100">
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt={title}
              width={800}
              height={450}
              className="h-full w-full object-cover"
              priority={false}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-gray-400">
              No Image
            </div>
          )}
        </div>
        <h3 className="mt-3 text-lg font-semibold">{title}</h3>
        {date && (
          <time className="text-sm text-gray-500">
            {new Date(date).toLocaleDateString("ja-JP")}
          </time>
        )}
        {description && (
          <p className="mt-1 text-sm text-gray-700 line-clamp-2">{description}</p>
        )}
      </Link>
    </article>
  );
}
