import { atom } from "recoil";

const currentRowAtom = atom({
  key: "currentRow",
  default: 0,
});

export default currentRowAtom;
