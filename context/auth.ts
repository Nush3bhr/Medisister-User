import create, { useStore } from "zustand";
import { persist } from "zustand/middleware";

import AsyncStorage from "@react-native-async-storage/async-storage";
export type User = {
  id: string;
  email: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  phone: string;
  countryCode: string;
  address: {
    line1: string;
    city: string;
    state: string;
    pinCode: string;
  };
  referralCode: string | undefined;
  isFirstTime: boolean | undefined;
  avatar: string | undefined;
  otp: string | undefined;
  isOtpVerified: boolean | undefined;
  createdAt: Date;
  updatedAt: Date;
};

interface AuthStoreState {
  state: {
    user: User;
  };
  login: (arg0: User) => void;
  logout: () => void;
}

export const useAuthStore = create(
  persist<AuthStoreState>(
    (setState, getState) => ({
      state: { user: {} as User },
      login: (user: User) => {
        setState({ state: { ...getState().state, user } });
      },
      logout: () => {
        setState({ state: { ...getState().state, user: {} as User } });
      },
    }),
    {
      name: "auth", // unique name
      getStorage: () => AsyncStorage, // (optional) by default the 'localStorage' is used
    }
  )
);
