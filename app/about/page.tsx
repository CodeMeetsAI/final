import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import SectionHead from "@/components/SectionHead";
import PageHero from "@/components/PageHero";
import AboutBlock from "@/components/AboutBlock";
import Timeline from "@/components/Timeline";
import Icon from "@/components/Icon";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Yaqeen Welfare Foundation's story, vision, governance and legal status as a registered Pakistani NGO.",
};

const VALUES = [
  {
    icon: "target" as const,
    title: "Our Vision",
    text: "A Pakistan where every individual has equal access to education, healthcare and opportunity, regardless of where they were born.",
  },
  {
    icon: "check" as const,
    title: "Our Mission",
    text: "To deliver sustainable, community-driven programs in education, health, empowerment and relief — measured by real, lasting outcomes.",
  },
  {
    icon: "heart" as const,
    title: "Our Values",
    text: "Dignity, transparency, community ownership, and accountability in every rupee spent and every program delivered.",
  },
];

const GOVERNANCE = [
  { title: "Board of Directors", text: "Sets strategic direction and approves all major program and financial decisions." },
  { title: "Executive & Program Leadership", text: "Oversees day-to-day delivery across Education, Health, Women Empowerment, Community Support and Environment portfolios." },
  { title: "Finance & Compliance Committee", text: "Conducts internal audits and prepares annual reports for public disclosure." },
  { title: "Field Teams", text: "Community-based staff and volunteers who deliver programs directly on the ground." },
];

const PARTNERS = ["AT TUQA", "Malir Public School", "Sindh Education Dept.", "Community Health Alliance", "Green Karachi Initiative"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Yaqeen Welfare Foundation"
        title="Who We Are"
        description="A registered Pakistani NGO working since 2015 to bring education, healthcare, empowerment and dignity to underserved communities."
        crumb="About Us"
      />

      <section id="story" className="py-20 sm:py-24">
        <Container>
          <AboutBlock
            imageSrc="/photos-3-001 (9)/story.jpg"
            imageAlt="Yaqeen Welfare Foundation staff planning a community program"
            eyebrow="Our Story"
            title="Built from one classroom, grown into a movement"
            paragraphs={[
              "Yaqeen Welfare Foundation began in 2015 with a single learning centre in Malir, Karachi, started by a small group of volunteers who believed education was the fastest route out of poverty. What started as after-school tutoring for a dozen children has grown into a multi-sector foundation working across education, health, women's empowerment, community relief and climate action.",
              "Today, our programs — including Parho Pakistan, SALEEQA, FALAH and MAHOL — reach over 120 communities across Sindh, guided by the same principle we started with: dignity first, charity second.",
            ]}
          />
        </Container>
      </section>

      <section id="vmv" className="bg-cream py-20 sm:py-24">
        <Container>
          <SectionHead eyebrow="Vision, Mission & Values" title="What guides every program we run" center />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="reveal rounded-2xl border border-sand bg-white p-7">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream">
                  <Icon name={v.icon} className="h-5 w-5 text-brand-700" />
                </span>
                <h4 className="mb-2 text-[15px] font-bold text-ink">{v.title}</h4>
                <p className="text-[13.8px] text-slate-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="chairman" className="py-20 sm:py-24">
        <Container>
          <AboutBlock
            imageSrc="/images/whoweare.jpg"
            imageAlt="Chairman of Yaqeen Welfare Foundation"
            eyebrow="Chairman's Message"
            title={'"Trust is the foundation of everything we build."'}
            reverse
            paragraphs={[
              "When we started Yaqeen in 2015, we made a promise to the families we serve: every donation would be treated as an amanah — a trust — and spent with full transparency. Eleven years on, that promise still shapes every decision our board makes, from which communities we enter to how we report our finances.",
            ]}
          >
            <p className="mt-4 font-bold text-brand-800">— Chairman, Yaqeen Welfare Foundation</p>
          </AboutBlock>
        </Container>
      </section>

      <section id="governance" className="bg-[#F4F5F3] py-20 sm:py-24">
        <Container>
          <SectionHead eyebrow="Governance & Leadership" title="An accountable structure, from board to field team" />
          <Timeline items={GOVERNANCE} />
        </Container>
      </section>

      <section id="partners" className="py-20 sm:py-24">
        <Container>
          <SectionHead eyebrow="Partners & Collaborations" title="Working Together for Greater Impact" center />
          <div className="reveal flex flex-wrap items-center justify-between gap-7 opacity-75">
            {PARTNERS.map((name) => (
              <span
                key={name}
                className="rounded-lg border border-dashed border-sand px-5 py-3.5 font-display text-[15px] font-bold text-slate-muted"
              >
                {name}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section id="legal" className="bg-cream py-20 sm:py-24">
        <Container>
          <SectionHead
            eyebrow="Legal Status & Registration"
            title="Fully registered, fully accountable"
            description="Yaqeen Welfare Foundation is registered under Pakistani NGO law, Reg. No. NGO-PK-2015-0417, with active tax-exemption and compliance filings maintained annually. Audited financial statements and annual reports are published for public review."
          />
          <Button href="#" variant="outlineNavy">
            Download Registration Certificate
          </Button>
        </Container>
      </section>
    </>
  );
}
