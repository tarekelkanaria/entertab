"use client";

import usePathLastSegment from "hooks/usePathLastSegment";
import type { IParentProps } from "types";

export default function HeaderContainer({ children }: IParentProps) {
  const path = usePathLastSegment();
  return (
    <header
      className={`header-layout ${
        path ? "header-default" : "header-full-screen"
      }`}
    >
      {children}
    </header>
  );
}
