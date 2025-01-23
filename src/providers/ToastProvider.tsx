"use client";

import { Toaster } from "sonner";
import type { IParentProps } from "types";

export default function ToastProvider({ children }: IParentProps) {
  return (
    <>
      <Toaster
        position="bottom-left"
        richColors
        visibleToasts={1}
        closeButton
      />
      {children}
    </>
  );
}
