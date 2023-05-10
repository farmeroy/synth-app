import { selectorFamily } from "recoil";
import noteRowActiveBeatsAtom from "./noteRowActiveBeatsAtom";

export type TActiveNotes = boolean[];

// an array of the current notes that should play

const activeNotesState = selectorFamily({
  key: "defaultActiveNotes",
  get:
    (id: string) =>
    ({ get }) => {
      const activeNotes = get(noteRowActiveBeatsAtom(id));
      return activeNotes;
    },
});

export default activeNotesState;
