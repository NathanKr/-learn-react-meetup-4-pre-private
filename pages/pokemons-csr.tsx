import Link from "next/link";
import React, { useEffect, useState } from "react";
import { POKEMONS_URL } from "../src/constants";
import IPokemon from "../src/IPokemon";
import Image from 'next/image'

// CSR

const PokemonsCSR = () => {
  const [pokemons, setPokemons] = useState<IPokemon []>([]);
  useEffect(getPokemons, []);

  function getPokemons() {
    fetch(POKEMONS_URL)
      .then((response) => response.json())
      .then((data) => setPokemons(data));
  }

  const elems = pokemons.map((pokemon, i) => <div key={i}>
    <span>{pokemon.name}</span>
    <Image src={`/${pokemon.image}`} width={100} height={100}/>
  </div>);

  return (
    <div>
      <Link href="/about">About</Link>
      <br />
      <Link href="/">Home</Link>
      <br />
      <Link href="/pokemons-ssg">PokemonsSSG</Link>
      <br />
      <Link href="/pokemons-ssr">PokemonsSSR</Link>
      <br />
      <h1>PokemonsCSR page</h1>
      {elems}
    </div>
  );
};

export default PokemonsCSR;
