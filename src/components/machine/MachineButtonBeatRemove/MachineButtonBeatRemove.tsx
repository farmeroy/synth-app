import { useSetRecoilState } from "recoil";
import machineBeatsCount from "../../../lib/store/machineBeatsCount";

const MachineButtonBeatRemove = () => {
  const setMachineBeatsCountState = useSetRecoilState(machineBeatsCount);
  const handleAddBeat = () => {
    setMachineBeatsCountState((state) => (state -= 1));
  };
  return <button onClick={handleAddBeat}>Remove Beat</button>;
};

export default MachineButtonBeatRemove;
