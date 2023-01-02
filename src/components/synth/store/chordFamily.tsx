import { atomFamily, selector } from "recoil";
import noteTableState from "./notesAtom";

const chordFamily = atomFamily({
  key: `chordFamily${Date.now()}`,
  default: selector({
    key: `chordFamilyDefault{Date.now()}`,
    get: ({ get }) => {
      const notes = get(noteTableState);
      const chord = notes.map((note) => ({ note: note, active: false }));
      return chord;
    },
  }),
});

export default chordFamily;
