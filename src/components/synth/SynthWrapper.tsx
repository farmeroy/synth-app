import * as Tone from "tone";
import NoteNode from "./NoteNode";
import { useRecoilValue } from "recoil";
import notesAtom from "./store/notesAtom";

const SynthWrapper = ({}) => {
  const notes = useRecoilValue(notesAtom);
  Tone.start();
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();

  const handlePlaySynth = () => {
    const now = Tone.now();
    synth.triggerAttack(notes, now);
    synth.triggerRelease(notes, now + 4);
  };

  return (
    <div className="flex justify-around p-2">
      <button
        onClick={() => handlePlaySynth()}
        className="p-2 border border-black text-3xl"
      >
        Synth
      </button>
      {notes.map((note) => (
        <NoteNode key={note} note={note} />
      ))}
    </div>
  );
};

export default SynthWrapper;
