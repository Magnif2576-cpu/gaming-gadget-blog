import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import StarRating from "./review/StarRating";
import PriceBox from "./review/PriceBox";
import ProsCons from "./review/ProsCons";

const components = { StarRating, PriceBox, ProsCons };

export default function Markdown({ source }: { source: string }) {
  return (
    <article
      className="prose prose-lg max-w-none
                 prose-headings:font-semibold
                 prose-h2:mt-6
                 prose-a:underline hover:prose-a:no-underline
                 prose-li:marker:text-neutral-400"
    >
      <MDXRemote
        source={source}
        components={components}
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
  );
}
