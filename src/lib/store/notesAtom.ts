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
  { note: "bb3", isActive: true },
  { note: "b3", isActive: true },
  { note: "c3", isActive: true },
  { note: "db3", isActive: true },
  { note: "d3", isActive: true },
  { note: "eb3", isActive: true },
  { note: "e3", isActive: true },
  { note: "f3", isActive: true },
  { note: "gb3", isActive: true },
  { note: "g3", isActive: true },
  { note: "ab4", isActive: false },
  { note: "a4", isActive: false },
  { note: "bb4", isActive: false },
  { note: "b4", isActive: false },
  { note: "c4", isActive: false },
  { note: "db4", isActive: false },
  { note: "d4", isActive: false },
  { note: "eb4", isActive: false },
  { note: "e4", isActive: false },
  { note: "f4", isActive: false },
  { note: "gb4", isActive: false },
  { note: "g4", isActive: false },
  { note: "ab5", isActive: false },
  { note: "a5", isActive: false },
  { note: "bb5", isActive: false },
  { note: "b5", isActive: false },
  { note: "c5", isActive: false },
  { note: "db5", isActive: false },
  { note: "d5", isActive: false },
  { note: "eb5", isActive: false },
  { note: "e5", isActive: false },
  { note: "f5", isActive: false },
  { note: "gb5", isActive: false },
  { note: "g5", isActive: false },
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
