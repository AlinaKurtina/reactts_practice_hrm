import Card from "@/components/common/Card";
import Wrapper from "@/components/common/Wrapper";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

function ChatMessageForm() {
  return (
    <Card>
      <Wrapper className="h-15 items-center gap-2">
        <Input className="w-75" placeholder="Enter your message" />
        <Wrapper className="bg-(--brand-red) grow p-1.5 rounded-full justify-center h-8.5 w-8.5 cursor-pointer hover:bg-red-900 transition-colors duration-100 ease-in hover:shadow-red-900 hover:shadow-sm">
          <Send color="#ffffff" className="size-5 mt-0.5 mr-0.5" />
        </Wrapper>
      </Wrapper>
    </Card>
  );
}

export default ChatMessageForm;
