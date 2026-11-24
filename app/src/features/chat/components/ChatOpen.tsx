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

import { useEffect, useRef, useState } from "react";
import { useLocalStorage } from "@/hooks/helpers/useLocalStorage";
import { useAuthStore } from "@/stores/useAuthStore";
import { useChatStore } from "@/stores/useChatStore";
import type { User } from "@/types";
import { createSocket } from "@/lib/websocket";

// TODO: SEPARATE THE DIV INTO A DIFFERENT COMPONENT

function ChatOpen() {
  const [draft, setDraft] = useState("");
  const { fullName } = useAuthStore();
  const { currentRecipient } = useChatStore();
  const { getNewItem } = useLocalStorage();
  const wsRef = useRef<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const ws = createSocket();
    wsRef.current = ws;

    ws.onmessage = (e: MessageEvent<string>) => {
      if (e.data.startsWith("Request served by")) return;
      setMessages((prev) => [...prev, e.data]);
      console.log(e.data, "gotta appear");
    };

    return () => {
      ws.close();
    };
  }, []);

  function handleSend() {
    let senderName: string | undefined;
    const messageText = draft.trim();

    if (fullName) {
      senderName = fullName;
    } else {
      const savedFullName: User | null = getNewItem("userData");
      senderName = savedFullName?.fullName;
    }

    const message = {
      sender: senderName,
      receiver: currentRecipient,
      messageText: messageText,
    };

    if (wsRef.current?.readyState === WebSocket.OPEN && messageText) {
      wsRef.current.send(message.messageText);
      console.log("sent");
    }

    console.log(message);
    setDraft("");
  }

  return (
    <div className="opacity-100 scale-100 transition-all duration-300 ease-out starting:opacity-0 starting:scale-95">
      <MessageScrollerProvider>
        <MessageScroller className="w-100 h-150 bg-background border rounded-lg shadow-lg">
          <ChatHeader />
          <MessageScrollerViewport className="w-full h-full overflow-y-auto bg-(--main-gray-lighter)/10">
            <MessageScrollerContent className="flex flex-col gap-2 p-4">
              {messages.map((msg, i) => (
                <MessageScrollerItem key={i}>
                  <ChatMessage messageText={msg} />
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <ChatMessageForm
            handleSend={handleSend}
            setDraft={setDraft}
            draft={draft}
            currentRecipient={currentRecipient}
          />
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
    </div>
  );
}

export default ChatOpen;
