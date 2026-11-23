import Card from "@/components/common/Card";
import Wrapper from "@/components/common/Wrapper";
import { useChatStore } from "@/stores/useChatStore";
import { X } from "lucide-react";

interface Props {
  receiver?: string;
}

function ChatHeader({ receiver }: Props) {
  const { setIsOpen } = useChatStore();

  return (
    <Card>
      <Wrapper className="h-10 w-full items-center justify-between">
        {receiver ? (
          <span className="text-sm font-head">Alina Kurtsina</span>
        ) : (
          <span className="text-sm font-head">Start a conversation</span>
        )}
        <X color="#000000" className="size-4.5 cursor-pointer" onClick={() => setIsOpen(false)} />
      </Wrapper>
    </Card>
  );
}

export default ChatHeader;
