import { CartContext } from "@/context/shopcart-context";
import { useContext } from "react";

export function useCartCostResume() {
  const { products } = useContext(CartContext);

  type ResumeType = {
    total: number;
  };

  const resume: ResumeType = products
    ? products.reduce(
        (acc, product) => {
          acc.total += product.price;

          return acc;
        },
        { total: 0 }
      )
    : { total: 0 };

  return resume;
}
