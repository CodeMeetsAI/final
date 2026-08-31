import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import SectionHead from "@/components/SectionHead";
import StoryGrid from "@/components/StoryGrid";
import HelpGrid from "@/components/HelpGrid";
import Counter from "@/components/Counter";
import Icon, { IconName } from "@/components/Icon";

export const metadata = {
  title: "Yaqeen Welfare Foundation | Education, Health & Dignity Across Pakistan",
  description:
    "Yaqeen Welfare Foundation improves lives across Pakistan through education, healthcare, women empowerment, environmental action and community relief. Registered NGO since 2015.",
};

/* ==========================================================================
   DATA
   ========================================================================== */

const WORK_CARDS = [
  {
    icon: "book" as IconName,
    number: "01",
    title: "Education",
    text: "Parho Pakistan — formal & non-formal schooling, ROSHNI literacy and vocational training.",
    href: "/parho-pakistan",
    tint: "from-amber-50/80",
    bar: "from-amber-400 to-orange-500",
    chip: "from-amber-400 to-orange-500",
    link: "text-orange-600 hover:text-orange-700",
  },
  {
    icon: "heart" as IconName,
    number: "02",
    title: "Health",
    text: "AT TUQA clinics, Malir Public School clinic, medical camps and health screening drives.",
    href: "/at-tuqa-clinic",
    tint: "from-rose-50/80",
    bar: "from-rose-400 to-red-500",
    chip: "from-rose-400 to-red-500",
    link: "text-rose-600 hover:text-rose-700",
  },
  {
    icon: "people" as IconName,
    number: "03",
    title: "Women Empowerment",
    text: "SALEEQA vocational training, livelihood and skills development for women.",
    href: "/saleeqa",
    tint: "from-violet-50/80",
    bar: "from-violet-400 to-purple-600",
    chip: "from-violet-400 to-purple-600",
    link: "text-violet-600 hover:text-violet-700",
  },
  {
    icon: "home" as IconName,
    number: "04",
    title: "Community Support",
    text: "FALAH relief, food & ration support, orphan sponsorship and emergency response.",
    href: "/falah",
    tint: "from-sky-50/80",
    bar: "from-sky-400 to-blue-600",
    chip: "from-sky-400 to-blue-600",
    link: "text-sky-600 hover:text-sky-700",
  },
  {
    icon: "leaf" as IconName,
    number: "05",
    title: "Environment",
    text: "MAHOL plantation drives, climate awareness and community sustainability.",
    href: "/mahol",
    tint: "from-emerald-50/80",
    bar: "from-emerald-400 to-green-600",
    chip: "from-emerald-400 to-green-600",
    link: "text-emerald-600 hover:text-emerald-700",
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
  {
    title: "Sponsor a Child",
    amount: "Rs. 5000",
    text: "Covers tuition, books and uniform for one child for a full month.",
    href: "/sponsor-child",
    icon: "star" as IconName,
    tone: "amber" as const,
  },
  {
    title: "Support Healthcare",
    amount: "Rs. 6,000",
    text: "Funds a free medical camp consultation package for 10 patients.",
    href: "/donate",
    icon: "heart" as IconName,
    tone: "rose" as const,
  },
  {
    title: "Empower Women",
    amount: "Rs. 8,000",
    text: "Sponsors a full SALEEQA vocational training course for one woman.",
    href: "/saleeqa",
    icon: "people" as IconName,
    tone: "violet" as const,
  },
  {
    title: "Emergency Relief",
    amount: "Rs. 7,000",
    text: "Provides a ration pack and clean water kit for one family in crisis.",
    href: "/donate",
    icon: "home" as IconName,
    tone: "sky" as const,
  },
];

const TRUST_ITEMS = [
  {
    icon: "check" as IconName,
    title: "Registered Organization",
    text: "Fully registered under Pakistani NGO law with active compliance filings.",
    color: "bg-gradient-to-br from-sky-400 to-blue-600",
  },
  {
    icon: "doc" as IconName,
    title: "Transparent Governance",
    text: "An independent board and defined policies oversee every program decision.",
    color: "bg-gradient-to-br from-emerald-400 to-green-600",
  },
  {
    icon: "target" as IconName,
    title: "Annual Reports",
    text: "Audited financials and program reports published every year.",
    color: "bg-gradient-to-br from-amber-400 to-orange-500",
  },
  {
    icon: "star" as IconName,
    title: "Responsible Donations",
    text: "Clear cost-per-beneficiary tracking on every active campaign.",
    color: "bg-gradient-to-br from-violet-400 to-purple-600",
  },
  {
    icon: "people" as IconName,
    title: "Community Partnerships",
    text: "Working alongside AT TUQA, Malir Public School and local bodies.",
    color: "bg-gradient-to-br from-rose-400 to-red-500",
  },
  {
    icon: "heart" as IconName,
    title: "Measurable Impact",
    text: "Every program tracked against clear, published outcome indicators.",
    color: "bg-gradient-to-br from-brand-500 to-brand-800",
  },
];

const UPDATES = [
  {
    src: "/images/program-roshni.jpg",
    alt: "Ribbon-cutting for a new ROSHNI learning centre",
    cat: "News",
    title: "New ROSHNI Centre Opens in Malir",
    date: "July 2, 2026",
  },
  {
    src: "/images/quarbani.webp",
    alt: "Volunteers preparing for the Qurbani campaign",
    cat: "Campaign",
    title: "Qurbani 2026 Registrations Now Open",
    date: "June 28, 2026",
  },
  {
    src: "/images/update-3.jpg",
    alt: "A free medical camp held in a rural community",
    cat: "Event",
    title: "Free Medical Camp Reaches 600 Patients",
    date: "June 15, 2026",
  },
];

/* ==========================================================================
   PAGE
   ========================================================================== */

export default function HomePage() {
  return (
    <main className="overflow-hidden">

      {/* ================================================================== */}
      {/* HERO                                                               */}
      {/* ================================================================== */}

      <section className="relative bg-brand-900 text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-3xl" />

          <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-accent-500/[0.08] blur-3xl" />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
        </div>

        <Container className="relative z-10 grid min-h-[720px] grid-cols-1 items-center gap-14 py-16 lg:grid-cols-[1.03fr_0.97fr] lg:py-20">

          <div className="reveal max-w-2xl text-center lg:text-left">
            <Eyebrow onDark>
              Registered NGO · Serving communities since 2015
            </Eyebrow>

            <h1 className="mt-6 text-[38px] font-bold leading-[1.06] tracking-[-0.035em] sm:text-[50px] lg:text-[60px]">
              Creating opportunities.
              <span className="block text-accent-400">
                Restoring dignity.
              </span>
              Transforming communities.
            </h1>

            <p className="mx-auto mt-7 max-w-[590px] text-[16px] leading-7 text-white/72 sm:text-[17px] lg:mx-0">
              Yaqeen Welfare Foundation works across education, healthcare,
              women empowerment, environmental sustainability and community
              development to help people build more secure futures.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3.5 lg:justify-start">
              <Button href="/donate" variant="accent">
                Donate Now
              </Button>

              <Button href="#our-work" variant="outlineWhite">
                Explore Our Work
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[12px] text-white/55 lg:justify-start">

              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                  <Icon name={"check" as IconName} className="h-3 w-3 text-accent-400" />
                </span>
                Registered organization
              </span>

              <span className="hidden h-4 w-px bg-white/15 sm:block" />

              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                  <Icon name={"doc" as IconName} className="h-3 w-3 text-accent-400" />
                </span>
                Annual reporting
              </span>

              <span className="hidden h-4 w-px bg-white/15 sm:block" />

              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                  <Icon name={"people" as IconName} className="h-3 w-3 text-accent-400" />
                </span>
                Community focused
              </span>
            </div>

            <div className="mt-12 grid max-w-[560px] grid-cols-3 border-t border-white/10 pt-7">

              <div className="pr-4">
                <strong className="font-display text-2xl text-accent-400 sm:text-3xl">
                  50K+
                </strong>

                <span className="mt-1 block text-[11px] leading-4 text-white/50">
                  Lives Impacted
                </span>
              </div>

              <div className="border-l border-white/10 px-4">
                <strong className="font-display text-2xl text-accent-400 sm:text-3xl">
                  120+
                </strong>

                <span className="mt-1 block text-[11px] leading-4 text-white/50">
                  Communities
                </span>
              </div>

              <div className="border-l border-white/10 pl-4">
                <strong className="font-display text-2xl text-accent-400 sm:text-3xl">
                  11
                </strong>

                <span className="mt-1 block text-[11px] leading-4 text-white/50">
                  Years of Service
                </span>
              </div>

            </div>
          </div>

          <div className="reveal relative mx-auto w-full max-w-[570px] lg:mx-0 lg:ml-auto">

            <div className="relative aspect-[4/5] overflow-hidden rounded-[180px_180px_24px_24px] border border-white/10 bg-brand-800 shadow-[0_40px_100px_-35px_rgba(0,0,0,0.7)]">

              <Image
                src="/images/herosection1.jpg"
                alt="A Yaqeen Welfare Foundation field team member with schoolchildren in Sindh, Pakistan"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 48vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/75 via-transparent to-brand-900/5" />

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="max-w-[330px]">

                  <p className="font-data text-[10px] font-bold uppercase tracking-[0.14em] text-accent-400">
                    Our Approach
                  </p>

                  <p className="mt-2 text-[18px] font-semibold leading-6 text-white">
                    Long-term change starts with people, trust and opportunity.
                  </p>

                </div>
              </div>

            </div>

            <div className="absolute -bottom-6 left-4 right-4 z-20 rounded-2xl border border-sand bg-white p-4 text-ink shadow-[0_25px_60px_-25px_rgba(0,0,0,0.45)] sm:left-auto sm:right-[-20px] sm:w-[280px]">

              <div className="flex items-center gap-3">

                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-cream">
                  <Icon
                    name={"doc" as IconName}
                    className="h-5 w-5 text-brand-700"
                  />
                </span>

                <div>
                  <strong className="block text-[13.5px] font-bold">
                    Financial Transparency
                  </strong>

                  <span className="mt-0.5 block text-[11.5px] leading-4 text-slate-muted">
                    Annual reports published every year
                  </span>
                </div>

              </div>
            </div>

          </div>
        </Container>

        <div className="relative z-10 hidden justify-center pb-8 pt-2 md:flex">
          <div className="flex flex-col items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
            <span>Scroll to explore</span>
            <span className="h-7 w-px bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </div>

      </section>

      {/* ================================================================== */}
      {/* CAMPAIGN BAR                                                       */}
      {/* ================================================================== */}

      <section className="bg-accent-500 text-brand-900">
        <Container className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-start gap-3 sm:items-center">

            <span className="mt-0.5 flex-shrink-0 rounded-full bg-brand-900 px-3 py-1.5 font-data text-[9px] font-bold uppercase tracking-[0.1em] text-white sm:mt-0">
              Featured
            </span>

            <div>
              <strong className="block text-[14px] font-bold sm:inline sm:text-[15px]">
                BARKAT Ramadan Campaign 2026
              </strong>

              <span className="mt-0.5 block text-[12px] opacity-75 sm:ml-2 sm:inline">
                Rations, Iftar &amp; Zakat distribution for 8,000 families
              </span>
            </div>

          </div>

          <Button href="/barkat-ramadan" variant="navy" small>
            Contribute Now
          </Button>

        </Container>
      </section>

      {/* ================================================================== */}
      {/* WHO WE ARE                                                         */}
      {/* ================================================================== */}

      <section id="about" className="bg-cream py-20 sm:py-28">

        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          <div className="reveal relative">

            <div className="relative overflow-hidden rounded-3xl">

              <Image
                src="/images/whoweare.jpg"
                alt="Yaqeen Welfare Foundation community health session in progress"
                width={700}
                height={820}
                className="aspect-[4/4.6] w-full object-cover"
              />

            </div>

            <div className="absolute -bottom-5 right-5 rounded-2xl border border-white/10 bg-brand-900 px-6 py-5 text-white shadow-soft sm:right-8">

              <strong className="block font-display text-3xl text-accent-400">
                2015
              </strong>

              <span className="mt-1 block font-data text-[10px] uppercase tracking-[0.08em] text-white/55">
                Founded &amp; Registered
              </span>

            </div>

          </div>

          <div className="reveal">

            <Eyebrow>Who We Are</Eyebrow>

            <h2 className="mt-4 max-w-[680px] text-[30px] font-bold leading-[1.12] tracking-tight text-ink sm:text-[40px]">
              A community-driven foundation working where the need is greatest.
            </h2>

            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-slate-muted">
              Yaqeen Welfare Foundation is a registered Pakistani NGO built
              on one belief — that every person deserves a fair chance at
              education, health and dignity.
            </p>

            <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-slate-muted">
              From classrooms in Malir to relief camps after emergencies, our
              teams work directly inside the communities we serve.
            </p>

            <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2">

              {(
                [
                  ["check", "Registered NGO", "Fully compliant & audited"],
                  ["home", "Community Driven", "Locally rooted programs"],
                  ["target", "Mission Focused", "Measurable, lasting change"],
                  ["star", "Since 2015", "11 years of grassroots work"],
                ] satisfies [IconName, string, string][]
              ).map(([icon, title, sub]) => (

                <div key={title} className="flex items-start gap-3.5">

                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">

                    <Icon
                      name={icon}
                      className="h-[17px] w-[17px] text-brand-700"
                    />

                  </span>

                  <div>

                    <strong className="block text-[14px] font-bold text-ink">
                      {title}
                    </strong>

                    <span className="mt-0.5 block text-[12.5px] text-slate-muted">
                      {sub}
                    </span>

                  </div>

                </div>

              ))}

            </div>

            <div className="mt-9">
              <Button href="/about" variant="outlineNavy">
                Learn More About Us
              </Button>
            </div>

          </div>

        </Container>

      </section>

      {/* ================================================================== */}
      {/* OUR WORK                                                           */}
      {/* ================================================================== */}

      <section id="our-work" className="py-20 sm:py-28">

        <Container>

          <SectionHead
            eyebrow="Our Work"
            title="Five pillars of change. One shared purpose."
            description="Every program is designed to address a real, immediate need — and to build toward long-term self-reliance."
            center
          />

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {WORK_CARDS.map((card) => (

              <article
                key={card.title}
                className={`reveal group relative overflow-hidden rounded-2xl border border-sand bg-gradient-to-b ${card.tint} to-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft`}
              >

                <span
                  className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${card.bar}`}
                />

                <div className="flex items-start justify-between">

                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.chip} text-white shadow-[0_10px_20px_-8px_rgba(24,34,49,0.4)] transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon name={card.icon} className="h-5 w-5" />
                  </span>

                  <span className="font-data text-[11px] font-bold text-slate-muted/50">
                    {card.number}
                  </span>

                </div>

                <h3 className="mt-7 text-[18px] font-bold text-ink">
                  {card.title}
                </h3>

                <p className="mt-3 min-h-[70px] text-[13.5px] leading-6 text-slate-muted">
                  {card.text}
                </p>

                <div className="mt-6">

                  <a
                    href={card.href}
                    className={`group/link inline-flex items-center gap-1.5 text-[12.5px] font-bold ${card.link}`}
                  >
                    <span>Learn More</span>

                    <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>

                </div>

              </article>

            ))}

          </div>

        </Container>

      </section>

      {/* ================================================================== */}
      {/* FLAGSHIP PROGRAM                                                   */}
      {/* ================================================================== */}

      <section className="relative overflow-hidden bg-brand-900 py-20 text-white sm:py-28">

        <div className="pointer-events-none absolute right-[-220px] top-[-250px] h-[600px] w-[600px] rounded-full bg-accent-500/[0.09] blur-2xl" />

        <Container className="relative z-10 grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">

          <div className="reveal overflow-hidden rounded-[120px_24px_24px_24px]">

            <Image
              src="/images/flagship-education.jpg"
              alt="Students attending a Parho Pakistan Program classroom session"
              width={800}
              height={520}
              className="aspect-[1.4/1] w-full object-cover"
            />

          </div>

          <div className="reveal">

            <Eyebrow onDark>Flagship Program</Eyebrow>

            <h2 className="mt-4 text-[32px] font-bold tracking-tight sm:text-[42px]">
              Parho Pakistan
            </h2>

            <p className="mt-5 max-w-[570px] text-[15px] leading-7 text-white/70">
              Our largest and longest-running initiative — bringing formal and
              non-formal education, literacy support, and vocational training
              to underserved children and youth across Sindh.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-2.5 sm:gap-4">

              {[
                ["18,000+", "Students Enrolled"],
                ["64", "Learning Centres"],
                ["92%", "Retention Rate"],
              ].map(([number, label]) => (

                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/[0.045] p-4"
                >

                  <strong className="block font-display text-[20px] text-accent-400 sm:text-[25px]">
                    {number}
                  </strong>

                  <span className="mt-1 block text-[10px] leading-4 text-white/45 sm:text-[11px]">
                    {label}
                  </span>

                </div>

              ))}

            </div>

            <div className="mt-8">
              <Button href="/parho-pakistan" variant="accent">
                Explore Parho Pakistan
              </Button>
            </div>

          </div>

        </Container>

      </section>

      {/* ================================================================== */}
      {/* IMPACT                                                             */}
      {/* ================================================================== */}

      <section id="impact" className="bg-[#F4F5F3] py-20 sm:py-28">

        <Container>

          <div className="flex flex-col gap-5 border-b border-sand pb-8 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <Eyebrow>Impact At A Glance</Eyebrow>

              <h2 className="mt-3 max-w-[600px] text-[29px] font-bold tracking-tight text-ink sm:text-[38px]">
                Numbers that represent real people and communities.
              </h2>

            </div>

            <span className="font-data text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-muted">
              FY 2025–26 · Since 2015
            </span>

          </div>

          <div className="mt-8 grid grid-cols-2 overflow-hidden rounded-2xl border border-brand-800/10 bg-brand-900 sm:grid-cols-4">

            {IMPACT_STATS.map((stat, index) => (

              <div
                key={stat.label}
                className={`relative px-5 py-8 text-center sm:px-6 sm:py-10 ${
                  index % 4 !== 0 ? "border-l border-white/10" : ""
                } ${
                  index >= 4 ? "border-t border-white/10" : ""
                }`}
              >

                <Counter
                  target={stat.target}
                  label={stat.label}
                  suffix={stat.target >= 100 ? "+" : ""}
                />

              </div>

            ))}

          </div>

        </Container>

      </section>

      {/* ================================================================== */}
      {/* STORIES                                                            */}
      {/* ================================================================== */}

      <section id="stories" className="py-20 sm:py-28">

        <Container>

          <SectionHead
            eyebrow="Real Lives, Real Change"
            title="Stories from the communities we walk alongside."
            center
          />

          <div className="mt-12">
            <StoryGrid items={STORIES} />
          </div>

        </Container>

      </section>

      {/* ================================================================== */}
      {/* GET INVOLVED                                                       */}
      {/* ================================================================== */}

      <section id="get-involved" className="bg-cream py-20 sm:py-28">

        <Container>

          <SectionHead
            eyebrow="Get Involved"
            title="There are many ways to make a difference."
            description="Choose where your support can create the most meaningful impact."
            center
          />

          <div className="mt-12">
            <HelpGrid items={HELP_ITEMS} />
          </div>

        </Container>

      </section>

      {/* ================================================================== */}
      {/* TRUST                                                              */}
      {/* ================================================================== */}

      <section className="py-20 sm:py-28">

        <Container>

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

            <div>

              <Eyebrow>Why Trust Yaqeen</Eyebrow>

              <h2 className="mt-4 text-[30px] font-bold leading-[1.12] tracking-tight text-ink sm:text-[40px]">
                Transparency isn't a promise. It's a practice.
              </h2>

              <p className="mt-5 max-w-[430px] text-[14.5px] leading-7 text-slate-muted">
                We believe trust is earned through responsible governance,
                clear reporting and measurable outcomes.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <Button href="/annual-reports" variant="navy">
                  View Reports
                </Button>

                <Button href="/about#governance" variant="outlineNavy">
                  Governance
                </Button>

              </div>

            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              {TRUST_ITEMS.map((item) => (

                <article
                  key={item.title}
                  className="group flex gap-4 rounded-2xl border border-sand bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >

                  <span
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${item.color} text-white shadow-sm transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon name={item.icon} className="h-[18px] w-[18px]" />
                  </span>

                  <div>

                    <h3 className="text-[14px] font-bold text-ink">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-[12.5px] leading-5.5 text-slate-muted">
                      {item.text}
                    </p>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </Container>

      </section>

      {/* ================================================================== */}
      {/* PARTNERS                                                           */}
      {/* ================================================================== */}

      <section className="border-y border-sand bg-[#F4F5F3] py-16 sm:py-20">

        <Container>

          <div className="text-center">

            <Eyebrow>Partners &amp; Collaborations</Eyebrow>

            <h2 className="mt-3 text-[25px] font-bold tracking-tight text-ink sm:text-[32px]">
              Working together for greater impact.
            </h2>

          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">

            {[
              "AT TUQA",
              "Malir Public School",
              "Sindh Education Dept.",
              "Community Health Alliance",
              "Green Karachi Initiative",
            ].map((name) => (

              <div
                key={name}
                className="rounded-xl border border-sand bg-white px-5 py-3.5 font-display text-[13px] font-bold text-slate-muted shadow-sm transition-colors hover:text-brand-800"
              >
                {name}
              </div>

            ))}

          </div>

        </Container>

      </section>

      {/* ================================================================== */}
      {/* LATEST UPDATES                                                     */}
      {/* ================================================================== */}

      <section id="updates" className="py-20 sm:py-28">

        <Container>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <Eyebrow>Media &amp; Updates</Eyebrow>

              <h2 className="mt-3 text-[30px] font-bold tracking-tight text-ink sm:text-[38px]">
                Latest from the field.
              </h2>

            </div>

            <a
              href="/updates"
              className="group inline-flex items-center gap-1.5 text-[12.5px] font-bold text-brand-700 hover:text-accent-600"
            >
              View all updates

              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">

            {UPDATES.map((update) => (

              <article
                key={update.title}
                className="group overflow-hidden rounded-2xl border border-sand bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >

                <div className="relative aspect-[16/10] overflow-hidden">

                  <Image
                    src={update.src}
                    alt={update.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 font-data text-[9px] font-bold uppercase tracking-[0.08em] text-brand-800 shadow-sm">
                    {update.cat}
                  </span>

                </div>

                <div className="p-6">

                  <time className="font-data text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-muted">
                    {update.date}
                  </time>

                  <h3 className="mt-2.5 text-[17px] font-bold leading-6 text-ink">
                    {update.title}
                  </h3>

                  <a
                    href="/updates"
                    className="group/link mt-5 inline-flex items-center gap-1.5 text-[12px] font-bold text-brand-700 hover:text-accent-600"
                  >
                    Read update

                    <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>

                </div>

              </article>

            ))}

          </div>

        </Container>

      </section>

      {/* ================================================================== */}
      {/* FINAL CTA                                                           */}
      {/* ================================================================== */}

      <section className="px-4 pb-16 sm:px-6 sm:pb-24">

        <Container>

          <div className="relative overflow-hidden rounded-[28px] bg-brand-900 px-7 py-14 text-center text-white sm:px-12 sm:py-20">

            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-500/[0.1] blur-2xl" />

            <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-white/[0.025] blur-2xl" />

            <div className="relative z-10 mx-auto max-w-2xl">

              <Eyebrow onDark>Make an Impact</Eyebrow>

              <h2 className="mt-4 text-[30px] font-bold leading-[1.1] tracking-tight sm:text-[42px]">
                Help build a future where opportunity is within reach.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-[14.5px] leading-7 text-white/65 sm:text-[15px]">
                Your support helps us expand access to education, healthcare,
                livelihood opportunities and essential relief for communities
                that need it most.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">

                <Button href="/donate" variant="accent">
                  Donate Now
                </Button>

                <Button href="/volunteer" variant="outlineWhite">
                  Volunteer With Us
                </Button>

              </div>

            </div>

          </div>

        </Container>

      </section>

    </main>
  );
}

