import Card from "@/components/common/Card";
import { CardData, CardMetadata } from "./CardData";
import { Eye } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

function ContentsCard() {
  return (
    <Card className="h-fit gap-15 items-center p-8 rounded-sm border min-w-full">
      <div className="rounded-full shrink-0 bg-red-100 p-3">
        <Eye size={25} className="text-(--brand-red)" />
      </div>
      <CardData dataKey="Data" dataValue="Value" />
      <CardMetadata dataKey="Category" dataValue="Value" />
      <CardMetadata dataKey="Number of students" dataValue="Value" />
      <CardMetadata dataKey="Passed education" dataValue="Value" />
      <Avatar />
    </Card>
  )
}

export default ContentsCard;