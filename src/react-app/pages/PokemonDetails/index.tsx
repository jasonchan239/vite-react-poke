import { useParams } from 'react-router-dom';
import { PokemonDetail } from '../../components/PokemonDetail';
import { usePokemon } from '../../hooks/usePokemon';

export const PokemonDetails = () => {
  const { pokemonId } = useParams();
  const { pokemon } = usePokemon('', pokemonId);

  if (!pokemon)
    return <span>{pokemonId} is not a valid Pokemon ID or Pokemon Name</span>;

  return <PokemonDetail pokemon={pokemon} />;
};
