import * as Tone from "tone";
import NoteNode from "./NoteNode";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import noteTableState from "./store/notesAtom";
import tableAtom from "./store/tableAtom";
import currentRowAtom from "./store/currentRowAtom";

const SynthWrapper = ({}) => {
  const noteTable = useRecoilValue(noteTableState);
  const table = useRecoilValue(tableAtom);
  const setCurrentRow = useSetRecoilState(currentRowAtom);

  const handlePlaySynth = () => {
    const synth = new Tone.Synth().toDestination();
    new Tone.Sequence(
      (time, note) => {
        synth.triggerAttackRelease(note, "8n", time);
      },
      noteTable.map((note) => `${note.note}${note.octave}`)
    ).start(0);
    Tone.Transport.timeSignature = [9, 8];
    Tone.Transport.bpm.value = 120;
    // Tone.Transport.scheduleRepeat(() => {
    //   setCurrentRow((row) => (row < table.width ? row + 1 : 1));
    // }, "8n");
    Tone.start();
    Tone.Transport.start();
  };
  const notesRow = [];
  for (let i = 0; i < table.width; i++) {
    notesRow.push(<NoteNode tone={Tone} key={i} note={i} />);
  }

  return (
    <div className="flex justify-around p-2">
      <button
        onClick={() => handlePlaySynth()}
        className="p-2 border border-black text-3xl"
      >
        Start
      </button>
      <button
        onClick={() => {
          Tone.Transport.stop();
          setCurrentRow(0);
        }}
      >
        Stop
      </button>
      {notesRow}
    </div>
  );
};

export default SynthWrapper;
