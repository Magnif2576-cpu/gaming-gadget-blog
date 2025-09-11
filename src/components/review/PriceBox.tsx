export default function PriceBox(
  { title, price, href, note }:
  { title: string; price: string; href: string; note?: string }
) {
  return (
    <div className="rounded-xl border p-4 md:p-5 shadow-sm">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-semibold text-lg">{title}</h3>
        <div className="text-2xl font-bold">{price}</div>
      </div>
      {note && <p className="text-sm text-neutral-600 mt-1">{note}</p>}
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener"
        className="mt-4 inline-block rounded-lg px-4 py-2 bg-black text-white font-semibold"
      >
        最安値をチェック
      </a>
    </div>
  );
}
