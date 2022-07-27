import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/about">About</Link>
      <br />
      <Link href="/pokemons-csr">PokemonsCSR</Link>
      <br />
      <Link href="/pokemons-ssg">PokemonsSSG</Link>
      <br />

      <h1>Home Page</h1>
      <Image
        width="800"
        height="800"
        src="/images/home-domenico-loia-hGV2TfOh0ns-unsplash.jpg"
        alt="pic"
      />
    </div>
  );
};

export default Home;
