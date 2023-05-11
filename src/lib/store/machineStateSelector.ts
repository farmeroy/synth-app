import { selector } from "recoil";
import notesInUseAtom from "./notesInUseAtom";
import activeNotesState from "./activeNotesState";
import noteAtomFamily from "./noteAtomFamily";
import machineBeatsCount from "./machineBeatsCount";
import { TNoteName } from "./notesAtom";
import { Frequency } from "tone/build/esm/core/type/Units";

interface IMachineState {
  beats: number;
  notes: { note: string; frequency: number; noteRow: boolean[] }[];
}

const machineStateSelector = selector({
  key: "machineStateSelector",
  get: ({ get }) => {
    const notesInUse = get(notesInUseAtom);
    const machineState: IMachineState = {
      beats: get(machineBeatsCount),
      notes: [],
      notesInUse,
    };
    for (const note of notesInUse) {
      const noteRow = get(activeNotesState(note));
      const noteState = get(noteAtomFamily(note));
      machineState.notes.push({ noteState, noteRow });
    }
    return machineState;
  },
});

export default machineStateSelector;
