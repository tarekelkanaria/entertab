import dynamic from "next/dynamic";
import HeaderContainer from "components/UI/containers/HeaderContainer";
import type { IParentProps } from "types";

const DynamicHero = dynamic(() => import("./HeroComponent"));
export default function HeaderComponent({ children }: IParentProps) {
  return (
    <HeaderContainer>
      {children}
      <DynamicHero />
    </HeaderContainer>
  );
}
