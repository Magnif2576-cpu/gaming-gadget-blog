// components/PostCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PostCard({ post }: { post: any }) {
  const { title, description, date, thumbnail } = post.frontmatter;
  const [imgSrc, setImgSrc] = useState(
    thumbnail || "/images/placeholder.png"
  );

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block border rounded-lg overflow-hidden bg-white"
    >
      <div className="relative aspect-[16/9] bg-gray-100">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover"
          // 404や読み込み失敗時にプレースホルダーへ差し替え
          onError={() => setImgSrc("/images/placeholder.png")}
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <p className="mt-2 text-xs text-gray-400">
          {new Date(date).toLocaleDateString("ja-JP")}
        </p>
      </div>
    </Link>
  );
}
