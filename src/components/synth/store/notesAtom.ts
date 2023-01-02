import { atom } from "recoil";
import cnf from "../../../lib/config.json";

const createNoteTable = (noteDefaults: string[], length: number) => {
  const notes = [];
  for (let i = 0; i < length; i++) {
    notes.push(noteDefaults);
  }
  return notes;
};

const noteTableState = atom({
  key: `notesAtom${Date.now()}`,
  default: [
    { note: "A3" },
    { note: "C3" },
    { note: "E3" },
    { note: "A4" },
    { note: "G4" },
    { note: "A5" },
    { note: "A4" },
    { note: "A4" },
    { note: "A4" },
  ],
});

export default noteTableState;
