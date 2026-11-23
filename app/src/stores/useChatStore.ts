import { create } from "zustand";

interface ChatState {
  isOpen: boolean;
}

interface ChatAction {
  setIsOpen: (isOpen: ChatState["isOpen"]) => void;
}

const useChatStore = create<ChatState & ChatAction>()((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set(() => ({ isOpen: isOpen })),
}));

export { useChatStore };
