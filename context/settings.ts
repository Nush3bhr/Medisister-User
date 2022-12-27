import create, { useStore } from "zustand";
import { persist } from "zustand/middleware";

import AsyncStorage from "@react-native-async-storage/async-storage";

interface SettingsStoreState {
  state: {
    onBoarded: boolean;
    headerShown: boolean;
  };
  setOnBoarded: (arg0: boolean) => void;
  setHeaderShown: (arg0: boolean) => void;
}

export const useSettingsStore = create(
  persist<SettingsStoreState>(
    (setState, getState) => ({
      state: { onBoarded: false, headerShown: true },
      setOnBoarded: (onBoarded: boolean) => {
        setState({ state: { ...getState().state, onBoarded } });
      },
      setHeaderShown: (headerShown: boolean) => {
        setState({ state: { ...getState().state, headerShown } });
      },
    }),
    {
      name: "settings", // unique name
      getStorage: () => AsyncStorage, // (optional) by default the 'localStorage' is used
    }
  )
);
