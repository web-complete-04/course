import { Route, Routes } from "react-router";
import { BoardgameList } from "./features/Boardgames/BoardgameList";
import { BoardgameDetails } from "./features/Boardgames/BoardgameDetails";
import { Register } from "./features/Auth/Register";
import { Nav } from "./components/Nav/Nav";
import { NotFound } from "./features/NotFound/NotFound";

import './App.css';
import './Forms.css';

export function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<BoardgameList />} />
        <Route path="register" element={<Register />} />
        <Route path="boardgames/:id" element={<BoardgameDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
