import { useSetRecoilState } from "recoil";
import machineNotesCount from "../../../lib/store/machineNotesCount";

const MachineButtonNoteRemove = () => {
  const setNotesCountState = useSetRecoilState(machineNotesCount);
  const handleRemoveNote = () => {
    setNotesCountState((state) => (state -= 1));
  };
  return <button onClick={handleRemoveNote}>Remove Note</button>;
};

export default MachineButtonNoteRemove;
