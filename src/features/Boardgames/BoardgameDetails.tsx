import { useEffect, useState, type ReactNode } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { FaHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import Modal from "react-modal";
import type { Boardgame } from "./types";
import { Api } from "../../utils/api";
import { useAuth } from "../Auth/context/useAuth";

import styles from "./BoardgameDetails.module.css";

const boardgames = new Api("boardgames");

function getStars(num: number) {
  const flooredNum = Math.floor(num);
  const ret: ReactNode[] = [];
  for (let i = 0; i < flooredNum; i++) {
    ret.push(<FaStar />);
  }

  if (num >= flooredNum + 0.5) {
    ret.push(<FaStarHalfAlt />);
  }

  return ret;
}

export function BoardgameDetails() {
  const [game, setGame] = useState<Boardgame | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { id } = useParams();

  const { user, accessToken } = useAuth();
  const navigate = useNavigate();

  if (accessToken) {
    boardgames.setAsAuthRequired(accessToken);
  }

  useEffect(() => {
    if (!id) return;

    void boardgames.readOne<Boardgame>(id).then(setGame);
  }, [id]);

  async function handleDelete() {
    if (!game?.id || user?.id !== game.userId) return;

    await boardgames.remove(game.id);

    toast.success(`"${game.name}" has been successfully deleted!`);

    void navigate(-1);
  }

  function handleOpenDeleteConfirmation() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  if (!game) {
    return <strong>Loading Game...</strong>;
  }

  if (!game.name) {
    return <h1>Game not found</h1>;
  }

  return (
    <>
      <h1>{game.name}</h1>
      {user?.id && user.id === game.userId && (
        <>
          <Link to="edit">Edit this game</Link>
          <button type="button" onClick={handleOpenDeleteConfirmation}>
            Delete this game
          </button>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            contentLabel="Delete Game Modal"
            className={styles.Modal}
            overlayClassName={styles.Overlay}
          >
            <h2>Delete "{game.name}"?</h2>
            <p>Are you sure you want to delete "{game.name}"?</p>
            <button type="button" onClick={handleCloseModal}>
              Cancel
            </button>
            <button type="button" onClick={handleDelete}>
              Delete "{game.name}"
            </button>
          </Modal>
        </>
      )}
      {getStars(game.average)}
      <div>
        Number of Players:
        <table border={1}>
          <thead>
            <tr>
              <th>Min</th>
              <th>Recommended</th>
              <th>Max</th>
              <th>
                Best <FaHeart />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{game.numberOfPlayers.min}</td>
              <td>{game.numberOfPlayers.recommended}</td>
              <td>{game.numberOfPlayers.max}</td>
              <td>{game.numberOfPlayers.best}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        Alternate Names:
        {game.alternateNames.map((name) => (
          <p key={name}>{name}</p>
        ))}
      </div>
      <img src={game.image} alt={`"${game.name}" poster`} />
      <Link to={`/boardgames/${String(Number(id) - 1)}`}>
        Previous Game
      </Link>{" "}
      <Link to={`/boardgames/${String(Number(id) + 1)}`}>Next Game</Link>
    </>
  );
}
