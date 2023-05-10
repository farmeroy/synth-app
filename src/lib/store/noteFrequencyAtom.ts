import { atomFamily } from "recoil";
import { notes } from "../notesConfig.json";
import { INote } from "./notesAtom";

const noteFrequencyAtom = atomFamily({
  key: "noteFrequencyAtom",
  default: (noteName) => notes.find((note) => note.note == noteName) as INote,
});

export default noteFrequencyAtom;
