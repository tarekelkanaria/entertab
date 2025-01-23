import { create, type StoreApi } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createMenuStateSlice } from "./features/menu-state-slice";
import type { StoreState } from "types";

export const createStore = (): StoreApi<StoreState> =>
  create<StoreState>()(
    immer((...slice) => ({
      ...createMenuStateSlice(...slice),
    }))
  );
