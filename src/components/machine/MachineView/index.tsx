import NoteRow from "../../notes/NoteRow";
import * as Tone from "tone";
import { useRecoilValue } from "recoil";
import machineAtom from "../../../lib/store/machineAtom";
import notesAtom, { TNotes } from "../../../lib/store/notesAtom";
import { Frequency } from "tone/build/esm/core/type/Units";

const getNoteTable = (notes: TNotes) => {
  const noteTable = [];
  for (const note of notes) {
    console.log(note.activeNotes);
    noteTable.push([
      ...note.activeNotes.map((activeNote) => (activeNote ? note.note : null)),
    ]);
  }

  return noteTable;
};

const MachineView = () => {
  const machine = useRecoilValue(machineAtom);
  const notes = useRecoilValue(notesAtom);
  const noteTableArray = getNoteTable(notes);
  // create our instrument
  const poly = new Tone.PolySynth().toDestination();

  const handleMachinePlay = () => {
    Tone.start();
    // @todo: machine.width has to be the same as the length of the active notes!
    for (let i = 0; i < machine.width; i++) {
      Tone.Transport.scheduleRepeat(
        () => {
          poly.triggerAttackRelease(
            noteTableArray
              .map((notes) => notes[i])
              .filter((note) => note !== null) as Frequency | Frequency[],
            "8n"
          );
        },
        "1n",
        `0:${i}:0`
      );
    }
    Tone.Transport.start();
  };

  const noteTable = notes.map((note, index) => (
    <NoteRow
      index={index}
      key={Math.random()}
      activeNotes={note.activeNotes}
      waveShape={note.waveShape}
      note={note.note}
    />
  ));
  return (
    <>
      <div className="flex-col w-full">{noteTable}</div>
      <button onClick={handleMachinePlay}>Start</button>
      <button
        onClick={() => {
          Tone.Transport.stop();
          Tone.Transport.cancel();
        }}
      >
        stop
      </button>
    </>
  );
};

export default MachineView;
