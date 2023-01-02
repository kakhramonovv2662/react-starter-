import create from "zustand";
import { persist } from "zustand/middleware";

interface IUser {
  avatar: string;
  userName: string;
  email: string;
  authority: any[];
}
interface ISession {
  session: {
    signedIn: boolean;
  };
}

const userInitialState = {
  avatar: "",
  userName: "",
  email: "",
  authority: [],
};

export const useAuthStore = create(
  persist(
    (set) => ({
      session: {
        token: "",
        signedIn: false,
      },
      user: userInitialState,
      setUser: (value: IUser) => set(() => ({ user: value })),
      userLoggedOut: () => userInitialState,
      onSignInSuccess: (value: string) =>
        set(() => ({
          session: {
            token: value,
            signedIn: true,
          },
        })),
      onSignOutSuccess: () =>
        set(() => ({
          session: {
            token: "",
            signedIn: false,
          },
        })),
      setToken: (value: string) =>
        set((state: ISession) => ({
          session: {
            token: value,
            signedIn: state.session.signedIn,
          },
        })),
    }),
    {
      name: "auth",
    }
  )
);

export default userInitialState;
