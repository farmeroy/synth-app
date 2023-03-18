import { selector } from "recoil";
import beatsAtom from "./beatsAtom";

const beatsSelector = selector({
  key: "updateBeats",
  get: ({ get }) => {
    const numberOfBeats = get(beatsAtom);
    const;
  },
});
