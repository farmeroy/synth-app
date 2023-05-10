import { selectorFamily } from "recoil";
import machineBeatsCount from "./machineBeatsCount";
import noteIsPlayingAtom from "./noteIsPlayingAtom";

const noteRowActiveBeatsAtom = selectorFamily({
  key: "noteRowActiveBeatsAtom",
  get:
    (note: string) =>
    ({ get }) => {
      const beats = get(machineBeatsCount);
      let activeBeats = [];
      for (let i = 0; i < beats; i++) {
        const isPlayingState = get(noteIsPlayingAtom(`${note}-${i}`));
        activeBeats.push(isPlayingState);
      }
      return activeBeats;
    },
});

export default noteRowActiveBeatsAtom;
