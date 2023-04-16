import MachineButton from "../MachineButton/MachineButton";
import ModalWrapper from "../../shared/ModalWrapper/ModalWrapper";
import NotePicker from "../../notes/NotePicker/NotePicker";
import { useState } from "react";

const MachineButtonNoteAdd = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <MachineButton clickHandler={() => setModalIsOpen(true)}>
        Choose Notes
      </MachineButton>
      <ModalWrapper isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <NotePicker />
      </ModalWrapper>
    </>
  );
};

export default MachineButtonNoteAdd;
