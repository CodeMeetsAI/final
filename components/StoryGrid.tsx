import Image from "next/image";

export default function StoryGrid({
  items,
}: {
  items: { src: string; alt: string; tag: string; title: string; text: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="reveal overflow-hidden rounded-[20px] border border-sand bg-white transition-transform hover:-translate-y-1.5 hover:shadow-card"
        >
          <div className="h-[200px] overflow-hidden">
            <Image
              src={item.src}
              alt={item.alt}
              width={500}
              height={400}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="p-6">
            <span className="mb-2.5 block font-data text-[11px] font-bold uppercase tracking-[0.08em] text-accent-600">
              {item.tag}
            </span>
            <h3 className="mb-2 text-[17px] font-bold text-ink">{item.title}</h3>
            <p className="text-[13.8px] text-slate-muted">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
