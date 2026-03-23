import { Link } from "react-router";
import type { Boardgame } from "./types";

import styles from './Boardgames.module.css';

type Props = {
  game: Boardgame;
}

export function BoardgameCard({ game }: Props) {
  return (
    <article className={styles.card}>
      <Link to="/">
        <img src={game.image} alt={`Poster for ${game.name}`} width="100" />
        <h2>{game.name}</h2>
      </Link>
    </article>
  )
}
