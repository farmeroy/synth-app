import NoteRow from "../../notes/NoteRow";
import * as Tone from "tone";

const notes = [
  {
    note: "A3",
    waveShape: "sine",
    activeNotes: [true, false, false, true],
  },
  {
    note: "C4",
    waveShape: "sine",
    activeNotes: [true, false, true, true],
  },
  {
    note: "E4",
    waveShape: "sine",
    activeNotes: [true, true, false, true],
  },
];

const machine = {
  width: 4,
  height: 3,
};
const getNoteTable = (notes) => {
  const noteTable = [];
  for (const note of notes) {
    noteTable.push([
      ...note.activeNotes.map((activeNote) => (activeNote ? note.note : null)),
    ]);
  }
  return noteTable;
};

const MachineView = () => {
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
              .filter((note) => note !== null),
            "8n"
          );
        },
        "1n",
        `0:${i}:0`
      );
    }
    Tone.Transport.start();
  };

  const noteTable = notes.map((note) => (
    <NoteRow
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
