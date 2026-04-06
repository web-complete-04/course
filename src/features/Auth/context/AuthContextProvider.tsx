import { type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import type { Auth } from "../types";
import { useStorageState } from "../../../hooks/useStorageState";

const initialAuthValue: Auth = {
  accessToken: null,
  user: null,
};

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth, removeAuth] = useStorageState('auth', initialAuthValue);

  function login(data: Auth) {
    setAuth(data);
  }

  function logout() {
   removeAuth();
  }

  return (
    <AuthContext value={{ ...auth, login, logout }}>{children}</AuthContext>
  );
}
