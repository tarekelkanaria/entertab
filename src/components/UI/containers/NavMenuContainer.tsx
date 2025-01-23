"use client";

import usePathLastSegment from "hooks/usePathLastSegment";
import { useStoreState } from "hooks/useStoreState";
import type { IParentProps } from "types";

export default function NavMenuContainer({ children }: IParentProps) {
  const isMenuOpen = useStoreState((state) => state.menuState.isMenuOpen);
  const path = usePathLastSegment();
  return (
    <nav
      id="nav-menu"
      className={`${
        isMenuOpen ? "flex-col-responsive max-md:pb-3" : "max-md:hidden"
      } ${
        path ? "max-md:bg-customSlate-50" : "max-md:bg-transparent"
      }  md:flex md:py-5 md:justify-between md:items-center sm:px-3`}
    >
      {children}
    </nav>
  );
}
