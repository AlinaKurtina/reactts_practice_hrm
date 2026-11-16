import Card from "@/components/common/Card";
import { CardData, CardMetadata } from "./CardData";
import { Eye } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

import type { ContentsData } from "@/types";

function ContentsCard({
  title,
  category,
  numberOfStudents,
  passedEducation,
  type,
}: ContentsData) {
  return (
    <Card className="h-fit gap-15 items-center p-8 rounded-sm border min-w-full">
      <div className="rounded-full shrink-0 bg-red-100 p-3">
        <Eye size={25} className="text-(--brand-red)" />
      </div>
      <CardData dataKey={title} dataValue={type} />
      <CardMetadata dataKey="Category" dataValue={category} />
      <CardMetadata dataKey="Number of students" dataValue={`${numberOfStudents}`} />
      <CardMetadata dataKey="Passed education" dataValue={`${passedEducation}`} />
      <Avatar />
    </Card>
  );
}

export default ContentsCard;
