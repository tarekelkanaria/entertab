"use client";

import Image from "next/image";
import usePathLastSegment from "hooks/usePathLastSegment";
import { useStoreState } from "hooks/useStoreState";
import ArabicSign from "assets/arabic-sign.png";

export default function NavActions() {
  const isMenuOpen = useStoreState((state) => state.menuState.isMenuOpen);
  const path = usePathLastSegment();
  return (
    <ul
      className={`${
        isMenuOpen ? "flex-col-responsive" : "max-md:hidden"
      } md:flex md:space-x-3 md:space-y-0`}
    >
      <li
        className={`border border-solid max-md:border-main-300 max-md:hover:border-main-100 rounded-hover-btn transition-transform duration-100 ease-linear ${
          path
            ? "md:border-main-300 md:hover:border-main-100"
            : "md:border-main-200"
        }`}
      >
        <button
          className={`px-3.5 py-2 max-md:w-full max-md:text-main-100 md:w-auto main-btn ${
            path ? "md:text-main-100" : "md:text-white"
          }`}
        >
          Build a Website
        </button>
      </li>
      <li className="border border-solid bg-gradient-ar-btn border-tealSolid-50 rounded-hover-btn transition-btn">
        <button
          className={`px-3.5 pt-1 pb-2 text-center ${
            isMenuOpen ? "w-full" : "w-auto"
          }`}
        >
          <Image
            src={ArabicSign}
            alt="Arabic"
            width={19}
            height={25}
            className="w-[19px] h-[25px] mx-auto"
          />
        </button>
      </li>
    </ul>
  );
}
