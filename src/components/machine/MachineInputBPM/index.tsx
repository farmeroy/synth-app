import machineAtom from "../../../lib/store/machineAtom";
import { useRecoilState } from "recoil";
import { Transport } from "tone";

const MachineInputBPM = ({}) => {
  const [machineState, setMachineState] = useRecoilState(machineAtom);
  const handleUpdateTempo = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newTempo = Number(e.target.value);
    if (newTempo > 220) newTempo = 220;
    else if (newTempo < 10) newTempo = 10;
    Transport.bpm.value = newTempo;
    setMachineState((state) => ({ ...state, tempo: newTempo }));
  };
  return (
    <input
      type="number"
      value={machineState.tempo}
      onChange={(e) => handleUpdateTempo(e)}
    />
  );
};

export default MachineInputBPM;
