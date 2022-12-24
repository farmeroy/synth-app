import { atom } from "recoil";
import cnf from "../../../lib/config.json";

/**
 * {
 * notes: [
 * {note: C4,
 * isActive: false}
 * ]
 * }
 */

const createNoteTable = (noteDefaults: string[], length: number) => {
  const notes = [];
  for (let i = 0; i < length; i++) {
    notes.push(noteDefaults);
  }
  return notes;
};

const notesAtom = atom({
  key: `notesAtom${Date.now()}`,
  default: createNoteTable(cnf.notes, cnf.length),
});

export default notesAtom;
