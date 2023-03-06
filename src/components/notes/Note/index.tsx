import { useRecoilState, useRecoilValue } from "recoil";
import activeNotesState from "../../../lib/store/activeNotesState";
import noteIsActive from "../../../lib/store/noteIsActive";
export interface NoteProps {
  note: string;
  index: number;
  indexRow: number;
}
const Note = ({ note, indexRow, index }: NoteProps) => {
  const [activeNotes, setActiveNotes] = useRecoilState(
    activeNotesState(indexRow)
  );
  const noteIsActiveState = useRecoilValue(noteIsActive(index));
  const handleUpdateIsActive = () => {
    const state = [...activeNotes];
    state[index] = !activeNotes[index];
    setActiveNotes([...state]);
  };

  const styleActive = "bg-gray-500";
  const styleCurrentBeat = "opacity-75";

  return (
    <button
      className={`border border-black w-full ${
        activeNotes[index] ? styleActive : null
      } ${noteIsActiveState ? styleCurrentBeat : null}`}
      onClick={handleUpdateIsActive}
    >{`${note} ${index}`}</button>
  );
};

export default Note;
