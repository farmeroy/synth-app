import { useRecoilValue } from "recoil";
import { DeviceFloppy } from "tabler-icons-react";
import machineStateSelector from "../../lib/store/machineStateSelector";
import MachineButton from "./MachineButton/MachineButton";

const MachineButtonSave = () => {
  const machineState = useRecoilValue(machineStateSelector);

  const handleClick = () => {
    console.log(machineState);
    localStorage.setItem("sequencerMachineState", JSON.stringify(machineState));
  };

  return (
    <MachineButton clickHandler={handleClick}>
      <DeviceFloppy />
    </MachineButton>
  );
};

export default MachineButtonSave;
