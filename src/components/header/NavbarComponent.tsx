import Image from "next/image";
import Link from "next/link";
import NavMenuContainer from "components/UI/containers/NavMenuContainer";
import NavbarContainer from "components/UI/containers/NavbarContainer";
import NavLinks from "components/UI/NavLinks";
import NavActions from "components/UI/NavActions";
import BurgerButton from "components/UI/BurgerButton";
import LogoDark from "assets/logo-dark.png";

export default function NavbarComponent() {
  return (
    <NavbarContainer>
      <nav className="md:hidden py-3 flex justify-between items-center sm:px-3">
        <Link href="/">
          <Image src={LogoDark} alt="Logo" height={41} width={200} priority />
        </Link>
        <BurgerButton />
      </nav>
      <NavMenuContainer>
        <NavLinks />
        <NavActions />
      </NavMenuContainer>
    </NavbarContainer>
  );
}
