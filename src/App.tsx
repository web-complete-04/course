import { Route, Routes } from "react-router";
import { BoardgameList } from "./features/Boardgames/BoardgameList";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<BoardgameList />} />
    </Routes>
  )
}
