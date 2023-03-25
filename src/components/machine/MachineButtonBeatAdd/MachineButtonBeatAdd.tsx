import { useSetRecoilState } from "recoil";
import machineBeatsCount from "../../../lib/store/machineBeatsCount";

const MachineButtonBeatAdd = () => {
  const setMachineBeatsCountState = useSetRecoilState(machineBeatsCount);
  const handleAddBeat = () => {
    setMachineBeatsCountState((state) => (state += 1));
  };
  return <button onClick={handleAddBeat}>Add Beat</button>;
};

export default MachineButtonBeatAdd;
