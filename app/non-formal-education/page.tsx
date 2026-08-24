import ProgramPage from "@/components/ProgramPage";
import { programs } from "@/lib/content";

export const metadata = {
  title: "Non-Formal Education",
  description: "Accelerated, flexible learning pathways for out-of-school children across Sindh.",
};

export default function Page() {
  return <ProgramPage data={programs["non-formal-education"]} />;
}
