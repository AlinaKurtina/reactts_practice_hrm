import Wrapper from "@/components/common/Wrapper";
import { useChatStore } from "@/stores/useChatStore";
import { MessageCircle } from "lucide-react";

interface Props {
  empName: string;
}

function ChatWithButton({ empName }: Props) {
  const { setIsOpen } = useChatStore();

  function handleClick() {
    setIsOpen(true);
  }

  return (
    <Wrapper
      className="w-60 pl-12 pr-6 py-4 absolute inset-y-0 right-0 
        flex items-center justify-end gap-2
        bg-linear-to-l from-white from-70% to-transparent
        group-even:from-gray-50
        shadow-[inset_-50px_0_30px_-50px_rgba(15,23,42,0.09)]"
      onClick={handleClick}
    >
      <MessageCircle color="#c63031" />
      <span className="truncate max-w-45 font-head text-(--brand-red) text-md">
        Chat with {empName}
      </span>
    </Wrapper>
  );
}

export default ChatWithButton;
