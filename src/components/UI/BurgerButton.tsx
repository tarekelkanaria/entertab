"use client";

import { useStoreState } from "hooks/useStoreState";
import { IoMenu } from "react-icons/io5";
export default function BurgerButton() {
  const { isMenuOpen, setIsMenuOpen } = useStoreState(
    (state) => state.menuState
  );
  return (
    <IoMenu
      role="button"
      id="nav-menu-btn"
      aria-controls="nav-menu"
      aria-haspopup={true}
      aria-expanded={isMenuOpen || false}
      size={28}
      className="text-main-100 cursor-pointer"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    />
  );
}
