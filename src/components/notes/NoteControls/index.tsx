import { PolySynth } from "tone";
import { Frequency } from "tone/build/esm/core/type/Units";

interface NoteControlsProps {
  note: string;
  synth: PolySynth;
  frequency: Frequency;
}

const NoteControls = ({ note, synth, frequency }: NoteControlsProps) => {
  const handlePlayFrequency = () => {
    synth.triggerAttackRelease(frequency, "8n");
  };

  return (
    <div className="m-1">
      <button
        className="w-12 p-2 border border-black rounded-lg bg-emerald hover:brightness-75 transition-all"
        onClick={handlePlayFrequency}
      >
        {note}
      </button>
    </div>
  );
};

export default NoteControls;
