import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import Image from "next/image";
import logo from "../assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";
import { ShoppingCart } from "lucide-react";
import { ShopCart } from "@/styles/pages/app";
import { useState } from "react";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  function handleOpenShopCart() {
    setIsCartOpen(!isCartOpen);
    console.log(isCartOpen);
  }
  return (
    <Container>
      <Header>
        <Image src={logo} alt=""></Image>
        <button onClick={handleOpenShopCart}>
          <ShoppingCart size={38} />
        </button>
        <ShopCart
          id="shopCart"
          css={
            isCartOpen
              ? { transform: "translateX(0)", opacity: 100 }
              : { transform: "translateX(100%)", opacity: 0 }
          }
        ></ShopCart>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
