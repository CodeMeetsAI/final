import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: {
    default: "Yaqeen Welfare Foundation | Education, Health & Dignity Across Pakistan",
    template: "%s | Yaqeen Welfare Foundation",
  },
  description:
    "Yaqeen Welfare Foundation improves lives across Pakistan through education, healthcare, women empowerment, environmental action and community relief. Registered NGO since 2015.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
