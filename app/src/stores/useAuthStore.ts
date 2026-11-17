import { create } from "zustand";

interface AuthUserState {
  uid: string,
  fullName: string | undefined,
  jobTitle: string | undefined,
}

interface AuthUserAction {
  setUserUID: (uid: AuthUserState["uid"]) => void;
  setUserFullname: (fullName: AuthUserState["fullName"]) => void;
  setUserJobTitle: (jobTitle: AuthUserState["jobTitle"]) => void;
}

const useAuthStore = create<AuthUserState & AuthUserAction>()((set) => ({
  uid: "",
  fullName: "",
  jobTitle: "",
  setUserUID: (uid) => set(() => ({ uid: uid })),
  setUserFullname: (fullName) => set(() => ({ fullName: fullName })),
  setUserJobTitle: (jobTitle) => set(() => ({ jobTitle: jobTitle })),
}));

export { useAuthStore };