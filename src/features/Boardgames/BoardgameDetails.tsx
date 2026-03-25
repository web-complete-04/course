import { useEffect, useState, type ReactNode } from "react";
import { Link, useParams } from "react-router";
import { FaHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import type { Boardgame } from "./types";

function getStars(num: number) {
  const flooredNum = Math.floor(num);
  const ret: ReactNode[] = [];
  for(let i = 0; i < flooredNum; i++) {
    ret.push(<FaStar />);
  }

  if(num >= (flooredNum + 0.5)) {
    ret.push(<FaStarHalfAlt />);
  }

  return ret;
}

export function BoardgameDetails() {
  const [game, setGame] = useState<Boardgame | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    fetch(`/api/boardgames/${id}`)
      .then((res) => res.json())
      .then(setGame)
      .catch(console.warn);
  }, [id]);

  if (!game) {
    return <strong>Loading Game...</strong>;
  }

  if (!game.name) {
    return <h1>Game not found</h1>;
  }

  return (
    <>
      <h1>{game.name}</h1>
      {getStars(game.average)}
      <div>
        Number of Players: 
        <table border={1}>
          <thead>
            <tr>
              <th>Min</th>
              <th>Recommended</th>
              <th>Max</th>
              <th>Best <FaHeart /></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {game.numberOfPlayers.min}
              </td>
              <td>
                {game.numberOfPlayers.recommended}
              </td>
              <td>
                {game.numberOfPlayers.max}
              </td>
              <td>
                {game.numberOfPlayers.best}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        Alternate Names: 
        {game.alternateNames.map((name) => <p key={name}>{name}</p>)}
      </div>

      <img src={game.image} alt={`"${game.name}" poster`} />
      <Link to={`/boardgames/${String(Number(id) - 1)}`}>Previous Game</Link>{" "}
      <Link to={`/boardgames/${String(Number(id) + 1)}`}>Next Game</Link>
    </>
  );
}
