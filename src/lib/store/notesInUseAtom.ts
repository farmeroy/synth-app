import { atom } from "recoil";

const notesInUseAtom = atom({
  key: "notesInUseAtom",
  default: [
    "a3",
    "c3",
    "d3",
    "g3",
    "a4",
    "c4",
    "d4",
    "g4",
    "a5",
    "c5",
    "d5",
    "g5",
  ],
});

export default notesInUseAtom;
