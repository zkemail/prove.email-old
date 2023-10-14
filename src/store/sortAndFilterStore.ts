import { create } from "zustand";

interface SortAndFilterState {
  searchInput: string;
  setSearchInput: (searchInput: string) => void;
  recommended: boolean;
  setRecommended: (value: boolean) => void;
  newest: boolean;
  setNewest: (value: boolean) => void;
}

export const useSortAndFilterStore = create<SortAndFilterState>((set) => ({
  searchInput: "",
  setSearchInput: (state) => set({ searchInput: state }),
  recommended: false,
  newest: true,
  setRecommended: (state) => set({ recommended: state }),
  setNewest: (state) => set({ newest: state }),
}));
