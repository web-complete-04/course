import { use } from "react";
import { AuthContext } from "./AuthContext";

export function useAuth() {
  const ctx = use(AuthContext);
  if (!ctx) {
    throw new Error(
      `useAuth can be used only in descendants of AuthContextProvider!`,
    );
  }
  return ctx;
}
