import { atomFamily } from "recoil";

const defaultNotes = ["A", "C", "E", "A", "C", "E"];

const randomNote = () =>
  defaultNotes[Math.floor(Math.random() * defaultNotes.length)];

const randomOctave = () => Math.floor(Math.random() * 5) + 1;

const note = randomNote();
const octave = randomOctave();

const noteAtom = atomFamily({
  key: "note",
  default: {
    note,
    octave,
  },
});

export default noteAtom;
