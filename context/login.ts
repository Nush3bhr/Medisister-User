import create, { useStore } from "zustand";
import { persist } from "zustand/middleware";

import AsyncStorage from "@react-native-async-storage/async-storage";

interface LoginStore {
  state: {
    phone: string;
    countryCode: string;
    referralCode: string;
    option: string;
  };
  update: (arg0: Object) => void;
}

export const useLoginStore = create<LoginStore>((setState, getState) => ({
  state: { phone: "", countryCode: "+91", option: "SMS", referralCode: "" },
  update: (user: Object) => {
    setState({ state: { ...getState().state, ...user } });
  },
  reset: () =>
    setState({
      state: { phone: "", countryCode: "+91", option: "SMS", referralCode: "" },
    }),
}));
