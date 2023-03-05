import { atom } from "recoil";
import { Frequency } from "tone/build/esm/core/type/Units";

export interface INote {
  note: Frequency;
  waveShape: string;
  activeNotes: boolean[];
}

export type TNotes = INote[];

const notesAtom = atom({
  key: "notesObject",
  default: [
    {
      note: "A3",
      waveShape: "sine",
      activeNotes: [true, false, false, true],
    },
    {
      note: "C4",
      waveShape: "sine",
      activeNotes: [true, false, true, true],
    },
    {
      note: "E4",
      waveShape: "sine",
      activeNotes: [true, true, false, true],
    },
  ],
});

export default notesAtom;
