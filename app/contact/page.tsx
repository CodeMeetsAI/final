import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import PageHero from "@/components/PageHero";
import Icon, { IconName } from "@/components/Icon";
import { TextField, TextAreaField, SelectField, FormShell, SubmitButton } from "@/components/Form";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Yaqeen Welfare Foundation — office address, phone, email and contact form.",
};

const INFO: { icon: IconName; title: string; text: string }[] = [
  { icon: "pin", title: "Office Address", text: "Plot 12-C, Block 4, Malir Cantt, Karachi, Sindh, Pakistan" },
  { icon: "phone", title: "Phone", text: "+92 21 3456 7890 · +92 300 1234567" },
  { icon: "mail", title: "Email", text: "info@yaqeenwelfare.org · donations@yaqeenwelfare.org" },
  { icon: "clock", title: "Office Hours", text: "Monday – Saturday, 9:00 AM – 6:00 PM (PKT)" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Questions about our programs, partnerships, or donations? Our team is here to help."
        crumb="Contact Us"
      />

      <section className="py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal">
            <Eyebrow>Reach Us Directly</Eyebrow>
            <h2 className="mb-6 text-[26px] font-bold text-ink">Our office is always open to visitors</h2>

            {INFO.map((item) => (
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

            <div className="mt-6 h-[280px] overflow-hidden rounded-2xl border border-sand">
              <iframe
                src="https://www.google.com/maps?q=Malir,Karachi,Pakistan&output=embed"
                loading="lazy"
                title="Yaqeen Welfare Foundation office location map"
                className="h-full w-full border-0"
              />
            </div>
          </div>

          <FormShell title="Send Us a Message">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <TextField id="fname" label="Full Name" placeholder="Your name" required />
              <TextField id="femail" label="Email Address" type="email" placeholder="you@example.com" required />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <TextField id="fphone" label="Phone Number" type="tel" placeholder="+92 3XX XXXXXXX" />
              <SelectField
                id="fsubject"
                label="Subject"
                options={["General Inquiry", "Donation Question", "Volunteer With Us", "Corporate Partnership / CSR", "Media Inquiry"]}
              />
            </div>
            <TextAreaField id="fmessage" label="Message" placeholder="How can we help?" required rows={6} />
            <SubmitButton>Send Message</SubmitButton>
          </FormShell>
        </Container>
      </section>
    </>
  );
}
