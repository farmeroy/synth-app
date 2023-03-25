import machineIsOnAtom from "../../../lib/store/machineIsOnAtom";
import { Transport } from "tone";
import { useSetRecoilState } from "recoil";

const MachineButtonStop = () => {
  const setMachineIsOnState = useSetRecoilState(machineIsOnAtom);
  return (
    <button
      className="border border-1 rounded m-1 p-2 "
      onClick={() => {
        Transport.stop();
        Transport.cancel();
        setMachineIsOnState(false);
      }}
    >
      stop
    </button>
  );
};

export default MachineButtonStop;
