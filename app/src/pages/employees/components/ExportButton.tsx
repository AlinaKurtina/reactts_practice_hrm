import MyButton from "@/components/common/Buttons";
import Wrapper from "@/components/common/Wrapper";
import { Upload } from "lucide-react";

function ExportButton() {
  return (
    <Wrapper className="items-center hover:bg-(--brand-red)/10 rounded-sm px-5 h-10">
      <Upload className="text-(--brand-red) size-5" />
      <MyButton text="Export" className="bg-transparent text-(--brand-red) w-fit px-2 hover:bg-transparent" />
    </Wrapper>
  );
}

export default ExportButton;
