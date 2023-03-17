import { atomFamily, selector } from "recoil";
import activeBeatState from "./activeBeatsAtom";
import machineAtom from "./machineAtom";

export type TActiveNotes = boolean[];

// an array of the current notes that should play

const activeNotesState = atomFamily({
  key: "activeNotesState",
  default: selector({
    key: "defaultActiveNotes",
    get: ({ get }) => {
      const activeNotes = [];
      const machine = get(machineAtom);
      const numberOfNotes = machine.width;
      for (let i = 0; i < numberOfNotes; i++) {
        const activeBeats = get(activeBeatState(i));
        activeNotes.push(activeBeats);
      }
      return activeNotes;
    },
    set: ({ get, set }, value) => {
      const machine = get(machineAtom);
      const numberOfNotes = machine.width;
      for (let i = 0; i < numberOfNotes; i++) {
        const;
      }
    },
  }),
});

export default activeNotesState;
