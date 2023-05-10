import { atomFamily } from "recoil";
import { notes } from "../notesConfig.json";

const noteFrequencyAtom = atomFamily({
  key: "noteFrequencyAtom",
  default: (noteName) => notes.find((note) => note.note == noteName),
});

export default noteFrequencyAtom;
