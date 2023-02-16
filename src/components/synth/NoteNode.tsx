interface NoteNodeProps {
  note: number;
  tone: any;
}
import noteAtom from "./store/noteAtom";
import currentRowAtom from "./store/currentRowAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { ChangeEvent } from "react";
import { Tone } from "tone/build/esm/core/Tone";

const notes = ["A", "B", "C", "D", "E", "F", "G"];
const octaves = [3, 4, 5];

const NoteNode = ({ note, tone }: NoteNodeProps) => {
  const [noteObject, setNoteObject] = useRecoilState(noteAtom(note));
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
    <div
      className={currentRow / (note + 1) === 1 ? "bg-black-400" : "bg-blue-400"}
    >
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
