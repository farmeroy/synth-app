import { atom } from "recoil";

const machineTempoAtom = atom({
  key: "machineTempo",
  default: 120,
});

export default machineTempoAtom;
