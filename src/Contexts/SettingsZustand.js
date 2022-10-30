import create from "zustand";
import { devtools } from "zustand/middleware";

const { DateTime } = require("luxon");

let today = DateTime.now()
  .setZone("America/Los_Angeles")
  .toString()
  .split("T")[0];

const store = (set) => ({
  formType: "",
  setFormType: (formType) => set(() => ({ formType: formType })),
  isLoading: false,
  setIsLoading: (isLoading) => set(() => ({ isLoading: isLoading })),
  delivDate: today,
  setDelivDate: (delivDate) => set(() => ({ delivDate: delivDate })),
  delivTime: "",
  setDelivTime: (delivTime) => set(() => ({ delivTime: delivTime })),
  isEdit: false,
  setIsEdit: (isEdit) => set(() => ({ isEdit: isEdit })),
  isCreate: false,
  setIsCreate: (isCreate) => set(() => ({ isCreate: isCreate })),
  isChange: false,
  setIsChange: (isChange) => set(() => ({ isChange: isChange })),
  location: "",
  setLocation: (location) => set(() => ({ location: location })),
});

export const useSettingsStore = create(devtools(store));
