import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionHead from "@/components/SectionHead";
import PageHero from "@/components/PageHero";
import Icon, { IconName } from "@/components/Icon";

export const metadata = {
  title: "Our Team",
  description:
    "Meet the people behind Yaqeen Welfare Foundation — a dedicated team working across education, health, empowerment, relief and community development.",
};

const LEADERSHIP = [
  {
    name: "Chairman",
    role: "Chairman, Board of Directors",
    text: "Provides strategic leadership and ensures that Yaqeen remains grounded in its mission, values and responsibility to the communities it serves.",
    img: "/images/chairman.jpg",
  },
  {
    name: "Executive Director",
    role: "Executive Director",
    text: "Leads organizational operations, program delivery and partnerships while ensuring that our resources are translated into meaningful community impact.",
    img: "/images/story-community.jpg",
  },
];

const TEAM: {
  name: string;
  role: string;
  text: string;
  icon: IconName;
  img: string;
}[] = [
  {
    name: "Programs Director",
    role: "Education & Community Programs",
    text: "Oversees education, community development and relief initiatives across our program areas.",
    icon: "book",
    img: "/images/program-parho-pakistan.jpg",
  },
  {
    name: "Health Lead",
    role: "AT TUQA Clinic & Medical Camps",
    text: "Coordinates healthcare services, medical camps and screening initiatives for underserved communities.",
    icon: "heart",
    img: "/images/program-at-tuqa-clinic.jpg",
  },
  {
    name: "Women Empowerment Lead",
    role: "SALEEQA & Livelihood",
    text: "Leads skills development and livelihood initiatives designed to support sustainable family incomes.",
    icon: "star",
    img: "/images/program-saleeqa.jpg",
  },
  {
    name: "Finance & Compliance Officer",
    role: "Finance & Accountability",
    text: "Maintains financial controls, reporting and compliance to ensure responsible stewardship of donor funds.",
    icon: "doc",
    img: "/images/update-1.jpg",
  },
  {
    name: "Monitoring & Evaluation Lead",
    role: "Impact & Data",
    text: "Tracks program performance and outcomes to help the organization continuously improve its impact.",
    icon: "target",
    img: "/images/update-2.jpg",
  },
  {
    name: "Volunteer Coordinator",
    role: "Volunteers & Field Teams",
    text: "Builds and coordinates the volunteer network supporting Yaqeen's work across communities.",
    icon: "people",
    img: "/images/update-3.jpg",
  },
  {
    name: "Climate Action Lead",
    role: "MAHOL & Environment",
    text: "Coordinates plantation drives and environmental awareness initiatives across Karachi and Sindh.",
    icon: "leaf",
    img: "/images/program-mahol.jpg",
  },
  {
    name: "Communications Lead",
    role: "Media & Donor Relations",
    text: "Communicates our work, impact and community stories while keeping supporters connected to the mission.",
    icon: "mail",
    img: "/images/campaign-barkat-ramadan.jpg",
  },
];

const CULTURE = [
  {
    number: "01",
    icon: "heart" as const,
    title: "Dignity First",
    text: "We serve people with respect and compassion, focusing on partnership rather than dependency.",
  },
  {
    number: "02",
    icon: "check" as const,
    title: "Accountability",
    text: "We treat every contribution as an amanah and work to maintain high standards of transparency.",
  },
  {
    number: "03",
    icon: "people" as const,
    title: "Community Led",
    text: "We listen to communities, involve local people and build solutions around their real needs.",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Our Team"
        title="People who turn purpose into action"
        description="Behind every Yaqeen initiative is a team of people committed to serving communities with dignity, responsibility and compassion."
        crumb="Our Team"
      />

      {/* Leadership */}
      <section id="leadership" className="relative overflow-hidden py-20 sm:py-28">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionHead
              eyebrow="Leadership"
              title="Guided by purpose. Driven by responsibility."
              description="Our leadership provides the direction, accountability and values that shape Yaqeen's work."
              center
            />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {LEADERSHIP.map((member, index) => (
              <article
                key={member.role}
                className="group relative overflow-hidden rounded-3xl border border-sand bg-white shadow-[0_12px_40px_-24px_rgba(24,34,49,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-28px_rgba(24,34,49,0.4)]"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative h-72 w-full overflow-hidden sm:h-auto sm:min-h-[310px] sm:w-[42%]">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 42vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/50 via-transparent to-transparent" />

                    <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[11px] font-bold text-brand-900 shadow-sm">
                      0{index + 1}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-center p-7 sm:p-8">
                    <div className="mb-5 h-1 w-10 rounded-full bg-accent-500" />

                    <p className="mb-2 font-data text-[10.5px] font-bold uppercase tracking-[0.14em] text-accent-600">
                      {member.role}
                    </p>

                    <h3 className="text-[23px] font-bold tracking-tight text-ink sm:text-[26px]">
                      {member.name}
                    </h3>

                    <p className="mt-4 text-[14px] leading-7 text-slate-muted">
                      {member.text}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-700">
                      <span className="h-px w-6 bg-brand-200" />
                      Leadership
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Intro */}
      <section className="border-y border-sand bg-cream py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="font-data text-[11px] font-bold uppercase tracking-[0.14em] text-accent-600">
                One mission. Many disciplines.
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                A team built around community impact
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-muted">
                From classrooms and clinics to field operations and finance,
                our teams bring different skills together around one shared
                purpose — creating meaningful and sustainable change.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-sand bg-white px-6 py-5 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-900 text-accent-400">
                <Icon name="people" className="h-5 w-5" />
              </div>

              <div>
                <p className="text-[12px] font-semibold uppercase tracking-wide text-slate-muted">
                  Our focus
                </p>
                <p className="mt-0.5 text-[15px] font-bold text-ink">
                  Service with purpose
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Grid */}
      <section id="members" className="py-20 sm:py-28">
        <Container>
          <SectionHead
            eyebrow="Our People"
            title="The team behind the work"
            description="Professionals and field teams working across education, health, empowerment, relief, environment and organizational operations."
            center
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <article
                key={member.role}
                className="group overflow-hidden rounded-2xl border border-sand bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-[0_20px_50px_-28px_rgba(24,34,49,0.4)]"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-800 shadow-md">
                    <Icon name={member.icon} className="h-[17px] w-[17px]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="font-data text-[10px] font-bold uppercase tracking-[0.12em] text-accent-600">
                    {member.role}
                  </p>

                  <h3 className="mt-1.5 text-[16px] font-bold text-ink">
                    {member.name}
                  </h3>

                  <div className="my-4 h-px w-full bg-sand" />

                  <p className="text-[13px] leading-6 text-slate-muted">
                    {member.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section
        id="culture"
        className="relative overflow-hidden bg-brand-900 py-20 text-white sm:py-24"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="font-data text-[11px] font-bold uppercase tracking-[0.15em] text-accent-400">
                How We Work
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Values that guide every decision
              </h2>

              <p className="mt-5 max-w-md text-[14.5px] leading-7 text-white/65">
                Our work is not only measured by what we deliver, but by how
                we treat people, manage resources and build lasting trust.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {CULTURE.map((value) => (
                <article
                  key={value.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition-colors duration-300 hover:bg-white/[0.09]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-400/10 text-accent-400">
                      <Icon name={value.icon} className="h-5 w-5" />
                    </div>

                    <span className="font-data text-[11px] font-bold text-white/30">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-[16px] font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-6 text-white/60">
                    {value.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-cream px-7 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-900/[0.04]" />
            <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-accent-500/[0.06]" />

            <div className="relative">
              <p className="font-data text-[11px] font-bold uppercase tracking-[0.15em] text-accent-600">
                Be Part of the Mission
              </p>

              <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Your time, skills and support can make a difference
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-slate-muted">
                Whether you want to volunteer, collaborate or support our
                programs, there is a place for you in the Yaqeen mission.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button href="/volunteer" variant="accent">
                  Volunteer With Us
                </Button>

                <Button href="/contact" variant="outlineNavy">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

