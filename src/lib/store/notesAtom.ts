import { atom, selector } from "recoil";
import { Frequency } from "tone/build/esm/core/type/Units";
import noteState from "./noteState";
import machineNotesCount from "./machineNotesCount";

export interface INote {
  note: Frequency;
  waveShape: string;
  activeNotes: boolean[];
}

const allNotes = [
  { note: "a3", isActive: true },
  { note: "b3", isActive: true },
  { note: "c3", isActive: true },
  { note: "d3", isActive: true },
  { note: "e3", isActive: true },
  { note: "f3", isActive: true },
  { note: "g3", isActive: true },
  { note: "a4", isActive: false },
  { note: "b4", isActive: true },
  { note: "c4", isActive: true },
];

export type TNotes = INote[];

/** A 2d array of booleans that
 * decides if tone.js should play a note or not */

const notesAtom = atom({
  key: "notesObject",
  default: selector({
    key: "defaultNotes",
    get: ({ get }) => {
      return allNotes;
    },
  }),
});

export default notesAtom;
