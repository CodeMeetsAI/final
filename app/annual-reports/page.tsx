import Container from "@/components/Container";
import SectionHead from "@/components/SectionHead";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Annual Reports",
  description: "Download Yaqeen Welfare Foundation's audited annual reports covering program outcomes and financial transparency.",
};

const REPORTS = [
  {
    title: "Annual Impact Report 2025–26",
    text: "Full-year program outcomes, financials and beneficiary data for FY 2025–26.",
    href: "/Yaqeen_Welfare_Foundation_Annual_Impact_Report_2025_26.pdf",
  },
  {
    title: "Audit Report 2025",
    text: "Independent audit report covering the foundation's accounts for FY 2025.",
    href: "/Audit%20Report%202025.pdf",
  },
  {
    title: "Audited Account 2024",
    text: "Independent audited account statement for FY 2024, reviewed by a chartered accountancy firm.",
    href: "/YWF%20-%20Audited%20account%202024.pdf",
  },
];

export default function AnnualReportsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Impact"
        title="Annual Reports"
        description="Audited program and financial reports, published every year for public review."
        crumb="Our Impact / Annual Reports"
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHead
            eyebrow="Published Reports"
            title="Annual reports, published every year"
            description="Every report includes program outcomes, audited financials and independent review notes."
            center
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {REPORTS.map((r) => (
              <div key={r.title} className="reveal rounded-2xl border border-sand bg-white p-6">
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-cream">
                  <Icon name="doc" className="h-[18px] w-[18px] text-brand-700" />
                </span>
                <span className="mb-1 block font-data text-[11px] font-bold uppercase tracking-[0.06em] text-accent-600">
                  Report
                </span>
                <h3 className="mb-2 text-[16px] font-bold text-ink">{r.title}</h3>
                <p className="mb-5 text-[13.8px] text-slate-muted">{r.text}</p>
                <Button href={r.href} variant="outlineNavy" small>
                  View Report
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <Container>
          <SectionHead
            eyebrow="Independent Review"
            title="Externally audited, every year"
            description="All annual reports are reviewed by an independent chartered accountancy firm before publication, in line with our governance policy."
          />
          <Button href="/financial-transparency" variant="outlineNavy">
            View Financial Transparency
          </Button>
        </Container>
      </section>
    </>
  );
}
