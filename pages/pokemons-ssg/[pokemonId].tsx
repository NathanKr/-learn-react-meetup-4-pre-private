import React from "react";
import { GetStaticProps } from "next";
import IPokemonDetails from '../../src/IPokemonDetails'
import { POKEMONS_DETAILS_PREFIX_URL } from "../../src/constants";

// SSG
// --- access this page with pokemonId e.g. http://localhost:3000/pokemons-ssg/1

// -- part 2
export const getStaticProps: GetStaticProps = async (context) => {
  const { pokemonId } = (context as any).params;
  let pokemonDetails : IPokemonDetails | undefined = undefined;
  
  if(pokemonId){
    const url = `${POKEMONS_DETAILS_PREFIX_URL}/${pokemonId}.json`;
    const response = await fetch(url);
    pokemonDetails = await response.json();
  }


  return {
    props: {pokemonDetails}, // will be passed to the page component as props
  };
};

// -- part 3
// Generates a path for ALL dynamic route `/pokemons-ssg/1` and `/pokemons-ssg/2`
// all detailed pages  need to be created on build so you need to provide their paths
export async function getStaticPaths() {
  return {
    // --- here i use only two paths for clarity
    paths: [{ params: { pokemonId: "1" } }, { params: { pokemonId: "2" } }],
    fallback: false, // can also be true or 'blocking'
  };
}

// -- part 1
const PokemonDetail = (props : {pokemonDetails : IPokemonDetails}) => {
  console.log(props.pokemonDetails);
    

  return (
    <div>
      <h1>PokemonDetail</h1>
    </div>
  );
};

export default PokemonDetail;
