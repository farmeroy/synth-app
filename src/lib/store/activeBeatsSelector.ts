import { selector } from "recoil";
import beatsAtom from "./beatsAtom";
import activeBeatState from "./activeBeatsAtom";
import machineAtom from "./machineAtom";

/**
 * This keeps the active beats updated
 */
const activeBeatsSelector = selector({
  key: "activeBeatsSelector",
  get: ({ get }) => {
    const activeNotes = [];
    const machine = get(machineAtom);
    const numberOfNotes = machine.width;
    for (let i = 0; i < numberOfNotes; i++) {
      const activeBeats = get(activeBeatState(i));
      if (activeBeats.length < numberOfNotes) {
        activeBeats.push(false);
      }
      activeNotes.push(activeBeats);
    }
    return activeNotes;
  },
});

export default activeBeatsSelector;
