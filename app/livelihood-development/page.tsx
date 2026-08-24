import ProgramPage from "@/components/ProgramPage";
import { programs } from "@/lib/content";

export const metadata = {
  title: "Livelihood Development",
  description: "Ongoing support helping women and families convert new skills into sustainable income.",
};

export default function Page() {
  return <ProgramPage data={programs["livelihood-development"]} />;
}
