import { create } from "zustand";

interface EmployeeFiltersState {
  allJobTitles: string[];
}

interface EmployeeFiltersAction {
  setEmployeeJobTitles: (allJobTitles: EmployeeFiltersState["allJobTitles"]) => void;
}

const useEmployeeFiltersStore = create<EmployeeFiltersState & EmployeeFiltersAction>()((set) => ({
  allJobTitles: [],
  setEmployeeJobTitles: (allJobTitles) => set(() => ({ allJobTitles: allJobTitles })),
}));

export { useEmployeeFiltersStore, type EmployeeFiltersState };
