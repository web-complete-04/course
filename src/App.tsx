import { Route, Routes } from "react-router";
import { BoardgameList } from "./features/Boardgames/BoardgameList";
import { BoardgameDetails } from "./features/Boardgames/BoardgameDetails";
import { Register } from "./features/Auth/Register";
import { Parent } from "./features/Communication/Parent";
import { Login } from "./features/Auth/Login";
import { Nav } from "./components/Nav/Nav";
import { NotFound } from "./features/NotFound/NotFound";
import { AuthContextProvider } from "./features/Auth/context/AuthContextProvider";

import './App.css';
import './Forms.css';

export function App() {
  return (
    <AuthContextProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<BoardgameList />} />
        <Route path="comm" element={<Parent />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="boardgames/:id" element={<BoardgameDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContextProvider>
  )
}
