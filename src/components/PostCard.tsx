// src/components/PostCard.tsx
import Image from "next/image";
import Link from "next/link";

export interface PostMeta {
  slug: string;
  title: string;
  description?: string;
  date: string;          // ISO文字列 or "YYYY-MM-DD"
  image?: string | null; // ない場合はプレースホルダ
}

interface PostCardProps {
  post: PostMeta;
}

export default function PostCard({ post }: PostCardProps) {
  const {
    slug,
    title,
    description = "",
    date,
    image,
  } = post;

  const cover = image ?? "/images/placeholder.png";

  return (
    <article className="rounded-2xl border bg-white shadow-sm hover:shadow-md transition">
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl">
          <Image
            src={cover}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            priority={false}
          />
        </div>
        <div className="p-4">
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-gray-600">{description}</p>
          <time className="mt-2 block text-xs text-gray-500">
            {new Date(date).toLocaleDateString("ja-JP")}
          </time>
        </div>
      </Link>
    </article>
  );
}
