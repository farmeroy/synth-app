import { PolySynth } from "tone";
import { INote } from "../../../lib/store/notesAtom";

interface NoteControlsProps {
  note: INote;
  synth: PolySynth;
}

const NoteControls = ({ note, synth }: NoteControlsProps) => {
  const handlePlayFrequency = () => {
    synth.triggerAttackRelease(note.frequency, "8n");
  };

  return (
    <div className="m-1">
      <button
        className="w-12 p-2 border border-black rounded-lg bg-emerald hover:brightness-75 transition-all"
        onClick={handlePlayFrequency}
      >
        {note.note}
      </button>
    </div>
  );
};

export default NoteControls;
