import * as Tone from "tone";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import currentBeatAtom from "../../../lib/store/currentBeatAtom";
import machineBeatsCount from "../../../lib/store/machineBeatsCount";
import machineIsOnAtom from "../../../lib/store/machineIsOnAtom";
const MachineButtonStart = () => {
  const [machineIsOn, setMachineIsOn] = useRecoilState(machineIsOnAtom);
  const machineBeatsCountState = useRecoilValue(machineBeatsCount);
  const setCurrentBeat = useSetRecoilState(currentBeatAtom);
  const updateBeat = () => {
    setCurrentBeat((state) =>
      state < machineBeatsCountState - 1 ? (state += 1) : 0
    );
  };
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
    <button
      className="border border-1 rounded m-1 p-2"
      onClick={handleMachinePlay}
    >
      Start
    </button>
  );
};

export default MachineButtonStart;
