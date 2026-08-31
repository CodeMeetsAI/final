import Button from "./Button";
import Icon, { IconName } from "./Icon";

type Tone = "amber" | "rose" | "violet" | "sky" | "brand";

const TONES: Record<Tone, { bar: string; chip: string; amount: string }> = {
  amber: { bar: "from-amber-400 to-orange-500", chip: "from-amber-400 to-orange-500", amount: "text-orange-600" },
  rose: { bar: "from-rose-400 to-red-500", chip: "from-rose-400 to-red-500", amount: "text-rose-600" },
  violet: { bar: "from-violet-400 to-purple-600", chip: "from-violet-400 to-purple-600", amount: "text-violet-600" },
  sky: { bar: "from-sky-400 to-blue-600", chip: "from-sky-400 to-blue-600", amount: "text-sky-600" },
  brand: { bar: "from-brand-500 to-brand-800", chip: "from-brand-500 to-brand-800", amount: "text-brand-700" },
};

export default function HelpGrid({
  items,
}: {
  items: {
    title: string;
    amount: string;
    text: string;
    href?: string;
    cta?: string;
    icon?: IconName;
    tone?: Tone;
  }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => {
        const tone = TONES[item.tone ?? "brand"];
        return (
          <div
            key={item.title}
            className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-sand bg-white p-7 transition-all hover:-translate-y-1.5 hover:shadow-card"
          >
            <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${tone.bar}`} />
            {item.icon && (
              <span
                className={`mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${tone.chip} text-white shadow-[0_8px_16px_-6px_rgba(24,34,49,0.35)] transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
            )}
            <div className={`font-display text-[24px] ${tone.amount}`}>{item.amount}</div>
            <h3 className="mb-2 mt-2 text-[16px] font-bold text-ink">{item.title}</h3>
            <p className="mb-6 flex-grow text-[13.3px] text-slate-muted">{item.text}</p>
            <Button href={item.href ?? "/donate"} variant="outlineNavy" small>
              {item.cta ?? "Donate"}
            </Button>
          </div>
        );
      })}
    </div>
  );
}
