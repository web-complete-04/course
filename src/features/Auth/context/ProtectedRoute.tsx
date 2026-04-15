import type { ReactNode } from "react";
import { useAuth } from "./useAuth";
import { Navigate, useLocation } from "react-router";

export function ProtectedRoute({children}: {children: ReactNode}) {
  const {user} = useAuth();
  const {pathname} = useLocation();

  if(!user) {
    return <Navigate to="/login" state={{from: pathname}} />
  }

  return children;
}
