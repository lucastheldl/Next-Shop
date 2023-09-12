import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import Image from "next/image";
import logo from "../assets/logo.svg";
import {
  CartItems,
  CartResume,
  CartValueInfo,
  Container,
  Header,
  OpenShopCartButton,
  ShopCart,
  ShopCartContainer,
} from "@/styles/pages/app";
import { ShoppingCart, X } from "lucide-react";
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
        <Image src={logo} alt="" width={150}></Image>
        <OpenShopCartButton onClick={handleOpenShopCart}>
          <ShoppingCart size={38} />
        </OpenShopCartButton>
        <ShopCartContainer
          id="shopCart"
          css={
            isCartOpen
              ? { transform: "translateX(0)", opacity: 100 }
              : { transform: "translateX(100%)", opacity: 0 }
          }
        >
          <ShopCart>
            <CartItems>
              <div>
                <button onClick={() => setIsCartOpen(false)}>
                  <X />
                </button>
              </div>

              <strong>Sacola de compras</strong>

              <div></div>
            </CartItems>
            <CartResume>
              <CartValueInfo>
                <div>
                  <span>Quantidade</span>
                  <strong>Valor total</strong>
                </div>
                <div>
                  <span>{"3"} itens</span>
                  <strong>R$ 200,00</strong>
                </div>
              </CartValueInfo>
              <button>Finalizar compra</button>
            </CartResume>
          </ShopCart>
        </ShopCartContainer>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
