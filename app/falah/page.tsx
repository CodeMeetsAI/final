import ProgramPage from "@/components/ProgramPage";
import { programs } from "@/lib/content";

export const metadata = {
  title: "FALAH — Relief Program",
  description: "Yaqeen's core relief program providing food, emergency aid and family support year-round.",
};

export default function Page() {
  return <ProgramPage data={programs["falah"]} />;
}
