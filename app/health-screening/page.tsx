import ProgramPage from "@/components/ProgramPage";
import { programs } from "@/lib/content";

export const metadata = {
  title: "Health Screening",
  description: "Preventive screening drives to catch health issues early.",
};

export default function Page() {
  return <ProgramPage data={programs["health-screening"]} />;
}
