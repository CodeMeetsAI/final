import Icon, { IconName } from "./Icon";

export default function ValueGrid({
  items,
}: {
  items: { icon: IconName; title: string; text: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="reveal rounded-2xl border border-sand bg-white p-7 transition-shadow hover:shadow-card"
        >
          <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-sand">
            <Icon name={item.icon} className="h-5 w-5 text-brand-700" />
          </span>
          <h4 className="mb-2 text-[15px] font-bold text-ink">{item.title}</h4>
          <p className="text-[13.8px] text-slate-muted">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
