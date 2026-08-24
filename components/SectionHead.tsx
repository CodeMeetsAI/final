import Eyebrow from "./Eyebrow";

export default function SectionHead({
  eyebrow,
  title,
  description,
  center = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`mb-12 max-w-[640px] ${center ? "mx-auto text-center" : ""} ${className}`}
    >
      <Eyebrow center={center}>{eyebrow}</Eyebrow>
      <h2 className="text-[26px] font-bold leading-tight text-ink sm:text-[32px]">{title}</h2>
      {description && <p className="mt-3 text-[15.5px] text-slate-muted">{description}</p>}
    </div>
  );
}
