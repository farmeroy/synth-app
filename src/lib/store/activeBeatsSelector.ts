import { selectorFamily } from "recoil";
import beatsAtom from "./beatsAtom";

/**
 * This keeps the active beats updated
 */

const activeBeatsSelector = selectorFamily({
  key: "activeBeatsSelector",
  get:
    (id) =>
    ({ get }) => {
      const numberOfBeats = get(beatsAtom);
    },
});
