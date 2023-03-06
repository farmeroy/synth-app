import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import noteState from "../../../lib/store/noteState";

interface NoteControlsProps {
  index: number;
}

const notes = ["A3", "B3", "C3", "D3", "E3", "F3", "G3"];

const NoteControls = ({ index }: NoteControlsProps) => {
  const [noteRow, setNoteRow] = useRecoilState(noteState(index));
  const handleSetNote = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setNoteRow({ ...noteRow, note: e.currentTarget.value });
  };

  return (
    <>
      <select onChange={handleSetNote} defaultValue={noteRow.note}>
        {notes.map((note) => (
          <option key={note} value={note}>
            {note}
          </option>
        ))}
      </select>
    </>
  );
};

export default NoteControls;
