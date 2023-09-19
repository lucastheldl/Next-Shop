import { CartContext } from "@/context/shopcart-context";
import { useContext } from "react";

export function useCartCostResume() {
  const { products } = useContext(CartContext);

  const resume = products
    ? products.reduce(
        (acc, product) => {
          if (products.length != 0) {
            acc.total += product.price;
          } else {
            acc.total = 0;
          }
          return acc;
        },
        { total: 0 }
      )
    : { total: 0 };

  return resume;
}
