import { useSetRecoilState } from "recoil";
import machineBeatsCount from "../../../lib/store/machineBeatsCount";
import MachineButton from "../MachineButton/MachineButton";

const MachineButtonBeatAdd = () => {
  const setMachineBeatsCountState = useSetRecoilState(machineBeatsCount);
  const handleAddBeat = () => {
    setMachineBeatsCountState((state) => (state += 1));
  };
  return <MachineButton clickHandler={handleAddBeat}>Add Beat</MachineButton>;
};

export default MachineButtonBeatAdd;
