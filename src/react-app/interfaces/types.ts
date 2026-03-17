import { PokemonTypes } from '../utils/BackgroundByType';

export type PokemonType = {
  name: PokemonTypes | 'All';
  url?: string;
};

export type AllPokemonResult = {
  name: string;
  url: string;
};

export type ResultPokemonByType = {
  pokemon: {
    name: string;
    url: string;
  };
};
