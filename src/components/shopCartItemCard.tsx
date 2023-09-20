import { CartContext } from "@/context/shopcart-context";
import {
  CardContainer,
  InfoSection,
} from "@/styles/components/shopCartItemCard";
import Image from "next/image";
import { useContext } from "react";

interface ShopCartItemCardProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  };
}

export function ShopCartItemCard({ product }: ShopCartItemCardProps) {
  const { removeProdutsInCart } = useContext(CartContext);

  return (
    <CardContainer>
      <Image src={product.imageUrl} width={90} height={80} alt="" />
      <InfoSection>
        <p>{product.name}</p>
        <span>R$ {product.price.toFixed(2)}</span>
        <button onClick={() => removeProdutsInCart(product.id)}>Remover</button>
      </InfoSection>
    </CardContainer>
  );
}
