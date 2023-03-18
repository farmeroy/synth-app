import { atom } from "recoil";

const beatsAtom = atom({
  key: "beats",
  default: 4,
});

export default beatsAtom;
