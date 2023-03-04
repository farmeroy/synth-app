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

const MachineView = () => {
  const getNoteTable = (notes) => {
    const noteTable = [];
    for (const note of notes) {
      noteTable.push([
        ...note.activeNotes.map((activeNote) =>
          activeNote ? note.note : null
        ),
      ]);
    }
    return noteTable;
  };
  const noteTableArray = getNoteTable(notes);
  console.log(
    "notes",
    noteTableArray.map((notes) => notes[0])
  );
  const poly = new Tone.PolySynth().toDestination();
  const handleMachinePlay = () => {
    Tone.start();
    for (let i = 0; i < machine.width; i++) {}
    Tone.Transport.scheduleRepeat(
      () => {
        poly.triggerAttackRelease(
          noteTableArray
            .map((notes) => notes[0])
            .filter((note) => note !== null),
          "8n"
        );
      },
      "1n",
      "0:0:0"
    );
    Tone.Transport.scheduleRepeat(
      () => {
        poly.triggerAttackRelease(["A4", "C4", "E4", "A5"], "8n");
      },
      "1n",
      "0:1:0"
    );
    Tone.Transport.scheduleRepeat(
      () => {
        poly.triggerAttackRelease(["A4"], "8n");
      },
      "1n",
      "0:2:0"
    );
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
      <button onClick={() => Tone.Transport.stop()}>stop</button>
    </>
  );
};

export default MachineView;
