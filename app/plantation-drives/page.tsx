import ProgramPage from "@/components/ProgramPage";
import { programs } from "@/lib/content";

export const metadata = {
  title: "Plantation Drives",
  description: "Community and school-based tree planting campaigns across Sindh.",
};

export default function Page() {
  return <ProgramPage data={programs["plantation-drives"]} />;
}
