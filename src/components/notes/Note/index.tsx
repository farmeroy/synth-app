import { useRecoilState } from "recoil";
import activeNotesState from "../../../lib/store/activeNotesState";

export interface NoteProps {
  note: string;
  index: number;
  indexRow: number;
}
const Note = ({ note, indexRow, index }: NoteProps) => {
  const [activeNotes, setActiveNotes] = useRecoilState(
    activeNotesState(indexRow)
  );
  const handleUpdateIsActive = () => {
    const state = [...activeNotes];
    state[index] = !activeNotes[index];
    setActiveNotes([...state]);
  };

  const styleActive = "bg-gray-500";

  return (
    <button
      className={`border border-black w-full ${
        activeNotes[index] ? styleActive : null
      }`}
      onClick={handleUpdateIsActive}
    >{`${note} ${index}`}</button>
  );
};

export default Note;
