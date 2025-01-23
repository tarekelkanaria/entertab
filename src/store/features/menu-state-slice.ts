import type { StateCreator } from "zustand";
import type { IMenuState, IMenuStateSlice, StoreState } from "types";

const initialMenuState: IMenuState = {
  isMenuOpen: false,
};

export const createMenuStateSlice: StateCreator<
  StoreState,
  [["zustand/immer", never]],
  [],
  IMenuStateSlice
> = (set) => ({
  menuState: {
    ...initialMenuState,
    setIsMenuOpen: (payload) =>
      set((state) => {
        state.menuState.isMenuOpen = payload;
      }),
  },
});
