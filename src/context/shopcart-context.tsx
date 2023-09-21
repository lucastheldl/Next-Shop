import { ReactNode, createContext, useState } from "react";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  defaultPriceId: string;
}

type CartContextType = {
  products: Product[];
  addProdutsInCart: (product: Product) => void;
  removeProdutsInCart: (id: string) => void;
};

type CartContextProviderType = {
  children: ReactNode;
};

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderType) {
  const [products, setProducts] = useState<Product[]>([]);

  function addProdutsInCart(product: Product) {
    setProducts((prev) => [...prev, product]);
  }
  function removeProdutsInCart(id: string) {
    setProducts(products.filter((prod) => prod.id !== id));
  }

  return (
    <CartContext.Provider
      value={{ products, addProdutsInCart, removeProdutsInCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
