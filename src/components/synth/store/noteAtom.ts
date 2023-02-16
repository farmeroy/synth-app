import { atomFamily } from "recoil";

const defaultNotes = ["A3", "C3", "E3", "A4", "C4", "E4"];

const id = Math.random();
const randomNote = () =>
  defaultNotes[Math.floor(Math.random() * defaultNotes.length)];

const note = randomNote();
const noteAtom = atomFamily({
  key: "note",
  default: {
    note: note,
  },
});

export default noteAtom;
