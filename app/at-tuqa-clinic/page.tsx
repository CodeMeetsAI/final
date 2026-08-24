import ProgramPage from "@/components/ProgramPage";
import { programs } from "@/lib/content";

export const metadata = {
  title: "AT TUQA Health Clinic Collaboration",
  description: "A collaborative health clinic providing affordable, consistent care in partnership with AT TUQA.",
};

export default function Page() {
  return <ProgramPage data={programs["at-tuqa-clinic"]} />;
}
