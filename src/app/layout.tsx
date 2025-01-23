import type { Metadata } from "next";
import { StoreProvider } from "providers/StoreProvider";
import ToastProvider from "providers/ToastProvider";
import HeaderComponent from "components/header/HeaderComponent";
import NavbarComponent from "components/header/NavbarComponent";
import { roboto } from "styles/fonts";
import "./globals.css";
import type { IParentProps } from "types";

export const metadata: Metadata = {
  title: "Entertab - Site",
  description:
    "EnterTab is your trusted partner for web based solutions, mobile applications and social media marketing. As a leading online digital agency, our team works with you to build your brand’s online presence, expand your technological reach and create a social media network to increase growth and sustainability.",
};

export default function RootLayout({ children }: IParentProps) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased bg-white`}>
        <StoreProvider>
          <ToastProvider>
            <HeaderComponent>
              <NavbarComponent />
            </HeaderComponent>
            {children}
          </ToastProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
