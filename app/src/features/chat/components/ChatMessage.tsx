// import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { Message,  MessageContent } from "@/components/ui/message";

// import avatar from "@/assets/avatars/mainAvatar.png";
import type { MessageData} from "@/types";
// import { useLocalStorage } from "@/hooks/helpers/useLocalStorage";

// TODO: PUT KEY IN A SEPARATE ENUM-Y!!!! TOO!!!
function ChatMessage({ messageText }: MessageData) {
  // const { getNewItem } = useLocalStorage();
  // const currentUser = getNewItem<User>("userData")?.fullName;

  return (
    <Message align={"end"}>
      {/* <MessageAvatar>
        <Avatar>
          <AvatarImage src={avatar} alt="@me" />
        </Avatar>
      </MessageAvatar> */}
      <MessageContent>
        <Bubble>
          <BubbleContent className="bg-(--brand-red)!">{messageText}</BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
  );
}

export default ChatMessage;
