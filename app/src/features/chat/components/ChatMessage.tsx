import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { Message, MessageContent } from "@/components/ui/message";
import type { MessageData } from "@/types";

function ChatMessage({ messageText }: MessageData) {
  return (
    <Message align="end">
      <MessageContent>
        <Bubble className="animate-message-pop">
          <BubbleContent className="bg-(--brand-red)!">{messageText}</BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
  );
}

export default ChatMessage;
