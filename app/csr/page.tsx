import Container from "@/components/Container";
import SectionHead from "@/components/SectionHead";
import PageHero from "@/components/PageHero";
import ValueGrid from "@/components/ValueGrid";
import { TextField, TextAreaField, SelectField, FormShell, SubmitButton } from "@/components/Form";

export const metadata = {
  title: "Corporate Partnerships / CSR",
  description: "Corporate CSR partnership opportunities with Yaqeen Welfare Foundation across education, health and relief programs.",
};

const OPTIONS = [
  { icon: "book" as const, title: "Adopt a Learning Centre", text: "Fund a Parho Pakistan classroom, branded and reported to your team." },
  { icon: "heart" as const, title: "Sponsor a Medical Camp", text: "Fund a full-day medical camp reaching hundreds of patients." },
  { icon: "people" as const, title: "Employee Volunteering", text: "Organise employee volunteer days at our program sites." },
];

export default function CsrPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Corporate Partnerships & CSR"
        description="Partner your company's CSR budget with programs that deliver clear, reportable outcomes."
        crumb="Get Involved / CSR"
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHead
            eyebrow="Corporate Partnerships"
            title="CSR that creates measurable impact"
            description="Partner your company's CSR budget with programs that deliver clear, reportable outcomes."
            center
          />
          <ValueGrid items={OPTIONS} />
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <Container>
          <SectionHead eyebrow="Get Started" title="Tell us about your company" />
          <FormShell maxWidth="max-w-[640px]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <TextField id="cname" label="Company Name" placeholder="Your company" required />
              <TextField id="cemail" label="Contact Email" type="email" placeholder="you@company.com" required />
            </div>
            <SelectField
              id="cbudget"
              label="CSR Budget Range"
              options={["Under Rs. 500,000", "Rs. 500,000 – 2,000,000", "Rs. 2,000,000+"]}
            />
            <TextAreaField id="cmessage" label="Message" placeholder="Tell us about your goals" rows={4} />
            <SubmitButton>Submit Inquiry</SubmitButton>
          </FormShell>
        </Container>
      </section>
    </>
  );
}
