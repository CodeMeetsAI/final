export default function Eyebrow({
  children,
  center = false,
  onDark = false,
}: {
  children: string;
  center?: boolean;
  onDark?: boolean;
}) {
  return (
    <span
      className={`mb-3 inline-flex items-center gap-2 font-data text-[12.5px] font-bold uppercase tracking-[0.14em] ${
        onDark ? "text-accent-400" : "text-brand-600"
      } ${center ? "justify-center w-full" : ""}`}
    >
      <span className={`inline-block h-[2px] w-[22px] ${onDark ? "bg-white/50" : "bg-accent-500"}`} />
      {children}
    </span>
  );
}
