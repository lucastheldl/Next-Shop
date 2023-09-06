import {
  DetailsContainer,
  ImageContainer,
  ProductContainer,
} from "@/styles/pages/product";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <DetailsContainer>
        <h1>Camiseta X</h1>
        <span>R$ 79.99</span>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
          reprehenderit laboriosam, qui accusamus nihil quo animi sit labore
          consequuntur doloremque adipisci asperiores pariatur autem officiis
          culpa, dolorum blanditiis architecto iste?
        </p>
        <button>Comprar agora</button>
      </DetailsContainer>
    </ProductContainer>
  );
}
