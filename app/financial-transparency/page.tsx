import Container from "@/components/Container";
import SectionHead from "@/components/SectionHead";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Financial Transparency",
  description: "See how Yaqeen Welfare Foundation allocates donations across program delivery, operations and administration.",
};

const BREAKDOWN = [
  { number: "78%", label: "Direct Program Delivery" },
  { number: "12%", label: "Field Operations" },
  { number: "6%", label: "Administration" },
  { number: "4%", label: "Monitoring & Reporting" },
];

const COMMITMENTS = [
  { icon: "doc" as const, title: "Audited Financials", text: "Reviewed annually by an independent chartered accountancy firm." },
  { icon: "target" as const, title: "Cost-Per-Beneficiary Tracking", text: "Every active campaign is tracked against a clear, published cost-per-beneficiary figure." },
  { icon: "check" as const, title: "Public Reporting", text: "Annual reports and financial summaries published for anyone to review." },
];

export default function FinancialTransparencyPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Impact"
        title="Financial Transparency"
        description="A clear breakdown of how every donated rupee is spent, reviewed independently each year."
        crumb="Our Impact / Financial Transparency"
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHead eyebrow="Where Your Donation Goes" title="Cost breakdown, FY 2025–26" center />
          <div className="reveal grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-sand bg-sand sm:grid-cols-4">
            {BREAKDOWN.map((b) => (
              <div key={b.label} className="bg-white px-6 py-9 text-center">
                <strong className="mb-1.5 block font-display text-[32px] text-brand-700">{b.number}</strong>
                <span className="font-data text-[13px] text-slate-muted">{b.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#F4F5F3] py-20 sm:py-24">
        <Container>
          <SectionHead eyebrow="Our Commitment" title="Transparency isn't a promise — it's a practice" center />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {COMMITMENTS.map((c) => (
              <div key={c.title} className="reveal flex gap-4 rounded-2xl border border-sand bg-white p-6">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-800">
                  <Icon name={c.icon} className="h-[19px] w-[19px] text-white" />
                </span>
                <div>
                  <h4 className="mb-1.5 text-[15px] font-bold text-ink">{c.title}</h4>
                  <p className="text-[13px] text-slate-muted">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
