import { atom } from "recoil";

const tableAtom = atom({
  key: `tableAtom`,
  default: { width: 9, height: 1 },
});

export default tableAtom;
