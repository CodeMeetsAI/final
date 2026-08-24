import Container from "@/components/Container";
import SectionHead from "@/components/SectionHead";
import PageHero from "@/components/PageHero";
import ValueGrid from "@/components/ValueGrid";
import Button from "@/components/Button";

export const metadata = {
  title: "Fundraise for Yaqeen",
  description: "Learn how to start a fundraiser for Yaqeen Welfare Foundation, with support materials and campaign tracking.",
};

const WAYS = [
  { icon: "star" as const, title: "Personal Fundraisers", text: "Turn a birthday, anniversary or milestone into a fundraising campaign." },
  { icon: "people" as const, title: "School & Community Drives", text: "Organise a drive at your school, office or local community." },
  { icon: "target" as const, title: "We Provide the Tools", text: "Branded materials, tracking and promotion support for your campaign." },
];

export default function FundraisePage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Fundraise for Yaqeen"
        description="Start a personal, school or community fundraiser and help fund our education, health and relief programs."
        crumb="Get Involved / Fundraise"
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHead
            eyebrow="Fundraise for Yaqeen"
            title="Start your own fundraiser"
            description="Run a birthday fundraiser, a school drive, or a community event — we'll support you every step of the way."
            center
          />
          <ValueGrid items={WAYS} />
          <div className="mt-9 text-center">
            <Button href="/contact" variant="accent">
              Start Your Fundraiser
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
