import Wrapper from "@/components/common/Wrapper";
import { useChatStore } from "@/stores/useChatStore";
import ChatOpen from "./components/ChatOpen";
import ChatClosed from "./components/ChatClosed";

function Chat() {
  const { isOpen } = useChatStore();
  return (
    <Wrapper id="chat" className="fixed right-8 bottom-8 z-2">
      {isOpen ? <ChatOpen /> : <ChatClosed />}
    </Wrapper>
  );
}

export default Chat;
