import { selectorFamily } from "recoil";
import currentBeatAtom from "./currentBeatAtom";

const noteIsActive = selectorFamily({
  key: "noteIsActive",
  get:
    (index) =>
    ({ get }) => {
      const currentBeat = get(currentBeatAtom);
      return currentBeat === index;
    },
});

export default noteIsActive;
