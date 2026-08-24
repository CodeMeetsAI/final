import Container from "@/components/Container";
import SectionHead from "@/components/SectionHead";
import PageHero from "@/components/PageHero";
import AboutBlock from "@/components/AboutBlock";
import HelpGrid from "@/components/HelpGrid";
import Button from "@/components/Button";

export const metadata = {
  title: "Qurbani Campaign",
  description: "Book goat, cow or camel Qurbani shares with Yaqeen Welfare Foundation for Eid-ul-Adha, performed and distributed on your behalf.",
};

const PACKAGES = [
  { title: "Goat Share", amount: "Rs. 32,000", text: "One complete goat Qurbani, distributed to families in your chosen community.", href: "/donate" },
  { title: "Cow Share (1/7)", amount: "Rs. 16,000", text: "One-seventh share in a cow Qurbani, performed and distributed on your behalf.", href: "/donate" },
  { title: "Camel Share (1/7)", amount: "Rs. 20,000", text: "One-seventh share in a camel Qurbani, performed and distributed on your behalf.", href: "/donate" },
];

export default function QurbaniCampaignPage() {
  return (
    <>
      <PageHero
        eyebrow="Seasonal Campaign"
        title="Qurbani Campaign"
        description="Book your Qurbani with Yaqeen Welfare Foundation and reach families who need it most this Eid-ul-Adha."
        crumb="Get Involved / Qurbani Campaign"
      />

      <section className="py-20 sm:py-24">
        <Container>
          <AboutBlock
            imageSrc="/photos-3-001 (9)/qrbani.jpg"
            imageAlt="Meat distribution during the Qurbani campaign"
            eyebrow="Seasonal Campaign"
            title="Qurbani Campaign — Your sacrifice, their sustenance"
            paragraphs={[
              "Every year during Eid-ul-Adha, Yaqeen Welfare Foundation organises Qurbani on behalf of donors and distributes fresh meat directly to families who rarely have access to it throughout the year.",
              "Choose from goat, cow or camel shares — every Qurbani is performed according to Shariah guidelines, with full transparency on distribution.",
            ]}
          >
            <Button href="/donate" variant="accent" className="mt-5">
              Book Your Qurbanii
            </Button>
          </AboutBlock>
        </Container>
      </section>

      <section className="bg-[#F4F5F3] py-20 sm:py-24">
        <Container>
          <SectionHead eyebrow="Qurbani Packages" title="Choose your share" center />
          <HelpGrid items={PACKAGES} />
        </Container>
      </section>
    </>
  );
}
