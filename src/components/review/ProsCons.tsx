export default function ProsCons(
  { pros = [], cons = [] }: { pros?: string[]; cons?: string[] }
) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="rounded-xl border p-4">
        <h4 className="font-semibold mb-2">良いところ</h4>
        <ul className="list-disc pl-5 space-y-1">
          {pros.map((p, i) => <li key={`p${i}`}>{p}</li>)}
        </ul>
      </div>
      <div className="rounded-xl border p-4">
        <h4 className="font-semibold mb-2">惜しいところ</h4>
        <ul className="list-disc pl-5 space-y-1">
          {cons.map((c, i) => <li key={`c${i}`}>{c}</li>)}
        </ul>
      </div>
    </div>
  );
}
