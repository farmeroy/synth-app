import { atom, selector } from "recoil";
import { Frequency } from "tone/build/esm/core/type/Units";
import noteState from "./noteState";
import machineNotesCount from "./machineNotesCount";

export interface INote {
  note: Frequency;
  waveShape: string;
  activeNotes: boolean[];
}

export type TNotes = INote[];

/** A 2d array of booleans that
 * decides if tone.js should play a note or not */

const notesAtom = atom({
  key: "notesObject",
  default: selector({
    key: "defaultNotes",
    get: ({ get }) => {
      const notesCount = get(machineNotesCount);
      const defaultNotes = [];
      for (let i = 0; i < notesCount; i++) {
        defaultNotes.push(get(noteState(i)));
      }
      return defaultNotes;
    },
  }),
});

export default notesAtom;
