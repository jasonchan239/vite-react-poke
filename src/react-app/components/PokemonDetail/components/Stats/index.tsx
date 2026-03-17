import { HeightIcon, WeightIcon } from '../../../../assets/stats';
import { IPokemon } from '../../../../interfaces/interfaces';

import styles from './styles.module.css';

interface Props {
  pokemon: IPokemon | null;
}

export const Stats = ({ pokemon }: Props) => {
  return (
    <div className={styles.stats}>
      <div className={styles.item}>
        <WeightIcon />
        <span>{pokemon?.weight! / 10 + ` kg`} </span>
        <p>Weight</p>
      </div>
      <div className={styles.item}>
        <HeightIcon />
        <span>{pokemon?.height! / 10 + ` m`} </span>
        <p>Height</p>
      </div>
    </div>
  );
};
