import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import noteState from "../../../lib/store/noteState";
import ModalWrapper from "../../shared/ModalWrapper/ModalWrapper";
import NotePicker from "../NotePicker/NotePicker";

interface NoteControlsProps {
  index: number;
}

const NoteControls = ({ index }: NoteControlsProps) => {
  const [noteRow, setNoteRow] = useRecoilState(noteState(index));
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleSetNote = (note: string) => {
    setNoteRow({ ...noteRow, note: note });
  };

  return (
    <div className="m-1 w-full">
      <button
        className="w-full border border-black-200 p-2"
        onClick={() => setModalIsOpen(true)}
      >
        {noteRow.note}
      </button>
      <ModalWrapper isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <NotePicker setNote={handleSetNote} />
      </ModalWrapper>
    </div>
  );
};

export default NoteControls;
