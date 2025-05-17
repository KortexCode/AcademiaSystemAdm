import { create } from "zustand";

interface UserLogin {
  userName: string;
  token: string;
}

interface LoginSession {
  userLogin: UserLogin | null;
  logIn: (user: string, token: string) => void;
  logOut: () => void;
}

export const useAuthenticated = create<LoginSession>((set) => ({
  userLogin: null,
  logIn: (userName: string, token: string) =>
    set(() => {
      localStorage.setItem("username", userName);
      return {
        userLogin: { userName, token },
      };
    }),
  logOut: () =>
    set(() => {
      localStorage.removeItem("username");
      return {
        userLogin: null,
      };
    }),
}));
