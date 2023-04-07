import { useRecoilState } from "recoil";
import { Transport } from "tone";
import machineTempoAtom from "../../../lib/store/machineTempoAtom";

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
    <input
      type="number"
      value={machineTempoState}
      onChange={(e) => handleUpdateTempo(e)}
      className="p-3 w-24 border border-black bg-emerald rounded-full text-center "
    />
  );
};

export default MachineInputBPM;
