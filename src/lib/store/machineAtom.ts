import { atom } from "recoil";

export interface IMachineAtom {
  height: number;
  width: number;
  tempo: number;
}

const machineAtom = atom({
  key: "machine",
  default: {
    height: 3,
    width: 4,
    tempo: 120,
  },
});

export default machineAtom;
