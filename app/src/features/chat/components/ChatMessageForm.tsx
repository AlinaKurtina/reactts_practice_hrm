import Card from "@/components/common/Card";
import Wrapper from "@/components/common/Wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface Props {
  handleSend: () => void;
  currentRecipient: string;
  draft: string;
  setDraft: (e: string) => void;
}

function ChatMessageForm({ setDraft, handleSend, draft, currentRecipient }: Props) {
  return (
    <Card>
      <Wrapper className="h-15 items-center gap-3">
        <Input
          className="w-75 rounded-md"
          placeholder="Enter your message"
          onChange={(e) => {
            setDraft(e.currentTarget.value);
          }}
          value={draft}
          disabled={currentRecipient ? false : true}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />
        <Button
          className="bg-(--brand-red) grow p-2 rounded-full justify-center h-8.5 w-8.5 cursor-pointer hover:bg-red-900 transition-colors duration-100 ease-in hover:shadow-red-900 hover:shadow-sm"
          onClick={handleSend}
        >
          <Send color="#ffffff" className="size-5 mt-0.5 mr-0.5" />
        </Button>
      </Wrapper>
    </Card>
  );
}

export default ChatMessageForm;
