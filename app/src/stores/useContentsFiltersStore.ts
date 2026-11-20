import { create } from "zustand";

interface ContentsFiltersState {
  allAuthors: string[];
}

interface ContentsFilterAction {
  setContentsAuthors: (allJobTitles: ContentsFiltersState["allAuthors"]) => void;
}

const useContentsFiltersStore = create<ContentsFiltersState & ContentsFilterAction>()((set) => ({
  allAuthors: [],
  setContentsAuthors: (allAuthors) => set(() => ({ allAuthors: allAuthors })),
}));

export { useContentsFiltersStore, type ContentsFiltersState };