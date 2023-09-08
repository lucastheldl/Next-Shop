import { HomeContainer, Product } from "@/styles/pages/home";
import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

import { stripe } from "../lib/stripe";
import { useKeenSlider } from "keen-slider/react";

import camiseta1 from "../assets/camisetas/1.png";
import camiseta2 from "../assets/camisetas/2.png";
import camiseta3 from "../assets/camisetas/3.png";

import "keen-slider/keen-slider.min.css";
import Stripe from "stripe";
import Link from "next/link";

interface HomePorps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export default function Home({ products }: HomePorps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.6,
      spacing: 48,
    },
  });
  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeContainer ref={sliderRef} className="Ken-slider">
        {products.map((product, i) => {
          return (
            <Link
              legacyBehavior
              href={`/product/${product.id}`}
              key={i}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />
                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>
              </Product>
            </Link>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = res.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount! / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};
