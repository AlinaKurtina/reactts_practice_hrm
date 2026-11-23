import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { Message, MessageAvatar, MessageContent } from "@/components/ui/message";

import avatar from "@/assets/avatars/mainAvatar.png";

function ChatMessage() {
  return (
    <Message>
      <MessageAvatar>
        <Avatar>
          <AvatarImage src={avatar} alt="@shadcn" />
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <Bubble>
          <BubbleContent>How can I help you today?</BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
  );
}

export default ChatMessage;
