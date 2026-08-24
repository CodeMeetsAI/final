import ProgramPage from "@/components/ProgramPage";
import { programs } from "@/lib/content";

export const metadata = {
  title: "Orphan & Family Support",
  description: "Long-term sponsorship and care for orphaned children and their guardian families.",
};

export default function Page() {
  return <ProgramPage data={programs["orphan-family-support"]} />;
}
