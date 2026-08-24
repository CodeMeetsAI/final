import ProgramPage from "@/components/ProgramPage";
import { programs } from "@/lib/content";

export const metadata = {
  title: "Vocational & Skills Training",
  description: "Practical, market-relevant skills training for youth ready to enter the workforce.",
};

export default function Page() {
  return <ProgramPage data={programs["vocational-training"]} />;
}
