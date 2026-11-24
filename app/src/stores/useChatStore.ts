import { create } from "zustand";

interface ChatState {
  isOpen: boolean;
  currentRecipient: string;
}

interface ChatAction {
  setIsOpen: (isOpen: ChatState["isOpen"]) => void;
  setCurrentRecipient: (currentRecipient: ChatState["currentRecipient"]) => void;
}

const useChatStore = create<ChatState & ChatAction>()((set) => ({
  isOpen: false,
  currentRecipient: "",
  setIsOpen: (isOpen) => set(() => ({ isOpen: isOpen })),
  setCurrentRecipient: (currentRecipient) => set(() => ({ currentRecipient: currentRecipient })),
}));

export { useChatStore };