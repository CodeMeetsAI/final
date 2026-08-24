import Container from "@/components/Container";
import SectionHead from "@/components/SectionHead";
import PageHero from "@/components/PageHero";
import ValueGrid from "@/components/ValueGrid";
import { TextField, TextAreaField, SelectField, FormShell, SubmitButton } from "@/components/Form";

export const metadata = {
  title: "Volunteer With Us",
  description: "Volunteer with Yaqeen Welfare Foundation in teaching, medical camps, or skills-based support roles.",
};

const AREAS = [
  { icon: "book" as const, title: "Teaching & Tutoring", text: "Support classrooms or tutoring sessions at Parho Pakistan learning centres." },
  { icon: "heart" as const, title: "Medical Volunteering", text: "Doctors, nurses and pharmacists supporting our free medical camps." },
  { icon: "target" as const, title: "Skills-Based Volunteering", text: "Marketing, design, finance or IT support for our programs and campaigns." },
];

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Volunteer With Us"
        description="Join 1,850+ active volunteers supporting education, health and community programs across Pakistan."
        crumb="Get Involved / Volunteer"
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHead
            eyebrow="Volunteer With Us"
            title="Give your time, skills or expertise"
            description="From teaching support to medical camps and event help, there's a role for almost every skill set."
            center
          />
          <ValueGrid items={AREAS} />
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <Container>
          <SectionHead eyebrow="Apply to Volunteer" title="Tell us how you'd like to help" />
          <FormShell maxWidth="max-w-[640px]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <TextField id="vname" label="Full Name" placeholder="Your name" required />
              <TextField id="vemail" label="Email Address" type="email" placeholder="you@example.com" required />
            </div>
            <SelectField
              id="varea"
              label="Area of Interest"
              options={["Teaching & Tutoring", "Medical Volunteering", "Skills-Based Volunteering", "Event & Campaign Support"]}
            />
            <TextAreaField id="vavail" label="Availability" placeholder="Days/hours you're available" rows={4} />
            <SubmitButton>Submit Application</SubmitButton>
          </FormShell>
        </Container>
      </section>
    </>
  );
}
