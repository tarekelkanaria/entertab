"use client";

import { createContext, useRef } from "react";

import { createStore } from "store/create-store";

import type { IParentProps, StoreContextType } from "types";

export const StoreContext = createContext<StoreContextType>(null);

export const StoreProvider = ({ children }: IParentProps) => {
  const storeRef = useRef<StoreContextType>(null);
  if (!storeRef.current) {
    storeRef.current = createStore();
  }
  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};
