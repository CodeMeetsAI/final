import ProgramPage from "@/components/ProgramPage";
import { programs } from "@/lib/content";

export const metadata = {
  title: "Parho Pakistan Program",
  description: "Yaqeen Welfare Foundation's flagship education program delivering formal schooling, literacy support and vocational training across Sindh.",
};

export default function Page() {
  return <ProgramPage data={programs["parho-pakistan"]} />;
}
