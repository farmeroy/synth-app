import { atom, selector } from "recoil";
import { Frequency } from "tone/build/esm/core/type/Units";

export interface INote {
  note: string;
  frequency: Frequency;
  isActive: boolean;
}

const allNotes = [
  { note: "a3", frequency: 110.0, isActive: true },
  { note: "bb3", frequency: 116.54, isActive: false },
  { note: "b3", frequency: 123.47, isActive: false },
  { note: "c3", frequency: 130.81, isActive: true },
  { note: "db3", frequency: 138.59, isActive: false },
  { note: "d3", frequency: 146.83, isActive: true },
  { note: "eb3", frequency: 155.56, isActive: false },
  { note: "e3", frequency: 164.81, isActive: true },
  { note: "f3", frequency: 174.61, isActive: false },
  { note: "gb3", frequency: 185.0, isActive: false },
  { note: "g3", frequency: 196.0, isActive: true },
  { note: "ab3", frequency: 207.65, isActive: false },
  { note: "a4", frequency: 220.0, isActive: true },
  { note: "bb4", frequency: 233.08, isActive: false },
  { note: "b4", frequency: 246.94, isActive: false },
  { note: "c4", frequency: 261.63, isActive: true },
  { note: "db4", frequency: 277.18, isActive: false },
  { note: "d4", frequency: 293.66, isActive: true },
  { note: "eb4", frequency: 311.13, isActive: false },
  { note: "e4", frequency: 329.63, isActive: true },
  { note: "f4", frequency: 349.23, isActive: false },
  { note: "gb4", frequency: 369.99, isActive: false },
  { note: "g4", frequency: 392.0, isActive: true },
  { note: "ab4", frequency: 415.3, isActive: false },
  { note: "a5", frequency: 440.0, isActive: true },
  { note: "bb5", frequency: 466.16, isActive: false },
  { note: "b5", frequency: 493.88, isActive: false },
  { note: "c5", frequency: 523.25, isActive: true },
  { note: "db5", frequency: 554.37, isActive: false },
  { note: "d5", frequency: 587.33, isActive: true },
  { note: "eb5", frequency: 622.25, isActive: false },
  { note: "e5", frequency: 659.25, isActive: true },
  { note: "f5", frequency: 698.46, isActive: false },
  { note: "gb5", frequency: 739.99, isActive: false },
  { note: "g5", frequency: 783.99, isActive: true },
  { note: "ab5", frequency: 830.61, isActive: false },
];

/** a 2d array of booleans that
 * decides if tone.js should play a note or not */

const notesAtom = atom({
  key: "notesObject",
  default: selector({
    key: "defaultNotes",
    get: () => {
      return allNotes;
    },
  }),
  effects: [
    ({ onSet }) => {
      onSet((notes) => {
        localStorage.setItem("notes", JSON.stringify(notes));
      });
    },
  ],
});

export default notesAtom;
