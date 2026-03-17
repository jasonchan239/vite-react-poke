import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import {
  AllPokemonResult,
  PokemonType,
  ResultPokemonByType,
} from '../interfaces/types';

interface PokemonContextProps {
  types: PokemonType[];
  selectedFilter: PokemonType;
  filteredPokemon: string[] | null;
  changeSelectedType: (type: PokemonType) => void;
}

export const PokemonContext = createContext<PokemonContextProps>(
  {} as PokemonContextProps
);

const PokemonProvider = ({ children }: any) => {
  let AllPokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0';

  const defaultState: PokemonType = {
    name: 'All',
    url: AllPokemonUrl,
  };

  const [allPokemon, setAllPokemon] = useState(null);
  const [filteredPokemon, setFilteredPokemon] = useState(null);

  const [types, setTypes] = useState([defaultState]);
  const [selectedFilter, setSelectedFilter] = useState(defaultState);

  const changeSelectedType = async (type: PokemonType) => {
    setSelectedFilter(type);

    const { data } = await axios.get(type?.url!);
    let pokemon = data?.pokemon?.map(
      ({ pokemon }: ResultPokemonByType) => pokemon?.url
    );

    type.name !== 'All'
      ? setFilteredPokemon(pokemon)
      : setFilteredPokemon(allPokemon);
  };

  const getPokemonType = async () => {
    const { data } = await axios.get('https://pokeapi.co/api/v2/type');
    setTypes([...types, ...data.results]);
  };

  const getAllPokemon = async () => {
    const { data } = await axios.get(AllPokemonUrl);

    let pokemon = data?.results?.map(
      (pokemon: AllPokemonResult) => pokemon?.url
    );

    setAllPokemon(pokemon);
    setFilteredPokemon(pokemon);
  };

  useEffect(() => {
    getPokemonType();
    getAllPokemon();
  }, []);

  return (
    <PokemonContext.Provider
      value={{ types, selectedFilter, filteredPokemon, changeSelectedType }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
