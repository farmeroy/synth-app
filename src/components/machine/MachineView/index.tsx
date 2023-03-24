import { useRecoilState, useSetRecoilState } from "recoil";
import machineAtom from "../../../lib/store/machineAtom";
import { button } from "./styles";
import currentBeatAtom from "../../../lib/store/currentBeatAtom";
import * as Tone from "tone";
import machineIsOnAtom from "../../../lib/store/machineIsOnAtom";
import MachineInputBPM from "../MachineInputBPM";
const MachineView = () => {
  const [machineState, setMachineState] = useRecoilState(machineAtom);
  const [machineIsOn, setMachineIsOn] = useRecoilState(machineIsOnAtom);
  const setCurrentBeat = useSetRecoilState(currentBeatAtom);

  const updateBeat = () => {
    setCurrentBeat((state) =>
      state < machineState.width - 1 ? (state += 1) : 0
    );
  };

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

  Tone.Transport.timeSignature = machineState.width;

  const handleMachinePlay = () => {
    setCurrentBeat(0);
    if (machineIsOn) {
      Tone.Transport.stop();
    }
    if (!machineIsOn) {
      Tone.Transport.clear;
      Tone.Transport.scheduleRepeat(
        () => {
          updateBeat();
        },
        "4n",
        "0:1:0"
      );
    }
    Tone.start();
    Tone.Transport.start();
    setMachineIsOn(true);
  };

  return (
    <div className="p-8">
      <button className={button} onClick={handleMachinePlay}>
        Start
      </button>
      <button
        className={button}
        onClick={() => {
          Tone.Transport.stop();
          Tone.Transport.cancel();
          setMachineIsOn(false);
        }}
      >
        stop
      </button>
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
