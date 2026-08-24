import ProgramPage from "@/components/ProgramPage";
import { programs } from "@/lib/content";

export const metadata = {
  title: "Food & Ration Support",
  description: "Monthly ration packages for food-insecure families across Sindh.",
};

export default function Page() {
  return <ProgramPage data={programs["food-ration-support"]} />;
}
