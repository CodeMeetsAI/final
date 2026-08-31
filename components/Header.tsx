"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";

const EDUCATION = [
  { href: "/parho-pakistan", label: "Parho Pakistan Program" },
  { href: "/formal-education", label: "Formal Education" },
  { href: "/non-formal-education", label: "Non-Formal Education" },
  { href: "/roshni", label: "ROSHNI" },
  { href: "/vocational-training", label: "Vocational & Skills Training" },
];

const HEALTH_WOMEN = [
  { href: "/at-tuqa-clinic", label: "AT TUQA Health Clinic" },
  { href: "/medical-camps", label: "Medical Camps" },
  { href: "/health-screening", label: "Health Screening" },
  { href: "/saleeqa", label: "SALEEQA — Women Empowerment" },
  { href: "/livelihood-development", label: "Livelihood Development" },
];

const COMMUNITY_CLIMATE = [
  { href: "/falah", label: "FALAH — Relief Program" },
  { href: "/food-ration-support", label: "Food & Ration Support" },
  { href: "/orphan-family-support", label: "Orphan & Family Support" },
  { href: "/mahol", label: "MAHOL — Climate Action" },
  { href: "/plantation-drives", label: "Plantation Drives" },
];

const ABOUT_LINKS = [
  { href: "/about", label: "Who We Are" },
  { href: "/about#story", label: "Our Story" },
  { href: "/about#vmv", label: "Vision, Mission & Values" },
  { href: "/about#chairman", label: "Chairman's Message" },
  { href: "/team", label: "Our Team" },
  { href: "/about#governance", label: "Governance & Leadership" },
  { href: "/about#partners", label: "Partners & Collaborations" },
  { href: "/about#legal", label: "Legal Status & Registration" },
];

const IMPACT_LINKS = [
  { href: "/#impact", label: "Impact at a Glance" },
  { href: "/#stories", label: "Success Stories" },
  { href: "/beneficiary-stories", label: "Beneficiary Stories" },
  { href: "/annual-reports", label: "Annual Reports" },
  { href: "/financial-transparency", label: "Financial Transparency" },
];

const GET_INVOLVED_LINKS = [
  { href: "/donate", label: "Donate" },
  { href: "/sponsor-child", label: "Sponsor a Child" },
  { href: "/volunteer", label: "Volunteer With Us" },
  { href: "/partner-with-us", label: "Partner With Us" },
  { href: "/csr", label: "Corporate Partnerships / CSR" },
  { href: "/fundraise", label: "Fundraise for Yaqeen" },
  { href: "/barkat-ramadan", label: "BARKAT Ramadan Campaign" },
  { href: "/qurbani-campaign", label: "Qurbani Campaign" },
];

function MegaCol({ heading, items }: { heading?: string; items: { href: string; label: string }[] }) {
  return (
    <div>
      {heading && (
        <h5 className="mb-2.5 font-data text-[11.5px] font-bold uppercase tracking-[0.09em] text-accent-600">
          {heading}
        </h5>
      )}
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center border-b border-dashed border-transparent py-[7px] text-[14px] text-ink/75 transition-all hover:pl-1 hover:text-brand-700"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

function NavItem({
  label,
  triggerHref,
  children,
  wide = false,
}: {
  label: string;
  triggerHref: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <li className="group relative">
      <Link
        href={triggerHref}
        className="flex items-center gap-1 xl:gap-1.5 whitespace-nowrap rounded-md px-2 xl:px-4 py-[14px] text-[13.5px] xl:text-[14.5px] font-medium text-ink transition-colors hover:text-brand-700"
      >
        {label}
        <Icon name="chevronDown" className="h-3 w-3 transition-transform group-hover:rotate-180" />
      </Link>
      <div
        className={`invisible absolute left-1/2 top-full z-20 -translate-x-1/2 translate-y-2 rounded-2xl border border-sand bg-white p-6 opacity-0 shadow-[0_24px_60px_-20px_rgba(24,34,49,0.28)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
          wide ? "grid min-w-[640px] grid-cols-3 gap-6" : "min-w-[260px]"
        }`}
      >
        {children}
      </div>
    </li>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-brand-900 font-data text-[12.5px] text-white/85">
        <div className="mx-auto flex h-[38px] max-w-[1180px] items-center justify-between px-6">
          <div className="flex gap-5">
            <a href="tel:+922134567890" className="flex items-center gap-1.5 hover:text-accent-400">
              <Icon name="phone" className="h-3.5 w-3.5" /> +92 21 3456 7890
            </a>
            <a
              href="mailto:info@yaqeenwelfare.org"
              className="hidden items-center gap-1.5 hover:text-accent-400 sm:flex"
            >
              <Icon name="mail" className="h-3.5 w-3.5" /> info@yaqeenwelfare.org
            </a>
            <span className="hidden items-center gap-1.5 md:flex">
              <Icon name="pin" className="h-3.5 w-3.5" /> Karachi, Pakistan
            </span>
          </div>
          <div className="flex items-center gap-3 font-semibold">
            <button className="flex items-center text-accent-400">EN</button>
            <span className="flex items-center text-white/40">/</span>
            <button className="flex items-center text-white/55 hover:text-white">اردو</button>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 border-b border-sand bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[82px] max-w-[1180px] items-center justify-between px-4 xl:px-6">
          
          {/* Logo */}
          <Link href="/" className="flex flex-shrink-0 items-center">
            <Image
              src="/images/logo.jpg"
              alt="Yaqeen Welfare Foundation"
              width={414}
              height={483}
              className="h-[52px] w-auto rounded-lg"
            />
          </Link>

          <nav className="hidden flex-1 justify-center lg:flex">
            <ul className="flex items-center">
              <li>
                <Link href="/" className="flex items-center whitespace-nowrap rounded-md px-2 xl:px-4 py-[14px] text-[13.5px] xl:text-[14.5px] font-medium text-ink hover:text-brand-700">
                  Home
                </Link>
              </li>
              <NavItem label="About Us" triggerHref="/about">
                <MegaCol items={ABOUT_LINKS} />
              </NavItem>
              <NavItem label="Our Work" triggerHref="/#our-work" wide>
                <MegaCol heading="Education" items={EDUCATION} />
                <MegaCol heading="Health & Women" items={HEALTH_WOMEN} />
                <MegaCol heading="Community & Climate" items={COMMUNITY_CLIMATE} />
              </NavItem>
              <NavItem label="Our Impact" triggerHref="/#impact">
                <MegaCol items={IMPACT_LINKS} />
              </NavItem>
              <NavItem label="Get Involved" triggerHref="/#get-involved">
                <MegaCol items={GET_INVOLVED_LINKS} />
              </NavItem>
              <li>
                <Link href="/#updates" className="flex items-center whitespace-nowrap rounded-md px-2 xl:px-4 py-[14px] text-[13.5px] xl:text-[14.5px] font-medium text-ink hover:text-brand-700">
                  Media &amp; Updates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center whitespace-nowrap rounded-md px-2 xl:px-4 py-[14px] text-[13.5px] xl:text-[14.5px] font-medium text-ink hover:text-brand-700">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex flex-shrink-0 items-center gap-2 xl:gap-4">
            <button aria-label="Search" className="hidden h-[38px] w-[38px] items-center justify-center rounded-full text-ink/70 hover:bg-sand sm:flex">
              <Icon name="search" className="h-[18px] w-[18px]" />
            </button>
           <Link
  href="/donate"
  className="flex items-center justify-center whitespace-nowrap rounded-lg bg-accent-500 px-3 py-2 text-[12.5px] font-bold text-brand-900 shadow-[0_10px_22px_-10px_rgba(245,146,15,0.7)] transition-all hover:-translate-y-0.5 hover:bg-accent-600 xl:px-5 xl:py-[10px] xl:text-[14px]"
>
  Donate
</Link>
            <button
              aria-label="Open menu"
              className="flex h-[50px] w-[38px] items-center justify-center rounded-full text-ink/70 hover:bg-sand lg:hidden"
              onClick={() => setOpen(true)}
            >
              <Icon name="menu" className="h-[22px] w-[22px]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[200] overflow-y-auto bg-white p-6 transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <Image
            src="/images/logo.jpg"
            alt="Yaqeen Welfare Foundation"
            width={414}
            height={483}
            className="h-12 w-auto rounded-lg"
          />
          <button aria-label="Close menu" onClick={() => setOpen(false)} className="flex items-center justify-center">
            <Icon name="close" className="h-6 w-6 text-ink" />
          </button>
        </div>
        {[
          { href: "/", label: "Home" },
          { href: "/about", label: "About Us" },
          { href: "/#our-work", label: "Our Work" },
          { href: "/#impact", label: "Our Impact" },
          { href: "/#get-involved", label: "Get Involved" },
          { href: "/contact", label: "Contact Us" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="flex items-center border-b border-sand py-3.5 text-[16px] font-semibold text-ink"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/donate"
          onClick={() => setOpen(false)}
          className="mt-5 flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3.5 text-center font-bold text-brand-900"
        >
          Donate Now
        </Link>
      </div>
    </>
  );
}