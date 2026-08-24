import ProgramPage from "@/components/ProgramPage";
import { programs } from "@/lib/content";

export const metadata = {
  title: "Formal Education",
  description: "Curriculum-based, full-time schooling for children across Yaqeen's partner learning centres.",
};

export default function Page() {
  return <ProgramPage data={programs["formal-education"]} />;
}
