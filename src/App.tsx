import { Route, Routes } from "react-router";
import { BoardgameList } from "./features/Boardgames/BoardgameList";
import { BoardgameDetails } from "./features/Boardgames/BoardgameDetails";
import { BoardgameAddForm } from "./features/Boardgames/BoardgameAddForm";
import { Register } from "./features/Auth/Register";
import { Parent } from "./features/Communication/Parent";
import { Login } from "./features/Auth/Login";
import { Nav } from "./components/Nav/Nav";
import { NotFound } from "./features/NotFound/NotFound";
import { AuthContextProvider } from "./features/Auth/context/AuthContextProvider";
import { BoardgameEditForm } from "./features/Boardgames/BoardgameEditForm";
import { ProtectedRoute } from "./features/Auth/context/ProtectedRoute";

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
        <Route path="boardgames/:id/edit" element={<ProtectedRoute><BoardgameEditForm /></ProtectedRoute>} />
        <Route path="boardgames/add" element={<ProtectedRoute><BoardgameAddForm /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContextProvider>
  )
}
