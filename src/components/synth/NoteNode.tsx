interface NoteNodeProps {
  index: number;
}
import noteAtom from "./store/noteAtom";
import currentRowAtom from "./store/currentRowAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { ChangeEvent } from "react";

const notes = ["A", "B", "C", "D", "E", "F", "G"];
const octaves = [1, 2, 3, 4, 5, 6];

const NoteNode = ({ index }: NoteNodeProps) => {
  const [noteObject, setNoteObject] = useRecoilState(noteAtom(index));
  const currentRow = useRecoilValue(currentRowAtom);
  const handleSetNote = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setNoteObject({ ...noteObject, note: e.currentTarget.value });
  };
  const handleSetOctave = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setNoteObject({ ...noteObject, octave: Number(e.currentTarget.value) });
  };
  return (
    <div className={currentRow === index + 1 ? "bg-black-400" : "bg-blue-400"}>
      <select onChange={handleSetNote} defaultValue={noteObject.note}>
        {notes.map((note) => (
          <option key={note} value={note}>
            {note}
          </option>
        ))}
      </select>
      <select onChange={handleSetOctave} defaultValue={noteObject.octave}>
        {octaves.map((octave) => (
          <option key={octave} value={octave}>
            {octave}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NoteNode;
