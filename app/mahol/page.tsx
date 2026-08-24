import ProgramPage from "@/components/ProgramPage";
import { programs } from "@/lib/content";

export const metadata = {
  title: "MAHOL — Climate Action",
  description: "Yaqeen's environmental program driving plantation, climate awareness and sustainability.",
};

export default function Page() {
  return <ProgramPage data={programs["mahol"]} />;
}
