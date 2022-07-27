import Link from "next/link";
import React from "react";
import { POKEMONS_URL } from "../src/constants";
import IPokemon from "../src/IPokemon";
import Image from "next/image";

// SSR

// --- ssr is the same as ssg but use getServerSideProps instead of getStaticProps
// export async function getStaticProps() {
export async function getServerSideProps() {
  const response = await fetch(POKEMONS_URL);
  const pokemons: IPokemon[] = await response.json();

  return {
    props: { pokemons }, // will be passed to the page component as props
  };
}

const PokemonsSSR = (props: { pokemons: IPokemon[] }) => {
  const { pokemons } = props;

  const elems = pokemons.map((pokemon, i) => (
    <div key={i}>
      <span>{pokemon.name}</span>
      <Image src={`/${pokemon.image}`} width={100} height={100} />
    </div>
  ));

  return (
    <div>
      <Link href="/about">About</Link>
      <br />
      <Link href="/">Home</Link>
      <br />
      <Link href="/pokemons-csr">PokemonsCSR</Link>
      <br />
      <Link href="/pokemons-ssg">PokemonsSSG</Link>
      <h1>PokemonsSSR page</h1>
      {elems}
    </div>
  );
};

export default PokemonsSSR;
