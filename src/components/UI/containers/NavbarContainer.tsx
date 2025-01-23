"use client";

import usePathLastSegment from "hooks/usePathLastSegment";
import type { IParentProps } from "types";

export default function NavbarContainer({ children }: IParentProps) {
  const path = usePathLastSegment();
  return (
    <div
      className={`navbar-layout ${path ? "navbar-default" : "navbar-on-hero"}`}
    >
      {children}
    </div>
  );
}
