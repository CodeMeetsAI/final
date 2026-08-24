export default function StatsGrid({ stats }: { stats: { number: string; label: string }[] }) {
  return (
    <div className="reveal grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-brand-900/40 px-6 py-9 text-center">
          <strong className="mb-1.5 block font-display text-[32px] text-accent-400">
            {s.number}
          </strong>
          <span className="font-data text-[13px] text-white/75">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
