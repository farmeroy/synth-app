import { atom } from "recoil";

export const IMachineAtom = {
  height: Number,
  width: Number,
  tempo: Number,
};

const machineAtom = atom({
  key: "machine",
  default: {
    height: 4,
    width: 8,
    tempo: 120,
  },
});

export default machineAtom;
