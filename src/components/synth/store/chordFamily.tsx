import { atomFamily, selector } from "recoil";
import notesAtom from "./notesAtom";

const chordFamily = atomFamily({
  key: `chordFamily${Date.now()}`,
  default: selector({
    key: `chordFamilyDefault{Date.now()}`,
    get: ({ get }) => {
      const notes = get(notesAtom);
      const chord = notes.map((note) => ({ note: note, active: false }));
      return chord;
    },
  }),
});

export default chordFamily;
