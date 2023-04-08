import { useSetRecoilState } from "recoil";
import machineNotesCount from "../../../lib/store/machineNotesCount";
import MachineButton from "../MachineButton/MachineButton";
import ModalWrapper from "../../shared/ModalWrapper/ModalWrapper";
import NotePicker from "../../notes/NotePicker/NotePicker";
import { useState } from "react";

const MachineButtonNoteAdd = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleSetNote = (note: string) => {};

  return (
    <>
      <MachineButton clickHandler={() => setModalIsOpen(true)}>
        Add Note
      </MachineButton>
      <ModalWrapper isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <NotePicker setNote={handleSetNote} />
      </ModalWrapper>
    </>
  );
};

export default MachineButtonNoteAdd;
