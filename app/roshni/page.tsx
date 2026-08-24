import ProgramPage from "@/components/ProgramPage";
import { programs } from "@/lib/content";

export const metadata = {
  title: "ROSHNI — Literacy Initiative",
  description: "Foundational literacy and numeracy support for children with no prior schooling.",
};

export default function Page() {
  return <ProgramPage data={programs["roshni"]} />;
}
