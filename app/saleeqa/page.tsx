import ProgramPage from "@/components/ProgramPage";
import { programs } from "@/lib/content";

export const metadata = {
  title: "SALEEQA — Women Empowerment",
  description: "A vocational training and livelihood program empowering women toward financial independence.",
};

export default function Page() {
  return <ProgramPage data={programs["saleeqa"]} />;
}
