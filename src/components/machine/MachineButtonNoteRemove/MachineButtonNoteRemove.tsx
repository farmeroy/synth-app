import { useSetRecoilState } from "recoil";
import machineNotesCount from "../../../lib/store/machineNotesCount";
import MachineButton from "../MachineButton/MachineButton";

const MachineButtonNoteRemove = () => {
  const setNotesCountState = useSetRecoilState(machineNotesCount);
  const handleRemoveNote = () => {
    setNotesCountState((state) => (state -= 1));
  };
  return (
    <MachineButton clickHandler={handleRemoveNote}>Remove Note</MachineButton>
  );
};

export default MachineButtonNoteRemove;
