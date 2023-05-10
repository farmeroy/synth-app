import { atomFamily } from "recoil";

const noteIsPlayingAtom = atomFamily({
  key: "noteIsPlayingAtom",
  default: false,
});

export default noteIsPlayingAtom;
