import { O } from "vitest/dist/chunks/reporters.d.79o4mouw";
import { create } from "zustand";

interface UserLogin {
  userName: string;
  token: string;
}

interface LoginSession {
  userLogin: UserLogin |  null;
  logIn : (user: string, token: string) => void;
  logOut : () => void;
  
}

export const useAuthenticated = create<LoginSession>((set) => ({
  userLogin : null,
  logIn : (userName: string, token: string) => set(() => (
    {
      userLogin: {userName, token}
    }
  )),
  logOut: () => set(() => (
    {
      userLogin: null,
    }
  )),
}));


