import { selector } from "recoil";
import tableAtom from "./tableAtom";
import noteAtom from "./noteAtom";

const noteTableState = selector({
  key: `notesAtom${Date.now()}`,
  get: ({ get }) => {
    const table = get(tableAtom);
    const notes = [];
    for (let i = 0; i < table.width; i++) {
      notes.push(get(noteAtom(i)));
    }
    return notes;
  },
});

export default noteTableState;
