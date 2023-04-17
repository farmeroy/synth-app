import { useRecoilState } from "recoil";
import { Transport } from "tone";
import machineTempoAtom from "../../../lib/store/machineTempoAtom";
import InputRange from "../../shared/InputRange";

const MachineInputBPM = ({}) => {
  const [machineTempoState, setMachineTempoState] =
    useRecoilState(machineTempoAtom);
  const handleUpdateTempo = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newTempo = Number(e.target.value);
    if (newTempo > 220) newTempo = 220;
    else if (newTempo < 10) newTempo = 10;
    Transport.bpm.value = newTempo;
    setMachineTempoState(newTempo);
  };
  return (
    <InputRange
      label="BPM"
      min={40}
      max={220}
      value={machineTempoState}
      handleOnChange={(e) => handleUpdateTempo(e)}
    />
  );
};

export default MachineInputBPM;
