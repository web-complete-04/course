import { useEffect, useState } from "react";
import type { Boardgame } from "./types";
import { BoardgameCard } from "./BoardgameCard";

import styles from './Boardgames.module.css';
import { Api } from "../../utils/api";

const boardgames = new Api<Boardgame[]>('boardgames');

export function BoardgameList() {
  const [games, setGames] = useState<Boardgame[] | null>(null);

  useEffect(() => {
    void boardgames.readAll().then(setGames);
  }, []);

  return (
    <section className={styles.list}>
      <h1>Boardgames</h1>
      { !games && <strong>Loading ...</strong> }
      { games?.map((g) => <BoardgameCard key={g.id} game={g} />) }
    </section>
  );
}
