import { useContext } from 'react';
import { SmallPokeballIcon } from '../../assets/pokeball';
import { Filters } from '../../components/Filters';
import { Pagination } from '../../components/Pagination';
import { PokemonList } from '../../components/PokemonList';
import { PokemonContext } from '../../context/PokemonContext';
import { usePagination } from '../../hooks/usePagination';

import styles from './styles.module.css';

export const Home = () => {
  const { filteredPokemon } = useContext(PokemonContext);
  const { page, nextPage, previousPage, backToHome } = usePagination();

  let pokemonPerPage = 12;

  return (
    <div className={styles.home}>
      <header>
        <div onClick={backToHome}>
          <SmallPokeballIcon />
          <span>Pokédex</span>
        </div>
      </header>
      <Filters />
      <PokemonList
        page={page}
        pokemonPerPage={pokemonPerPage}
        pokemonUrls={filteredPokemon}
      />
      <Pagination
        page={page}
        pokemonPerPage={pokemonPerPage}
        nextPage={nextPage}
        previousPage={previousPage}
        maxItems={filteredPokemon?.length!}
      />
    </div>
  );
};
