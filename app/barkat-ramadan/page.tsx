import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import AboutBlock from "@/components/AboutBlock";
import Button from "@/components/Button";

export const metadata = {
  title: "BARKAT Ramadan Campaign",
  description: "Support Yaqeen Welfare Foundation's BARKAT Ramadan Campaign with Zakat, Sadaqah or general donations for families across Pakistan.",
};

const STATS = [
  { number: "8,000+", label: "Families Targeted (2026)" },
  { number: "30", label: "Days of Iftar Support" },
  { number: "100%", label: "Zakat-Eligible" },
  { number: "11 Yrs", label: "Running Since 2015" },
];

export default function BarkatRamadanPage() {
  return (
    <>
      <PageHero
        eyebrow="Seasonal Campaign"
        title="BARKAT Ramadan Campaign"
        description="Rations, iftar and Zakat distribution for 8,000 families this Ramadan."
        crumb="Get Involved / BARKAT Ramadan Campaign"
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="reveal mb-14 flex items-center gap-3.5 rounded-2xl bg-accent-500 px-6 py-4 text-brand-900">
            <span className="rounded-full bg-brand-900 px-3 py-1.5 font-data text-[11px] font-bold uppercase tracking-[0.08em] text-white">
              Active Campaign
            </span>
            <strong className="font-display text-[16.5px]">BARKAT Ramadan Campaign 2026</strong>
          </div>

          <AboutBlock
            imageSrc="/photos-3-001 (9)/ramadan.jpg"
            imageAlt="Volunteers preparing iftar and ration packs for the BARKAT campaign"
            eyebrow="Seasonal Campaign"
            title="BARKAT — Blessings shared, one family at a time"
            paragraphs={[
              "Each Ramadan, our BARKAT campaign delivers ration packs, iftar meals and Zakat-eligible support to thousands of families across Sindh — ensuring no household goes without during the holy month.",
              "Your Zakat, Sadaqah or general donation directly funds ration distribution, community iftars, and Eid support for children in our care.",
            ]}
          >
            <Button href="/donate" variant="accent" className="mt-5">
              Contribute to BARKAT
            </Button>
          </AboutBlock>
        </Container>
      </section>

      <section className="bg-[#F4F5F3] py-20 sm:py-24">
        <Container>
          <div className="reveal grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-sand bg-sand sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white px-6 py-9 text-center">
                <strong className="mb-1.5 block font-display text-[32px] text-brand-700">{s.number}</strong>
                <span className="font-data text-[13px] text-slate-muted">{s.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
