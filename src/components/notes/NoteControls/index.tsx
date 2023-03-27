import { ChangeEvent, useState } from "react";
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
    <div className="m-1">
      <button onClick={() => setModalIsOpen((state) => !state)}>
        Open modal
      </button>
      {modalIsOpen ? (
        <ModalWrapper onClose={() => setModalIsOpen(false)}>
          <NotePicker setNote={handleSetNote} />
        </ModalWrapper>
      ) : null}
    </div>
  );
};

export default NoteControls;
