import { atomFamily } from "recoil";
import notes from "../notesConfig.json";
import { INote } from "./notesAtom";

const noteNames = notes.notes;

const noteFrequencyAtom = atomFamily({
  key: "noteFrequencyAtom",
  default: (noteName) =>
    noteNames.find((note) => note.note == noteName) as INote,
});

export default noteFrequencyAtom;
