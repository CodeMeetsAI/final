import Button from "./Button";

export default function HelpGrid({
  items,
}: {
  items: { title: string; amount: string; text: string; href?: string; cta?: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.title}
          className="reveal flex flex-col rounded-2xl border border-sand bg-white p-6 transition-all hover:-translate-y-1.5 hover:shadow-card"
        >
          <div className="font-display text-[24px] text-brand-700">{item.amount}</div>
          <h3 className="mb-2 mt-2 text-[16px] font-bold text-ink">{item.title}</h3>
          <p className="mb-5 flex-grow text-[13.3px] text-slate-muted">{item.text}</p>
          <Button href={item.href ?? "/donate"} variant="outlineNavy" small>
            {item.cta ?? "Donate"}
          </Button>
        </div>
      ))}
    </div>
  );
}
