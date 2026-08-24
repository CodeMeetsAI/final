import Link from "next/link";

export default function PageHero({
  eyebrow,
  title,
  description,
  crumb,
}: {
  eyebrow: string;
  title: string;
  description: string;
  crumb: string;
}) {
  return (
    <section className="bg-gradient-to-b from-brand-900 to-brand-800 px-6 py-16 text-center text-white sm:py-20">
      <span className="mb-3 inline-flex items-center justify-center gap-2 font-data text-[12.5px] font-bold uppercase tracking-[0.14em] text-accent-400">
        <span className="inline-block h-[2px] w-[22px] bg-white/50" />
        {eyebrow}
      </span>
      <h1 className="mx-auto max-w-[720px] text-[30px] font-bold leading-tight sm:text-[44px]">
        {title}
      </h1>
      <p className="mx-auto mt-4 max-w-[600px] text-[16px] text-white/80">{description}</p>
      <div className="mt-4 font-data text-[12.5px] text-white/55">
        <Link href="/" className="text-white/80 hover:text-accent-400">
          Home
        </Link>{" "}
        / {crumb}
      </div>
    </section>
  );
}
