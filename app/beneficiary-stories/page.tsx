import Container from "@/components/Container";
import SectionHead from "@/components/SectionHead";
import PageHero from "@/components/PageHero";
import StoryGrid from "@/components/StoryGrid";

export const metadata = {
  title: "Beneficiary Stories",
  description:
    "Read real beneficiary stories from Yaqeen Welfare Foundation's education, health, women empowerment and community relief programs.",
};

const STORIES = [
  { src: "/images/story-ben-ayesha.jpg", alt: "Ayesha, a student supported by the Parho Pakistan program", tag: "Education", title: "Ayesha's Classroom, Rebuilt", text: "Out of school for two years, Ayesha rejoined through a Parho Pakistan non-formal learning centre and now leads her class in reading." },
  { src: "/images/story-ben-rukhsana.jpg", alt: "Rukhsana, a graduate of the SALEEQA vocational training program", tag: "Women Empowerment", title: "Rukhsana's Stitching Business", text: "A SALEEQA vocational training graduate, Rukhsana now runs a home-based tailoring unit supporting her family of five." },
  { src: "/images/story-ben-family.jpg", alt: "A family that received emergency relief support", tag: "Community Support", title: "A Family, Steadied by FALAH", text: "After losing their income to flooding, the Qureshi family received ration support and school sponsorship through FALAH." },
  { src: "/images/story-ben-imran.jpg", alt: "Imran, a patient treated at a Yaqeen medical camp", tag: "Health", title: "Imran's Recovery", text: "Diagnosed early through a Health Screening drive, Imran received follow-up treatment at the AT TUQA clinic and returned to work within months." },
{
  src: "/images/story-ben-bilal.jpg",
  alt: "Bilal, a participant in the sports program",
  tag: "Sports Program",
  title: "Bilal Finds His Strength",
  text: "Through regular training and teamwork, Bilal gained confidence, discipline, and the determination to pursue his dreams on and off the field.",
},  { src: "/images/story-ben-sana.jpg", alt: "Sana, a sponsored orphan supported by Yaqeen", tag: "Orphan Support", title: "Sana's Continued Education", text: "Sponsored since age seven, Sana is now in her final year of school, supported throughout by monthly guardian assistance." },
];

export default function BeneficiaryStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Impact"
        title="Beneficiary Stories"
        description="Every number in our impact report represents a real person. These are some of their stories."
        crumb="Our Impact / Beneficiary Stories"
      />
      <section className="py-20 sm:py-24">
        <Container>
          <StoryGrid items={STORIES} />
        </Container>
      </section>
    </>
  );
}
