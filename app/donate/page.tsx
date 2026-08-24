import Container from "@/components/Container";
import SectionHead from "@/components/SectionHead";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import HelpGrid from "@/components/HelpGrid";
import Icon from "@/components/Icon";
import { TextField, FormShell, SubmitButton } from "@/components/Form";

export const metadata = {
  title: "Donate",
  description: "Donate to Yaqeen Welfare Foundation via bank transfer or online, and support education, health and relief programs across Pakistan.",
};

const HELP_ITEMS = [
  { title: "Sponsor a Child", amount: "Rs. 2,500 / mo", text: "Covers tuition, books and uniform for one child for a full month.", href: "/sponsor-child" },
  { title: "Support Healthcare", amount: "Rs. 5,000", text: "Funds a free medical camp consultation package for 10 patients." },
  { title: "Empower Women", amount: "Rs. 8,000", text: "Sponsors a full SALEEQA vocational training course for one woman.", href: "/saleeqa" },
  { title: "Emergency Relief", amount: "Rs. 3,000", text: "Provides a ration pack and clean water kit for one family in crisis." },
];

const BANK_INFO = [
  { icon: "doc" as const, title: "Account Title", text: "Yaqeen Welfare Foundation" },
  { icon: "check" as const, title: "Bank & Branch", text: "Habib Bank Limited, Malir Cantt Branch, Karachi" },
  { icon: "target" as const, title: "Account & IBAN", text: "PK00 HABB 0000 1234 5678 9012" },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Donate"
        description="Your donation — big or small — funds real programs reaching real families across Pakistan."
        crumb="Get Involved / Donate"
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHead eyebrow="Choose Your Impact" title="Every donation reaches a real family" center />
          <HelpGrid items={HELP_ITEMS} />
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div className="reveal">
            <Eyebrow>Bank Transfer</Eyebrow>
            <h2 className="mb-6 text-[26px] font-bold text-ink">Donate directly via bank transfer</h2>
            {BANK_INFO.map((item) => (
              <div key={item.title} className="mb-4 flex items-start gap-4 rounded-2xl border border-sand bg-white p-6">
                <span className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full bg-cream">
                  <Icon name={item.icon} className="h-[19px] w-[19px] text-brand-700" />
                </span>
                <div>
                  <h4 className="mb-1 text-[15px] font-bold text-ink">{item.title}</h4>
                  <p className="text-[13.5px] text-slate-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal">
            <Eyebrow>Online Donation</Eyebrow>
            <h2 className="mb-6 text-[26px] font-bold text-ink">Or donate online in a few clicks</h2>
            <FormShell>
              <TextField id="amount" label="Donation Amount (PKR)" type="number" placeholder="e.g. 5000" />
              <TextField id="dname" label="Full Name" placeholder="Your name" />
              <TextField id="demail" label="Email Address" type="email" placeholder="you@example.com" />
              <SubmitButton>Proceed to Donate</SubmitButton>
            </FormShell>
          </div>
        </Container>
      </section>
    </>
  );
}
