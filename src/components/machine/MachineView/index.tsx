import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import machineAtom from "../../../lib/store/machineAtom";
import { button } from "./styles";
import activeBeatState from "../../../lib/store/currentBeatState";
import * as Tone from "tone";
import machineIsOnAtom from "../../../lib/store/machineIsOnAtom";
const MachineView = () => {
  const [machineState, setMachineState] = useRecoilState(machineAtom);
  const [machineIsOn, setMachineIsOn] = useRecoilState(machineIsOnAtom);
  const setCurrentBeat = useSetRecoilState(activeBeatState);

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

  Tone.Transport.timeSignature = machineState.width;

  const handleMachinePlay = () => {
    setCurrentBeat(0);
    if (machineIsOn) {
      Tone.Transport.stop();
    }
    if (!machineIsOn) {
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
    <>
      <button onClick={handleMachinePlay}>Start</button>
      <button
        onClick={() => {
          Tone.Transport.stop();
          Tone.Transport.cancel();
          setMachineIsOn(false);
        }}
      >
        stop
      </button>
      <div>
        <p>Controls</p>
        <button className={button} onClick={handleAddBeat}>
          Add Beat
        </button>
        <button className={button} onClick={handleRemoveBeat}>
          Remove Beat
        </button>
        <button className={button} onClick={handleAddNote}>
          Add Note
        </button>
      </div>
    </>
  );
};

export default MachineView;
