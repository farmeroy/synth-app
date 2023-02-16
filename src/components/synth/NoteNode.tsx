interface NoteNodeProps {
  note: number;
}
import noteAtom from "./store/noteAtom";
import currentRowAtom from "./store/currentRowAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { ChangeEvent } from "react";

const NoteNode = ({ note }: NoteNodeProps) => {
  const [noteObject, setNoteObject] = useRecoilState(noteAtom(note));
  const currentRow = useRecoilValue(currentRowAtom);
  const handleEdit = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setNoteObject({ ...noteObject, note: e.currentTarget.value });
  };
  console.log(currentRow);
  return (
    <div className={currentRow === note ? "bg-black-400" : "bg-blue-400"}>
      <select onChange={handleEdit}>
        <option value="E3" selected={noteObject.note === "E3"}>
          E3
        </option>
        <option value="A4" selected={noteObject.note === "A4"}>
          A4
        </option>
        <option value="C4" selected={noteObject.note === "C4"}>
          C4
        </option>
        <option value="E4" selected={noteObject.note === "E4"}>
          E4
        </option>
      </select>
    </div>
  );
};

export default NoteNode;
