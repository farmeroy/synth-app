import { selectorFamily } from "recoil";
import activeBeatState from "./currentBeatState";

const noteIsActive = selectorFamily({
  key: "noteIsActive",
  get:
    (index) =>
    ({ get }) => {
      const currentBeat = get(activeBeatState);
      return currentBeat === index;
    },
});

export default noteIsActive;
