import machineIsOnAtom from "../../../lib/store/machineIsOnAtom";
import { Transport } from "tone";
import { useSetRecoilState } from "recoil";
import MachineButton from "../MachineButton/MachineButton";

const MachineButtonStop = () => {
  const setMachineIsOnState = useSetRecoilState(machineIsOnAtom);
  return (
    <MachineButton
      clickHandler={() => {
        Transport.stop();
        Transport.cancel();
        setMachineIsOnState(false);
      }}
    >
      stop
    </MachineButton>
  );
};

export default MachineButtonStop;
