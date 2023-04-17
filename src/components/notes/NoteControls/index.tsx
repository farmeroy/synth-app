import { useState } from "react";
import ModalWrapper from "../../shared/ModalWrapper/ModalWrapper";
import NotePicker from "../NotePicker/NotePicker";

interface NoteControlsProps {
  note: string;
}

const NoteControls = ({ note }: NoteControlsProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="m-1">
      <button
        className="w-36 border border-black bg-emerald hover:brightness-75 transition-all rounded-lg p-2"
        onClick={() => setModalIsOpen(true)}
      >
        {note}
      </button>
      <ModalWrapper isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <NotePicker />
      </ModalWrapper>
    </div>
  );
};

export default NoteControls;
