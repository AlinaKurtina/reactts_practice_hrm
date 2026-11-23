import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller";
import ChatMessage from "./ChatMessage";
import ChatHeader from "./ChatHeader";
import ChatMessageForm from "./ChatMessageForm";

// TODO: SEPARATE THE DIV INTO A DIFFERENT COMPONENT

function ChatOpen() {
  return (
    <div className="opacity-100 scale-100 transition-all duration-300 ease-out starting:opacity-0 starting:scale-95">
      <MessageScrollerProvider>
        <MessageScroller className="w-100 h-150 bg-background border rounded-lg shadow-lg">
          <ChatHeader />
          <MessageScrollerViewport className="w-full h-full overflow-y-auto bg-(--main-gray-lighter)/10">
            <MessageScrollerContent className="flex flex-col gap-2 p-4">
              {Array.from({ length: 20 }).map((_, i) => (
                <MessageScrollerItem key={i}>
                  <ChatMessage />
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <ChatMessageForm />
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
    </div>
  );
}

export default ChatOpen;
