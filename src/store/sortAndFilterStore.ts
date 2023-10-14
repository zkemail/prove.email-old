import { create } from "zustand";

interface SortAndFilterState {
  searchInput: string;
  setSearchInput: (searchInput: string) => void;
  recommended: boolean | undefined;
  setRecommended: (value: boolean) => void;
  newest: boolean | undefined;
  setNewest: (value: boolean) => void;
}

export const useSortAndFilterStore = create<SortAndFilterState>((set) => ({
  searchInput: "",
  setSearchInput: (state) => set({ searchInput: state }),
  recommended: undefined,
  newest: undefined,
  setRecommended: (state) => set({ recommended: state }),
  setNewest: (state) => set({ newest: state }),
}));
