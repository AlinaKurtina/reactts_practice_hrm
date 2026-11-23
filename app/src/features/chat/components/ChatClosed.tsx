import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { useChatStore } from "@/stores/useChatStore";
import { MessagesCircle } from "lucide-react";

function ChatClosed() {
  const { setIsOpen } = useChatStore();

  return (
    <Bubble className="h-15 w-50" onClick={() => setIsOpen(true)}>
      <BubbleContent className="transition-all duration-250 ease-out flex gap-2 cursor-pointer hover:shadow-chart-3 hover:shadow-2xl hover:bg-(--brand-red)! ">
        <MessagesCircle color="#ffffff" />
        <span className="">Open Chat</span>
      </BubbleContent>
    </Bubble>
  );
}

export default ChatClosed;
