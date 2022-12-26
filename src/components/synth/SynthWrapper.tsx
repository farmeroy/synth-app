import * as Tone from "tone";
import NoteNode from "./NoteNode";
import { useRecoilValue } from "recoil";
import notesAtom from "./store/notesAtom";

const SynthWrapper = ({}) => {
  const noteTable = useRecoilValue(notesAtom);
  Tone.start();
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();

  const handlePlaySynth = () => {
    const now = Tone.now();
    for (let i = 0; i < noteTable.length; i++) {
      synth.triggerAttack(noteTable[i], now + i);
      synth.triggerRelease(noteTable[i], now + 1 + i);
    }
  };

  return (
    <div className="flex justify-around p-2">
      <button
        onClick={() => handlePlaySynth()}
        className="p-2 border border-black text-3xl"
      >
        Start
      </button>
      <button onClick={() => Tone.Transport.stop()}>Stop</button>
      {noteTable.map((notes) => (
        <div key={Math.random()}>
          {notes.map((note) => (
            <NoteNode key={note} note={note} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SynthWrapper;
