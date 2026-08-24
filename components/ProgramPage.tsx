import PageHero from "./PageHero";
import Container from "./Container";
import AboutBlock from "./AboutBlock";
import SectionHead from "./SectionHead";
import ValueGrid from "./ValueGrid";
import StatsGrid from "./StatsGrid";
import { IconName } from "./Icon";

export interface ProgramPageData {
  eyebrow: string;
  title: string;
  heroText: string;
  crumb: string;
  image: string;
  storyEyebrow?: string;
  storyHeading: string;
  storyParagraphs: string[];
  features: { icon: IconName; title: string; text: string }[];
  featuresHeading: string;
  stats: { number: string; label: string }[];
  statsHeading: string;
}

export default function ProgramPage({ data }: { data: ProgramPageData }) {
  return (
    <>
      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        description={data.heroText}
        crumb={data.crumb}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <AboutBlock
            imageSrc={data.image}
            imageAlt={`${data.title} program activity`}
            eyebrow={data.storyEyebrow ?? "Program Overview"}
            title={data.storyHeading}
            paragraphs={data.storyParagraphs}
          />
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <Container>
          <SectionHead eyebrow="What We Do" title={data.featuresHeading} center />
          <ValueGrid items={data.features} />
        </Container>
      </section>

      <section className="bg-brand-900 py-20 sm:py-24">
        <Container>
          <SectionHead
            eyebrow="Impact So Far"
            title={data.statsHeading}
            center
            className="[&_h2]:text-white [&_span]:text-accent-400"
          />
          <StatsGrid stats={data.stats} />
        </Container>
      </section>
    </>
  );
}
