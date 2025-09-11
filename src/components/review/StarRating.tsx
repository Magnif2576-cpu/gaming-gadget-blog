"use client";

export default function StarRating({
  value = 4.5,
  outOf = 5,
}: { value?: number; outOf?: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const empty = Math.max(0, outOf - full - (half ? 1 : 0));

  return (
    <div aria-label={`rating ${value} of ${outOf}`} className="flex items-center gap-1 text-lg">
      {Array.from({ length: full }).map((_, i) => <span key={`f${i}`}>★</span>)}
      {half && <span>☆</span>}
      {Array.from({ length: empty }).map((_, i) => <span key={`e${i}`}>☆</span>)}
      <span className="ml-2 text-sm text-neutral-600">{value}/{outOf}</span>
    </div>
  );
}
