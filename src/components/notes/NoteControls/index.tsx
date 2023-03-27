import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import noteState from "../../../lib/store/noteState";
import ModalWrapper from "../../shared/ModalWrapper/ModalWrapper";

interface NoteControlsProps {
  index: number;
}

const notes = ["A3", "B3", "C3", "D3", "E3", "F3", "G3"];

const NoteControls = ({ index }: NoteControlsProps) => {
  const [noteRow, setNoteRow] = useRecoilState(noteState(index));
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleSetNote = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setNoteRow({ ...noteRow, note: e.currentTarget.value });
  };

  return (
    <div className="m-1">
      <button onClick={() => setModalIsOpen((state) => !state)}>
        Open modal
      </button>
      {modalIsOpen ? (
        <ModalWrapper>
          <div>Hello</div>
        </ModalWrapper>
      ) : null}
      <select onChange={handleSetNote} defaultValue={noteRow.note}>
        {notes.map((note) => (
          <option key={note} value={note}>
            {note}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NoteControls;
