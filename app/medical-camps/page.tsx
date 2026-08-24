import ProgramPage from "@/components/ProgramPage";
import { programs } from "@/lib/content";

export const metadata = {
  title: "Medical Camps",
  description: "Free, one-day medical camps bringing consultations and screening to underserved communities.",
};

export default function Page() {
  return <ProgramPage data={programs["medical-camps"]} />;
}
