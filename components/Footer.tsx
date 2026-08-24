import Link from "next/link";
import Icon from "./Icon";
import Container from "./Container";
import Button from "./Button";

export default function Footer() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-800 to-brand-600 py-20 text-center text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,146,15,0.25),transparent_55%)]" />
        <Container className="relative z-10">
          <h2 className="mx-auto max-w-[760px] text-[28px] font-bold text-white sm:text-[38px]">
            Your Support Can Open the Door to Education, Health and Dignity.
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[16.5px] text-white/85">
            Every contribution — big or small — reaches a real family through a program built to
            last.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/donate" variant="accent">
              Donate Now
            </Button>
            <Button href="/contact" variant="outlineWhite">
              Partner With Us
            </Button>
          </div>
        </Container>
      </section>

      <footer className="bg-brand-900 text-white/75">
        <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <span className="font-display text-lg font-bold text-white">
              Yaqeen Welfare
              <span className="mt-0.5 block text-accent-400">Foundation</span>
            </span>
            <p className="mt-4 max-w-[280px] text-[13.8px] text-white/60">
              A registered Pakistani NGO working across education, health, women empowerment,
              community relief and climate action since 2015.
            </p>
            <div className="mt-5 flex gap-2.5">
              {(["facebook", "instagram", "youtube"] as const).map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent-500 hover:text-brand-900"
                >
                  <Icon name={s} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="mb-4 font-data text-[13px] font-semibold uppercase tracking-[0.05em] text-white">
              About
            </h5>
            {[
              ["/about", "Who We Are"],
              ["/about#story", "Our Story"],
              ["/about#governance", "Governance"],
              ["/about#legal", "Legal Status"],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="block py-1.5 text-[13.8px] hover:text-accent-400">
                {label}
              </Link>
            ))}
          </div>

          <div>
            <h5 className="mb-4 font-data text-[13px] font-semibold uppercase tracking-[0.05em] text-white">
              Our Work
            </h5>
            {[
              ["/parho-pakistan", "Education"],
              ["/at-tuqa-clinic", "Health"],
              ["/saleeqa", "Women Empowerment"],
              ["/falah", "Community Support"],
              ["/mahol", "Environment"],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="block py-1.5 text-[13.8px] hover:text-accent-400">
                {label}
              </Link>
            ))}
          </div>

          <div>
            <h5 className="mb-4 font-data text-[13px] font-semibold uppercase tracking-[0.05em] text-white">
              Transparency
            </h5>
            {[
              ["/annual-reports", "Annual Reports"],
              ["/financial-transparency", "Financial Transparency"],
              ["#", "Safeguarding Policy"],
              ["#", "Complaint Mechanism"],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="block py-1.5 text-[13.8px] hover:text-accent-400">
                {label}
              </Link>
            ))}
            <h5 className="mb-3 mt-6 font-data text-[13px] font-semibold uppercase tracking-[0.05em] text-white">
              Stay Updated
            </h5>
            <form
              action="#"
              className="flex overflow-hidden rounded-lg border border-white/20"
            >
              <input
                type="email"
                placeholder="Your email"
                required
                className="w-full bg-white/10 px-3.5 py-2.5 text-[13px] text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="whitespace-nowrap bg-accent-500 px-4 text-[13px] font-bold text-brand-900"
              >
                Join
              </button>
            </form>
          </div>
        </Container>

        <Container className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 py-6 text-[12.5px] text-white/50">
          <span>© 2026 Yaqeen Welfare Foundation. All rights reserved. Reg. No. NGO-PK-2015-0417.</span>
          <div className="flex flex-wrap gap-5">
            <a href="#" className="hover:text-accent-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent-400">
              Terms &amp; Conditions
            </a>
            <a href="#" className="hover:text-accent-400">
              Safeguarding Policy
            </a>
            <Link href="/contact" className="hover:text-accent-400">
              Contact Us
            </Link>
          </div>
        </Container>
      </footer>
    </>
  );
}
