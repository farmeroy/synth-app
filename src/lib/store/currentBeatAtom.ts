import { atom } from "recoil";
// tracks the current beat in the tone.Transport
const currentBeatAtom = atom({
  key: "noteRowActiveBeatsAtom",
  default: 0,
});

export default currentBeatAtom;
