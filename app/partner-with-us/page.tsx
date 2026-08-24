import Container from "@/components/Container";
import SectionHead from "@/components/SectionHead";
import PageHero from "@/components/PageHero";
import AboutBlock from "@/components/AboutBlock";
import ValueGrid from "@/components/ValueGrid";
import Button from "@/components/Button";

export const metadata = {
  title: "Partner With Us",
  description: "Explore partnership opportunities with Yaqeen Welfare Foundation across education, health and community programs.",
};

const MODELS = [
  { icon: "home" as const, title: "Facility Sharing", text: "Schools or clinics offering space for our education and health programs." },
  { icon: "check" as const, title: "Co-Funded Programs", text: "Joint funding of specific initiatives aligned with shared goals." },
  { icon: "people" as const, title: "Technical Expertise", text: "Organisations offering specialist knowledge, training or tools." },
];

export default function PartnerWithUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Partner With Us"
        description="Schools, clinics, businesses and NGOs can partner with Yaqeen Welfare Foundation to extend program reach."
        crumb="Get Involved / Partner With Us"
      />

      <section className="py-20 sm:py-24">
        <Container>
          <AboutBlock
            imageSrc="/photos-3-001 (9)/partner.jpg"
            imageAlt="Yaqeen Welfare Foundation meeting with a partner organization"
            eyebrow="Partner With Us"
            title="Build lasting change together"
            paragraphs={[
              "We partner with schools, clinics, businesses and other NGOs to extend the reach of our programs. Whether it's shared facilities, co-funded initiatives, or technical expertise, partnerships let us do more, together.",
              "Current partners include AT TUQA, Malir Public School, and the Sindh Education Department — organisations we work alongside on shared community goals.",
            ]}
          >
            <Button href="/contact" variant="accent" className="mt-5">
              Start a Conversation
            </Button>
          </AboutBlock>
        </Container>
      </section>

      <section className="bg-[#F4F5F3] py-20 sm:py-24">
        <Container>
          <SectionHead eyebrow="Ways to Partner" title="Partnership models we work with" center />
          <ValueGrid items={MODELS} />
        </Container>
      </section>
    </>
  );
}
