import Image from "next/image";
import Eyebrow from "./Eyebrow";

export default function AboutBlock({
  imageSrc,
  imageAlt,
  imageSize = { w: 700, h: 560 },
  eyebrow,
  title,
  paragraphs,
  reverse = false,
  children,
}: {
  imageSrc: string;
  imageAlt: string;
  imageSize?: { w: number; h: number };
  eyebrow: string;
  title: string;
  paragraphs: string[];
  reverse?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
      <div className={reverse ? "md:order-2" : ""}>
        <div className="reveal overflow-hidden rounded-[20px] shadow-card">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageSize.w}
            height={imageSize.h}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="reveal">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="text-[26px] font-bold leading-tight text-ink sm:text-[32px]">{title}</h2>
        {paragraphs.map((p, i) => (
          <p key={i} className="mt-4 text-[15.5px] text-slate-muted">
            {p}
          </p>
        ))}
        {children}
      </div>
    </div>
  );
}
