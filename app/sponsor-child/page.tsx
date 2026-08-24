import Container from "@/components/Container";
import SectionHead from "@/components/SectionHead";
import PageHero from "@/components/PageHero";
import AboutBlock from "@/components/AboutBlock";
import Timeline from "@/components/Timeline";
import Button from "@/components/Button";

export const metadata = {
  title: "Sponsor a Child",
  description: "Sponsor a child's education through Yaqeen Welfare Foundation's Parho Pakistan program and receive regular progress updates.",
};

const STEPS = [
  { title: "1. Choose a Sponsorship Plan", text: "Select monthly, quarterly or full-year sponsorship." },
  { title: "2. We Match You With a Student", text: "A child from our Parho Pakistan program is matched to your sponsorship." },
  { title: "3. Funds Go Directly to Education Costs", text: "Tuition, books, uniform and supplies are covered each term." },
  { title: "4. You Receive Progress Updates", text: "Twice-yearly updates on attendance and academic progress." },
];

export default function SponsorChildPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Sponsor a Child"
        description="Rs. 2,500 a month covers tuition, books and uniform for one child through Parho Pakistan."
        crumb="Get Involved / Sponsor a Child"
      />

      <section className="py-20 sm:py-24">
        <Container>
          <AboutBlock
            imageSrc="/images/campaign-sponsor-child.jpg"
            imageAlt="A child supported through Yaqeen's child sponsorship program"
            eyebrow="Sponsor a Child"
            title="Give one child a full year of education"
            paragraphs={[
              "For Rs. 2,500 a month, you can cover a child's tuition, books, uniform and school supplies through our Parho Pakistan program — with progress updates shared with you twice a year.",
              "Sponsorship can be one-time, monthly, or a full-year commitment — every option gives one child a steadier path through school.",
            ]}
          >
            <Button href="/donate" variant="accent" className="mt-5">
              Sponsor a Child Now
            </Button>
          </AboutBlock>
        </Container>
      </section>

      <section className="bg-[#F4F5F3] py-20 sm:py-24">
        <Container>
          <SectionHead eyebrow="How It Works" title="From sign-up to impact" center />
          <Timeline items={STEPS} />
        </Container>
      </section>
    </>
  );
}
