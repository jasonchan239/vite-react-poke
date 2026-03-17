import styles from './styles.module.css';

interface Props {
  pokemonPerPage: number;
  page: number;
  nextPage: () => void;
  previousPage: () => void;
  maxItems: number;
}

export const Pagination = ({
  pokemonPerPage,
  page,
  nextPage,
  previousPage,
  maxItems,
}: Props) => {
  const lastPage = Math.ceil(maxItems / pokemonPerPage);

  return (
    <div className={styles.pagination}>
      <button disabled={page === 1} onClick={previousPage}>
        &lt;
      </button>
      <span>{page}</span>
      <button disabled={page === lastPage} onClick={nextPage}>
        &gt;
      </button>
    </div>
  );
};
