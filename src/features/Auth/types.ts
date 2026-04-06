export type User = {
  email: string,
  firstName: string,
  lastName: string,
}

export type Auth = {
  accessToken: string | null;
  user: User | null;
};

export type AuthContextValue = Auth & {
  login: (data: Auth) => void;
  logout: () => void;
};

