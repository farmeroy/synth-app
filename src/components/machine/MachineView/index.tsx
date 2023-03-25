import { useRecoilState } from "recoil";
import machineAtom from "../../../lib/store/machineAtom";
import { button } from "./styles";
import { Transport } from "tone";
import MachineInputBPM from "../MachineInputBPM";
import MachineButtonStart from "../MachineButtonStart";
import MachineButtonStop from "../MachineButtonStop";
const MachineView = () => {
  const [machineState, setMachineState] = useRecoilState(machineAtom);

  const handleAddBeat = () => {
    setMachineState((state) => ({ ...state, width: state.width + 1 }));
  };

  const handleRemoveBeat = () => {
    setMachineState((state) => ({ ...state, width: state.width - 1 }));
  };

  const handleAddNote = () => {
    setMachineState((state) => ({ ...state, height: state.height + 1 }));
  };
  const handleRemoveNote = () => {
    setMachineState((state) => ({ ...state, height: state.height - 1 }));
  };

  Transport.timeSignature = machineState.width;

  return (
    <div className="p-8">
      <MachineButtonStart />
      <MachineButtonStop />
      <div>
        <button className={button} onClick={handleAddBeat}>
          Add Beat
        </button>
        <button className={button} onClick={handleRemoveBeat}>
          Remove Beat
        </button>
        <button className={button} onClick={handleAddNote}>
          Add Note
        </button>
        <button className={button} onClick={handleRemoveNote}>
          Remove Note
        </button>
        <MachineInputBPM />
      </div>
    </div>
  );
};

export default MachineView;
