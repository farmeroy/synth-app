import { selectorFamily, selector } from "recoil";
import activeBeatState from "./activeBeatsAtom";
import machineAtom from "./machineAtom";

export type TActiveNotes = boolean[];

// an array of the current notes that should play

const activeNotesState = selectorFamily({
  key: "defaultActiveNotes",
  get:
    (id) =>
    ({ get }) => {
      const activeNotes = get(activeBeatState(id));
      const machine = get(machineAtom);
      const numberOfNotes = machine.width;
      const notesToAdd = [];
      if (activeNotes.length < numberOfNotes) {
        for (let i = numberOfNotes - activeNotes.length; i > 0; i--) {
          notesToAdd.push(false);
        }
      }
      return [...activeNotes, ...notesToAdd];
    },
});

export default activeNotesState;
