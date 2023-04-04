import { useSetRecoilState } from "recoil";
import machineNotesCount from "../../../lib/store/machineNotesCount";

const MachineButtonNoteAdd = () => {
  const setNotesCountState = useSetRecoilState(machineNotesCount);
  const handleAddNote = () => {
    setNotesCountState((state) => (state += 1));
  };
  return <button onClick={handleAddNote}>Add Note</button>;
};

export default MachineButtonNoteAdd;
