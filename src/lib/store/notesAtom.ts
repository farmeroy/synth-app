import { atom, selector } from "recoil";
import { Frequency } from "tone/build/esm/core/type/Units";
import machineAtom from "./machineAtom";
import noteState from "./noteState";

export interface INote {
  note: Frequency;
  waveShape: string;
  activeNotes: boolean[];
}

export type TNotes = INote[];

const notesAtom = atom({
  key: "notesObject",
  default: selector({
    key: "defaultNotes",
    get: ({ get }) => {
      const machine = get(machineAtom);
      const defaultNotes = [];
      for (let i = 0; i < machine.height; i++) {
        defaultNotes.push(get(noteState(i)));
      }
      return defaultNotes;
    },
  }),
});

export default notesAtom;
