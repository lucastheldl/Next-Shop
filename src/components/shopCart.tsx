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
import axios from "axios";

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
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);
      const priceIds = products.map((prod) => {
        return { price: prod.defaultPriceId, quantity: 1 };
      });

      const response = await axios.post(
        "/api/checkout",

        //priceId: product.defaultPriceId,
        { priceId: priceIds }
      );

      const { checkoutUrl } = response.data;

      //usar isso para redirecionar para uma rota esterna, se fosse uma interna usar o useRouter push
      window.location.href = checkoutUrl;
    } catch (err) {
      alert("Falha na compra");
      setIsCreatingCheckoutSession(false);
      console.error(err);
    }
  }

  useEffect(() => {
    setTotal(resume.total);
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
            {products.map((product, i) => {
              return <ShopCartItemCard key={i} product={product} />;
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
          <button onClick={handleBuyProduct}>Finalizar compra</button>
        </CartResume>
      </ShopCart>
    </ShopCartContainer>
  );
}
