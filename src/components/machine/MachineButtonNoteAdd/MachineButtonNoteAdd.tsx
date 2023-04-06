import { useSetRecoilState } from "recoil";
import machineNotesCount from "../../../lib/store/machineNotesCount";
import MachineButton from "../MachineButton/MachineButton";

const MachineButtonNoteAdd = () => {
  const setNotesCountState = useSetRecoilState(machineNotesCount);
  const handleAddNote = () => {
    setNotesCountState((state) => (state += 1));
  };
  return <MachineButton clickHandler={handleAddNote}>Add Note</MachineButton>;
};

export default MachineButtonNoteAdd;
