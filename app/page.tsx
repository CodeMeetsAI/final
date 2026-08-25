import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import SectionHead from "@/components/SectionHead";
import ValueGrid from "@/components/ValueGrid";
import StoryGrid from "@/components/StoryGrid";
import HelpGrid from "@/components/HelpGrid";
import Counter from "@/components/Counter";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Yaqeen Welfare Foundation | Education, Health & Dignity Across Pakistan",
  description:
    "Yaqeen Welfare Foundation improves lives across Pakistan through education, healthcare, women empowerment, environmental action and community relief. Registered NGO since 2015.",
};

const WORK_CARDS = [
  {
    icon: "book" as const,
    title: "Education",
    text: "Parho Pakistan — formal & non-formal schooling, ROSHNI literacy and vocational training.",
    href: "/parho-pakistan",
  },
  {
    icon: "heart" as const,
    title: "Health",
    text: "AT TUQA clinics, Malir Public School clinic, medical camps and health screening drives.",
    href: "/at-tuqa-clinic",
  },
  {
    icon: "people" as const,
    title: "Women Empowerment",
    text: "SALEEQA vocational training, livelihood and skills development for women.",
    href: "/saleeqa",
  },
  {
    icon: "home" as const,
    title: "Community Support",
    text: "FALAH relief, food & ration support, orphan sponsorship and emergency response.",
    href: "/falah",
  },
  {
    icon: "leaf" as const,
    title: "Environment",
    text: "MAHOL plantation drives, climate awareness and community sustainability.",
    href: "/mahol",
  },
];

const IMPACT_STATS = [
  { target: 18400, label: "Students Supported" },
  { target: 27600, label: "Patients Served" },
  { target: 9200, label: "Families Assisted" },
  { target: 4100, label: "Women Empowered" },
  { target: 310, label: "Medical Camps Held" },
  { target: 1850, label: "Active Volunteers" },
  { target: 120, label: "Communities Reached" },
  { target: 11, label: "Years of Service" },
];

const STORIES = [
  {
    src: "/images/ayeshaclass.jpg",
    alt: "Ayesha, a student supported by the Parho Pakistan program",
    tag: "Education",
    title: "Ayesha's Classroom, Rebuilt",
    text: "Out of school for two years, Ayesha rejoined through a Parho Pakistan non-formal learning centre and now leads her class in reading.",
  },
  {
    src: "/images/story-community.jpg",
    alt: "Rukhsana, a graduate of the SALEEQA vocational training program",
    tag: "Women Empowerment",
    title: "Rukhsana's Stitching Business",
    text: "A SALEEQA vocational training graduate, Rukhsana now runs a home-based tailoring unit supporting her family of five.",
  },
  {
    src: "/images/herosection1.jpg",
    alt: "A family that received emergency relief support",
    tag: "Community Support",
    title: "A Family, Steadied by FALAH",
    text: "After losing their income to flooding, the Qureshi family received ration support and school sponsorship through FALAH.",
  },
];

const HELP_ITEMS = [
  { title: "Sponsor a Child", amount: "Rs. 2,500 / mo", text: "Covers tuition, books and uniform for one child for a full month.", href: "/sponsor-child" },
  { title: "Support Healthcare", amount: "Rs. 5,000", text: "Funds a free medical camp consultation package for 10 patients.", href: "/donate" },
  { title: "Empower Women", amount: "Rs. 8,000", text: "Sponsors a full SALEEQA vocational training course for one woman.", href: "/saleeqa" },
  { title: "Emergency Relief", amount: "Rs. 3,000", text: "Provides a ration pack and clean water kit for one family in crisis.", href: "/donate" },
];

const TRUST_ITEMS = [
  { icon: "check" as const, title: "Registered Organization", text: "Fully registered under Pakistani NGO law with active compliance filings." },
  { icon: "doc" as const, title: "Transparent Governance", text: "An independent board and defined policies oversee every program decision." },
  { icon: "target" as const, title: "Annual Reports", text: "Audited financials and program reports published every year." },
  { icon: "star" as const, title: "Responsible Use of Donations", text: "Clear cost-per-beneficiary tracking on every active campaign." },
  { icon: "people" as const, title: "Community Partnerships", text: "Working alongside AT TUQA, Malir Public School and local bodies." },
  { icon: "heart" as const, title: "Measurable Impact", text: "Every program tracked against clear, published outcome indicators." },
];

const UPDATES = [
  { src: "/images/program-roshni.jpg", alt: "Ribbon-cutting for a new ROSHNI learning centre", cat: "News", title: "New ROSHNI Centre Opens in Malir", date: "July 2, 2026" },
  { src: "/images/quarbani.webp", alt: "Volunteers preparing for the Qurbani campaign", cat: "Campaign", title: "Qurbani 2026 Registrations Now Open", date: "June 28, 2026" },
  { src: "/images/update-3.jpg", alt: "A free medical camp held in a rural community", cat: "Event", title: "Free Medical Camp Reaches 600 Patients", date: "June 15, 2026" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-900 via-brand-800 to-brand-600 pt-8 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_88%_78%,rgba(245,146,15,0.14),transparent_45%)]" />
        <Container className="relative z-10 grid grid-cols-1 items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="reveal text-center lg:text-left">
            <Eyebrow onDark>Registered NGO · Since 2015</Eyebrow>
            <h1 className="mb-5 text-[34px] font-bold leading-[1.1] tracking-tight sm:text-[46px] lg:text-[54px]">
              Creating Opportunities. Restoring Dignity. Transforming Communities.
            </h1>
            <p className="mx-auto mb-8 max-w-[520px] text-[17px] text-white/80 lg:mx-0">
              Yaqeen Welfare Foundation is committed to improving lives through education,
              healthcare, women empowerment, environmental sustainability, and community
              development across Pakistan.
            </p>
            <div className="mb-11 flex flex-wrap justify-center gap-3.5 lg:justify-start">
              <Button href="/donate" variant="accent">
                Donate Now
              </Button>
              <Button href="#our-work" variant="outlineWhite">
                Explore Our Work
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-7 lg:justify-start">
              {[
                ["50,000+", "Lives Impacted"],
                ["120+", "Communities Reached"],
                ["11 Years", "Of Continuous Service"],
              ].map(([n, l]) => (
                <div key={l} className="flex flex-col">
                  <strong className="font-display text-2xl text-accent-400">{n}</strong>
                  <span className="font-data text-xs text-white/65">{l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal relative h-[340px] lg:h-[520px]">
            <div className="absolute inset-0 overflow-hidden rounded-[220px_220px_20px_20px] border-4 border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.45)]">
              <Image
                src="/images/herosection1.jpg"
                alt="A Yaqeen Welfare Foundation field team member with schoolchildren in Sindh, Pakistan"
                width={800}
                height={1000}
                priority
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-900/55" />
            </div>
            <div className="absolute -bottom-5 left-1/2 z-10 flex max-w-[230px] -translate-x-1/2 items-center gap-3 rounded-2xl bg-white px-5 py-4 text-ink shadow-soft lg:-bottom-6 lg:-left-6 lg:translate-x-0">
              <span className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full bg-cream">
                <Icon name="doc" className="h-5 w-5 text-brand-700" />
              </span>
              <div>
                <strong className="block text-[14.5px] font-bold">Financial Transparency</strong>
                <span className="text-xs text-slate-muted">Annual reports published every year</span>
              </div>
            </div>
          </div>
        </Container>
        <div className="flex flex-col items-center gap-2 pb-9 pt-7 font-data text-[11px] uppercase tracking-[0.1em] text-white/55">
          <span>Scroll</span>
          <span className="h-[34px] w-px animate-scroll-pulse bg-gradient-to-b from-white/70 to-transparent" />
        </div>
      </section>

      {/* Featured campaign strip */}
      <div className="bg-accent-500 text-brand-900">
        <Container className="flex flex-wrap items-center justify-between gap-4 py-4">
          <div className="flex items-center gap-3.5">
            <span className="rounded-full bg-brand-900 px-3 py-1.5 font-data text-[11px] font-bold uppercase tracking-[0.08em] text-white">
              Featured Campaign
            </span>
            <strong className="font-display text-[16.5px]">BARKAT Ramadan Campaign 2026</strong>
            <span className="text-[13.5px] opacity-85">
              — Rations, Iftar &amp; Zakat distribution for 8,000 families
            </span>
          </div>
          <Button href="/barkat-ramadan" variant="navy" small>
            Contribute Now
          </Button>
        </Container>
      </div>

      {/* Who we are */}
      <section className="bg-cream py-20 sm:py-24" id="about">
        <Container className="grid grid-cols-1 items-center gap-16 md:grid-cols-[0.85fr_1.15fr]">
          <div className="reveal relative">
            <div className="overflow-hidden rounded-[20px] shadow-card">
              <Image
                src="/images/whoweare.jpg"
                alt="Yaqeen Welfare Foundation community health session in progress"
                width={700}
                height={820}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-4 rounded-2xl bg-brand-800 px-5 py-4 text-white shadow-soft sm:right-6">
              <strong className="block font-display text-[28px] text-accent-400">2015</strong>
              <span className="font-data text-xs">Founded &amp; Registered</span>
            </div>
          </div>
          <div className="reveal">
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="text-[26px] font-bold leading-tight text-ink sm:text-[34px]">
              A community-driven foundation working where the need is greatest
            </h2>
            <p className="mt-4 max-w-[520px] text-[15.5px] text-slate-muted">
              Yaqeen Welfare Foundation is a registered Pakistani NGO built on one belief — that
              every person deserves a fair chance at education, health, and dignity. From
              classrooms in Malir to relief camps after emergencies, our teams work directly
              inside the communities we serve.
            </p>
            <div className="my-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                ["check" as const, "Registered NGO", "Fully compliant & audited"],
                ["home" as const, "Community Driven", "Locally rooted programs"],
                ["target" as const, "Mission Focused", "Measurable, lasting change"],
                ["star" as const, "Since 2015", "11 years of grassroots work"],
              ].map(([icon, title, sub]) => (
                <div key={title as string} className="flex items-start gap-3">
                  <span className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full bg-sand">
                    <Icon name={icon as any} className="h-4 w-4 text-brand-700" />
                  </span>
                  <div>
                    <strong className="block text-[14.5px] font-bold">{title}</strong>
                    <span className="text-[13px] text-slate-muted">{sub}</span>
                  </div>
                </div>
              ))}
            </div>
            <Button href="/about" variant="outlineNavy">
              Learn More About Us
            </Button>
          </div>
        </Container>
      </section>

      {/* Our Work */}
      <section className="py-20 sm:py-24" id="our-work">
        <Container>
          <SectionHead
            eyebrow="Our Work"
            title="Five pillars of change, one shared purpose"
            description="Every program is designed to address a real, immediate need — and to build toward long-term self-reliance."
            center
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {WORK_CARDS.map((card) => (
              <div
                key={card.title}
                className="reveal group relative overflow-hidden rounded-[20px_20px_14px_14px] border border-sand bg-white p-7 shadow-card transition-all hover:-translate-y-2 hover:shadow-soft"
              >
                <span className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-700 to-accent-500 transition-transform duration-300 group-hover:scale-x-100" />
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-cream">
                  <Icon name={card.icon} className="h-6 w-6 text-brand-700" />
                </span>
                <h3 className="mb-2.5 text-[17px] font-bold text-ink">{card.title}</h3>
                <p className="mb-4 text-[13.8px] text-slate-muted">{card.text}</p>
                <Button href={card.href} variant="outlineNavy" small className="border-0 !p-0 !text-brand-700 hover:!bg-transparent hover:!text-accent-600">
                  Learn More →
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Flagship program */}
      <section className="relative overflow-hidden bg-brand-900 py-20 text-white sm:py-24">
        <div className="pointer-events-none absolute -right-40 -top-44 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(245,146,15,0.15),transparent_70%)]" />
        <Container className="relative z-10 grid grid-cols-1 items-center gap-14 md:grid-cols-2">
          <div className="reveal overflow-hidden rounded-[220px_20px_20px_20px] shadow-soft">
            <Image
              src="/images/flagship-education.jpg"
              alt="Students attending a Parho Pakistan Program classroom session"
              width={800}
              height={420}
              className="h-[280px] w-full object-cover sm:h-[420px]"
            />
          </div>
          <div className="reveal">
            <Eyebrow onDark>Flagship Program</Eyebrow>
            <h2 className="text-[26px] font-bold text-white sm:text-[36px]">Parho Pakistan</h2>
            <p className="mt-4 text-[15.5px] text-white/80">
              Our largest and longest-running initiative — bringing formal and non-formal
              education, literacy support, and vocational training to underserved children and
              youth across Sindh.
            </p>
            <div className="my-7 grid grid-cols-3 gap-3.5">
              {[
                ["18,000+", "Students Enrolled"],
                ["64", "Learning Centres"],
                ["92%", "Retention Rate"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <strong className="block font-display text-[22px] text-accent-400">{n}</strong>
                  <span className="font-data text-[11.5px] text-white/65">{l}</span>
                </div>
              ))}
            </div>
            <Button href="/parho-pakistan" variant="accent">
              Explore Parho Pakistan
            </Button>
          </div>
        </Container>
      </section>

      {/* Impact at a glance */}
      <section className="bg-[#F4F5F3] py-20 sm:py-24" id="impact">
        <Container>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
            <div>
              <Eyebrow>Impact At A Glance</Eyebrow>
              <h2 className="text-[26px] font-bold text-ink sm:text-[34px]">
                Numbers that represent real families
              </h2>
            </div>
            <span className="font-data text-[13px] font-semibold text-slate-muted">
              FY 2025–26 · Since 2015
            </span>
          </div>
          <div className="reveal grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-sand bg-sand sm:grid-cols-4">
            {IMPACT_STATS.map((s) => (
              <div key={s.label} className="bg-brand-900 px-6 py-9 text-center">
                <Counter target={s.target} label={s.label} suffix={s.target >= 100 ? "+" : ""} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Real lives, real change */}
      <section className="py-20 sm:py-24" id="stories">
        <Container>
          <SectionHead
            eyebrow="Real Lives, Real Change"
            title="Stories from the communities we walk alongside"
            center
          />
          <StoryGrid items={STORIES} />
        </Container>
      </section>

      {/* Ways you can help */}
      <section className="bg-cream py-20 sm:py-24" id="get-involved">
        <Container>
          <SectionHead eyebrow="Get Involved" title="Ways you can help" center />
          <HelpGrid items={HELP_ITEMS} />
        </Container>
      </section>

      {/* Why trust Yaqeen */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHead
            eyebrow="Why Trust Yaqeen"
            title="Transparency isn't a promise — it's a practice"
            center
          />
          <div className="mb-9 grid grid-cols-1 gap-5 md:grid-cols-3">
            {TRUST_ITEMS.map((item) => (
              <div key={item.title} className="reveal flex gap-4 rounded-2xl border border-sand bg-white p-6">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-800">
                  <Icon name={item.icon} className="h-[19px] w-[19px] text-white" />
                </span>
                <div>
                  <h4 className="mb-1.5 text-[15px] font-bold text-ink">{item.title}</h4>
                  <p className="text-[13px] text-slate-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3.5">
            <Button href="/annual-reports" variant="navy">
              View Reports
            </Button>
            <Button href="/about#governance" variant="outlineNavy">
              Governance
            </Button>
          </div>
        </Container>
      </section>

      {/* Partners */}
      <section className="bg-[#F4F5F3] py-20 sm:py-24">
        <Container>
          <SectionHead
            eyebrow="Partners & Collaborations"
            title="Working Together for Greater Impact"
            center
          />
          <div className="reveal flex flex-wrap items-center justify-between gap-7 opacity-75">
            {["AT TUQA", "Malir Public School", "Sindh Education Dept.", "Community Health Alliance", "Green Karachi Initiative"].map(
              (name) => (
                <span
                  key={name}
                  className="rounded-lg border border-dashed border-sand px-5.5 py-3.5 font-display text-[15px] font-bold text-slate-muted"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </Container>
      </section>

      {/* Latest updates */}
      <section className="py-20 sm:py-24" id="updates">
        <Container>
          <SectionHead eyebrow="Media & Updates" title="Latest from the field" center />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {UPDATES.map((u) => (
              <div key={u.title} className="reveal overflow-hidden rounded-2xl border border-sand bg-white transition-shadow hover:shadow-card">
                <div className="h-[180px] overflow-hidden">
                  <Image
                    src={u.src}
                    alt={u.alt}
                    width={500}
                    height={380}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5.5">
                  <span className="font-data text-[11px] font-bold uppercase tracking-[0.06em] text-brand-700">
                    {u.cat}
                  </span>
                  <h3 className="my-2.5 text-[16px] font-bold text-ink">{u.title}</h3>
                  <span className="text-[12.5px] text-slate-muted">{u.date}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
