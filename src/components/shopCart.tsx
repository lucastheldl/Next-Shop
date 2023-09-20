import { CartContext } from "@/context/shopcart-context";
import { useCartCostResume } from "@/hooks/useCartCostResume";
import {
  ShopCartContainer,
  CartItems,
  CartResume,
  CartValueInfo,
  ShopCart,
  ItemsCardContainer,
} from "@/styles/components/shopCart";
import { X } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { ShopCartItemCard } from "./shopCartItemCard";

interface ShopCartComponentProps {
  isCartOpen: boolean;
  handleOpenShopCart: () => void;
}

export function ShopCartComponent({
  isCartOpen,
  handleOpenShopCart,
}: ShopCartComponentProps) {
  const [total, setTotal] = useState(0);
  const resume = useCartCostResume();
  const { products } = useContext(CartContext);

  useEffect(() => {
    setTotal(resume.total);
    console.log(resume.total);
    console.log(products);
  }, [products, resume.total]);

  return (
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
            <button onClick={handleOpenShopCart}>
              <X />
            </button>
          </div>

          <strong>Sacola de compras</strong>

          <ItemsCardContainer>
            {products.map((product) => {
              return <ShopCartItemCard key={product.id} product={product} />;
            })}
          </ItemsCardContainer>
        </CartItems>
        <CartResume>
          <CartValueInfo>
            <div>
              <span>Quantidade</span>
              <strong>Valor total</strong>
            </div>
            <div>
              <span>{products ? products.length : 0} itens</span>
              <strong>R$ {total.toFixed(2)}</strong>
            </div>
          </CartValueInfo>
          <button>Finalizar compra</button>
        </CartResume>
      </ShopCart>
    </ShopCartContainer>
  );
}
