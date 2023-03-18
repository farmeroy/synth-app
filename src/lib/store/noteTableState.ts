import { selector } from "recoil";
import activeNotesState from "./activeNotesState";
import notesAtom from "./notesAtom";

// not used

const noteTableState = selector({
  key: "noteTable",
  get: ({ get }) => {
    const noteTable = [];
    const notes = get(notesAtom);
    for (const note of notes) {
      const activeNotes = get(activeNotesState(notes.indexOf(note)));
      noteTable.push([
        ...activeNotes.map((activeNote) => (activeNote ? note.note : null)),
      ]);
    }
    return noteTable;
  },
});

export default noteTableState;
