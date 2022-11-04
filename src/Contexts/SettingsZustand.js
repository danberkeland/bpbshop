import create from "zustand";
import { devtools } from "zustand/middleware";

  
const { DateTime } = require("luxon");

let now = DateTime.now().setZone("America/Los_Angeles");

let newDate = new Date(Date.parse(now));
let newTime = new Date(Date.parse("01 Jan 2022 07:00:00"));

console.log('newDate', newDate)


const store = (set) => ({
  formType: "",
  setFormType: (formType) => set(() => ({ formType: formType })),
  isLoading: false,
  setIsLoading: (isLoading) => set(() => ({ isLoading: isLoading })),
  delivDateProgram: newDate,
  setDelivDateProgram: (delivDateProgram) => set(() => ({ delivDateProgram: delivDateProgram })),
  delivDate: now,
  setDelivDate: (delivDate) => set(() => ({ delivDate: delivDate })),
  delivTimeProgram: newTime,
  setDelivTimeProgram: (delivTimeProgram) => set(() => ({ delivTimeProgram: delivTimeProgram })),
  delivTime: "",
  setDelivTime: (delivTime) => set(() => ({ delivTime: delivTime })),
  isEdit: false,
  setIsEdit: (isEdit) => set(() => ({ isEdit: isEdit })),
  isCreate: false,
  setIsCreate: (isCreate) => set(() => ({ isCreate: isCreate })),
  isChange: false,
  setIsChange: (isChange) => set(() => ({ isChange: isChange })),
  location: "carlton",
  setLocation: (location) => set(() => ({ location: location })),
  selected: [],
  setSelected: (selected) => set(() => ({ selected: selected })),
  cartOrder: [],
  setCartOrder: (cartOrder) => set(() => ({ cartOrder: cartOrder })),
});

export const useSettingsStore = create(devtools(store));
