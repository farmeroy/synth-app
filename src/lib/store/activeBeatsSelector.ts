import { selector } from "recoil";
import noteRowActiveBeatsAtom from "./noteRowActiveBeatsAtom";
import machineBeatsCount from "./machineBeatsCount";

/**
 * This keeps the active beats updated
 */
const activeBeatsSelector = selector({
  key: "activeBeatsSelector",
  get: ({ get }) => {
    const activeNotes = [];
    const numberOfNotes = get(machineBeatsCount);
    for (let i = 0; i < numberOfNotes; i++) {
      const activeBeats = get(noteRowActiveBeatsAtom(i));
      if (activeBeats.length < numberOfNotes) {
        activeBeats.push(false);
      }
      activeNotes.push(activeBeats);
    }
    return activeNotes;
  },
});

export default activeBeatsSelector;
