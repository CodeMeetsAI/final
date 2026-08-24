export default function Timeline({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="reveal ml-2.5 border-l-2 border-sand pl-8">
      {items.map((item, i) => (
        <div key={i} className="relative pb-8 last:pb-0">
          <span className="absolute -left-[37px] top-0.5 h-3.5 w-3.5 rounded-full border-[3px] border-white bg-accent-500 shadow-[0_0_0_2px_theme(colors.brand.800)]" />
          <strong className="font-display text-[15px] text-brand-800">{item.title}</strong>
          <p className="mt-1 text-[13.8px] text-slate-muted">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
