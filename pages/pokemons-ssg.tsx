import Link from "next/link";
import React from "react";
import { POKEMONS_URL } from "../src/constants";
import IPokemon from "../src/IPokemon";
import Image from 'next/image'


export async function getStaticProps() {
  const response = await fetch(POKEMONS_URL);
  const pokemons: IPokemon[] = await response.json();

  return {
    props: { pokemons }, // will be passed to the page component as props
  };
}

const PokemonsSSG = (props: { pokemons: IPokemon[] }) => {
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
      <Link href="/pokemons-csr">PokemonsCSR</Link>
      <br />
      <Link href="/">Home</Link>
      {elems}
      <br />

      <h1>PokemonsSSG page</h1>
    </div>
  );
};

export default PokemonsSSG;
