import * as Tone from "tone";
import NoteNode from "./NoteNode";
import { useRecoilValue } from "recoil";
import noteTableState from "./store/notesAtom";

const SynthWrapper = ({}) => {
  const noteTable = useRecoilValue(noteTableState);

  const synths = [];

  for (const note of noteTable) {
    const synth = new Tone.Synth().toDestination();
    synths.push(
      new Tone.Loop((time) => {
        synth.triggerAttackRelease(note.note, "8n", time);
      }, "4n").start(noteTable.indexOf(note))
    );
  }

  const handlePlaySynth = () => {
    Tone.start();
    Tone.Transport.start();
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
      {noteTable.map((note) => (
        <NoteNode key={Math.random()} note={note.note} />
      ))}
    </div>
  );
};

export default SynthWrapper;
