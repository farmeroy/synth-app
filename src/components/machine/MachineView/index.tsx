import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import machineAtom from "../../../lib/store/machineAtom";
import { Frequency } from "tone/build/esm/core/type/Units";
import noteTableState from "../../../lib/store/noteTableState";
import activeBeatState from "../../../lib/store/currentBeatState";
import * as Tone from "tone";
import machineIsOnAtom from "../../../lib/store/machineIsOnAtom";
const MachineView = () => {
  const [machineState, setMachineState] = useRecoilState(machineAtom);
  const [machineIsOn, setMachineIsOn] = useRecoilState(machineIsOnAtom);
  const noteTableArray = useRecoilValue(noteTableState);
  const setCurrentBeat = useSetRecoilState(activeBeatState);
  // create our instrument
  const poly = new Tone.PolySynth().toDestination();

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
    setMachineIsOn(true);
    Tone.Transport.stop();
    Tone.Transport.cancel();
    Tone.start();
    Tone.Transport.scheduleRepeat(
      () => {
        updateBeat();
      },
      "4n",
      "0:1:0"
    );
    Tone.Transport.start();
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
        <button onClick={handleAddBeat}>Add Beat</button>
        <button onClick={handleRemoveBeat}>Remove Beat</button>
        <button onClick={handleAddNote}>Add Note</button>
      </div>
    </>
  );
};

export default MachineView;
