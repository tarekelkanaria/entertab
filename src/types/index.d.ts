declare module "types" {
  import type { StoreApi } from "zustand";

  type IParentProps = Readonly<{
    children: React.ReactNode;
  }>;

  type IContactFormData = {
    fullName: string;
    email: string;
    message: string;
  };

  type IActionState = {
    status: string;
    message: string;
  };

  type IMenuState = {
    isMenuOpen: boolean;
  };

  type IMenuStateActions = {
    setIsMenuOpen: (value: boolean) => void;
  };

  type IMenuStateSlice = {
    menuState: IMenuState & IMenuStateActions;
  };

  type StoreState = IMenuStateSlice;
  type StoreContextType = StoreApi<StoreState> | null;
}
