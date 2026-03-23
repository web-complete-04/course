import { useEffect, useState } from "react";
import type { Boardgame } from "./types";
import { BoardgameCard } from "./BoardgameCard";

import styles from './Boardgames.module.css';

export function BoardgameList() {
  const [games, setGames] = useState<Boardgame[] | null>(null);

  useEffect(() => {
    fetch("/api/boardgames?_limit=10")
      .then((res) => res.json())
      .then(setGames)
      .catch(console.error);
  }, []);

  return (
    <section className={styles.list}>
      <h1>Boardgames</h1>
      { !games && <strong>Loading ...</strong> }
      { games?.map((g) => <BoardgameCard key={g.id} game={g} />) }
    </section>
  );
}
