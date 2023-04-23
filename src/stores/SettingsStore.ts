import { create } from "zustand";

export type NameModes = "origin" | "shortName" | "chinese";

interface State {
  // displayShortName: boolean;
  nameMode: NameModes;
}

interface Actions {
  // updateDisplayShortName: (checked: boolean) => void;
  updateNameMode: (mode: NameModes) => void;
}

type SettingsStore = State & Actions;

export const useSettingsStore = create<SettingsStore>()((set, get) => ({
  // state
  nameMode: "origin",

  // actions
  updateNameMode: (mode) =>
    set((state) => ({ nameMode: mode })),
}));
