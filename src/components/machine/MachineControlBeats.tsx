import machineBeatsCount from "../../lib/store/machineBeatsCount";
import { useRecoilState } from "recoil";
import MachineButton from "./MachineButton/MachineButton";
const MachineControlBeats = () => {
  const [machineBeatsCountState, setMachineBeatsCountState] =
    useRecoilState(machineBeatsCount);
  return (
    <div className="flex items-center m-1 rounded-full border  border-violetlight hover:border-emerald w-fit p-3 bg-violetlight">
      <MachineButton
        clickHandler={() => setMachineBeatsCountState((state) => (state += 1))}
      >
        Add Beat
      </MachineButton>
      <p>{machineBeatsCountState}</p>
      <MachineButton
        clickHandler={() => setMachineBeatsCountState((state) => (state -= 1))}
      >
        Remove Beat
      </MachineButton>
    </div>
  );
};

export default MachineControlBeats;
