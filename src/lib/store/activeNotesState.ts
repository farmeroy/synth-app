import { selectorFamily, selector } from "recoil";
import noteRowActiveBeatsAtom from "./noteRowActiveBeatsAtom";
import machineBeatsCount from "./machineBeatsCount";

export type TActiveNotes = boolean[];

// an array of the current notes that should play
// ensures that the active notes are always the same
// as the width of the machine

const activeNotesState = selectorFamily({
  key: "defaultActiveNotes",
  get:
    (id) =>
    ({ get }) => {
      const activeNotes = get(noteRowActiveBeatsAtom(id));
      const numberOfNotes = get(machineBeatsCount);
      const notesToAdd = [];
      if (activeNotes.length < numberOfNotes) {
        for (let i = numberOfNotes - activeNotes.length; i > 0; i--) {
          notesToAdd.push(false);
        }
        return [...activeNotes, ...notesToAdd];
      } else if (activeNotes.length > numberOfNotes) {
        return activeNotes.slice(0, numberOfNotes);
      } else {
        return activeNotes;
      }
    },
});

export default activeNotesState;
