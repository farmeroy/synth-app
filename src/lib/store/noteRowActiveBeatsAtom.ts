import { atomFamily } from "recoil";

const noteRowActiveBeatsAtom = atomFamily({
  key: "noteRowActiveBeatsAtom",
  default: [false, false, false, false],
});

export default noteRowActiveBeatsAtom;
