"use client";

import Link from "next/link";
import { useStoreState } from "hooks/useStoreState";
import usePathLastSegment from "hooks/usePathLastSegment";
import Image from "next/image";
import LogoLight from "assets/logo-light.png";
import LogoDark from "assets/logo-dark.png";

const navLinks = [
  { title: "Home", id: "" },
  { title: "Works", id: "works" },
  { title: "Contact Us", id: "contact" },
  { title: "Payments", id: "payments" },
];

export default function NavLinks() {
  const isMenuOpen = useStoreState((state) => state.menuState.isMenuOpen);
  const path = usePathLastSegment();
  return (
    <>
      <ul
        className={`md:flex md:space-x-3 md:space-y-0 ${
          isMenuOpen ? "flex-col-responsive" : "max-md:hidden"
        }`}
      >
        {navLinks.map((navLink) => (
          <li key={navLink.title.toLowerCase()} className="group">
            <Link
              href={`/${navLink.id}`}
              className={`nav-link ${
                path ? "md:text-main-100" : "md:text-white"
              } ${path === navLink.id ? "active-link" : "inactive-link"}`}
            >
              {navLink.title}
            </Link>
          </li>
        ))}
      </ul>
      {path ? (
        <Link href="/" className="desk-top">
          <Image
            src={LogoDark}
            alt="Logo"
            height={50}
            width={245}
            priority
            className="logo-position"
          />
        </Link>
      ) : (
        <Link href="/" className="desk-top">
          <Image
            src={LogoLight}
            alt="Logo"
            height={50}
            width={245}
            priority
            className="logo-position"
          />
        </Link>
      )}
    </>
  );
}
