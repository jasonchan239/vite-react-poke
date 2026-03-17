import { PokemonCard } from '../PokemonCard';
import styles from './styles.module.css';

interface Props {
  pokemonUrls?: string[] | null;
  page: number;
  pokemonPerPage: number;
}

export const PokemonList = ({ pokemonUrls, page, pokemonPerPage }: Props) => {
  return (
    <div className={styles.pokemon}>
      {pokemonUrls
        ?.slice(
          (page - 1) * pokemonPerPage,
          (page - 1) * pokemonPerPage + pokemonPerPage
        )
        .map((pokemonUrl) => (
          <PokemonCard key={pokemonUrl} url={pokemonUrl} />
        ))}
    </div>
  );
};
