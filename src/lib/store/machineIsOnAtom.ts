import { atom } from "recoil";

const machineIsOnAtom = atom({
  key: "machineIsOn",
  default: false,
});

export default machineIsOnAtom;
