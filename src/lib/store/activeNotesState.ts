import { atomFamily, selectorFamily } from "recoil";
import machineAtom from "./machineAtom";

const activeNotesState = atomFamily({
  key: "activeNotesState",
  default: selectorFamily({
    key: "defaultActiveNotes",
    get:
      (id) =>
      ({ get }) => {
        const activeNotes = [];
        const machine = get(machineAtom);
        const numberOfNotes = machine.width;
        for (let i = 0; i < numberOfNotes; i++) {
          activeNotes.push(false);
        }
        return activeNotes;
      },
  }),
});

export default activeNotesState;
