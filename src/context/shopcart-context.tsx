import { ReactNode, createContext, useState } from "react";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

type CartContextType = {
  products: Product[];
  updateProdutsInCart: (product: Product) => void;
};

type CartContextProviderType = {
  children: ReactNode;
};

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderType) {
  const [products, setProducts] = useState<Product[]>([]);
  function updateProdutsInCart(product: Product) {
    setProducts((prev) => [...prev, product]);
  }

  return (
    <CartContext.Provider value={{ products, updateProdutsInCart }}>
      {children}
    </CartContext.Provider>
  );
}
