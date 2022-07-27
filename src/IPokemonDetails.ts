export interface Stat {
  name: string;
  value: number;
}

export default interface IPokemonDetails {
  name: string;
  type: string[];
  stats: Stat[];
  image: string;
}
