import * as Tone from "tone";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import currentBeatAtom from "../../../lib/store/currentBeatAtom";
import machineBeatsCount from "../../../lib/store/machineBeatsCount";
import machineIsOnAtom from "../../../lib/store/machineIsOnAtom";
import MachineButton from "../MachineButton/MachineButton";
import { PlayerPlay, PlayerStop } from "tabler-icons-react";

const MachineButtonStart = () => {
  const [machineIsOn, setMachineIsOn] = useRecoilState(machineIsOnAtom);
  const machineBeatsCountState = useRecoilValue(machineBeatsCount);
  const setCurrentBeat = useSetRecoilState(currentBeatAtom);

  const updateBeat = () => {
    setCurrentBeat(Number(Tone.Transport.position.toString().split(":")[1]));
  };

  Tone.Transport.timeSignature = machineBeatsCountState;

  const handleMachinePlay = () => {
    setCurrentBeat(0);
    if (machineIsOn) {
      Tone.Transport.stop();
      Tone.Transport.cancel();
      setMachineIsOn(false);
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
      Tone.start();
      Tone.Transport.start();
      setMachineIsOn(true);
    }
  };

  return (
    <MachineButton clickHandler={handleMachinePlay}>
      {machineIsOn ? <PlayerStop /> : <PlayerPlay />}
    </MachineButton>
  );
};

export default MachineButtonStart;
