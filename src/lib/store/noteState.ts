import { atomFamily, selectorFamily } from "recoil";
import activeNotesState from "./activeNotesState";

const noteState = atomFamily({
  key: "noteState",
  default: selectorFamily({
    key: "defaultNoteState",
    get:
      (id) =>
      ({ get }) => {
        const activeNotes = get(activeNotesState(id));
        return {
          note: "A3",
          waveShape: "sine",
          activeNotes: [...activeNotes],
        };
      },
  }),
});

export default noteState;
