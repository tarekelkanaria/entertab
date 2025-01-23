"use client";

import { useContext } from "react";
import { shallow } from "zustand/shallow";
import { useStoreWithEqualityFn } from "zustand/traditional";

import { StoreContext } from "providers/StoreProvider";

import type { StoreState } from "types";

export const useStoreState = <T>(
  selector: (store: StoreState) => T,
  equalityFn = shallow
): T => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return useStoreWithEqualityFn(context, selector, equalityFn);
};
