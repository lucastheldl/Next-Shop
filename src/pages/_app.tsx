import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import Image from "next/image";
import logo from "../assets/logo.svg";
import { Container, Header, OpenShopCartButton } from "@/styles/pages/app";
import { ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { CartContextProvider } from "@/context/shopcart-context";
import { ShopCartComponent } from "@/components/shopCart";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleOpenShopCart() {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <CartContextProvider>
      <Container>
        <Header>
          <Image src={logo} alt="" width={150}></Image>
          <OpenShopCartButton onClick={handleOpenShopCart}>
            <ShoppingCart size={38} />
          </OpenShopCartButton>

          <ShopCartComponent
            isCartOpen={isCartOpen}
            handleOpenShopCart={handleOpenShopCart}
          />
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  );
}
