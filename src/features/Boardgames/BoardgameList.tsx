import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import type { Boardgame } from "./types";
import { BoardgameCard } from "./BoardgameCard";

import styles from './Boardgames.module.css';
import { Api } from "../../utils/api";
import { useAuth } from "../Auth/context/useAuth";
import { Link } from "react-router";

const boardgames = new Api('boardgames');

export function BoardgameList() {
  const [games, setGames] = useState<Boardgame[] | null>(null);
  const {user} = useAuth();

  useEffect(() => {
    void boardgames.readAll<Boardgame[]>(29).then(setGames);
  }, []);

  return (
    <section className={styles.list}>
      <h1>Boardgames</h1>
      { !games && <strong>Loading ...</strong> }
      { games?.map((g) => <BoardgameCard key={g.id} game={g} />) }

      {user && <Link to="/boardgames/add" className={styles.addBtn}><FaPlus /></Link>}
    </section>
  );
}
