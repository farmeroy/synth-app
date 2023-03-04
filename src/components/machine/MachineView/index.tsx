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

const MachineView = () => {
  const getNoteTable = (notes) => {
    const noteTable = [];
    for (const note in notes) {
    }
  };
  const handleMachinePlay = () => {
    Tone.start();
    const poly = new Tone.PolySynth().toDestination();
    Tone.Transport.scheduleRepeat(
      () => {
        poly.triggerAttackRelease(["G4", "D4", "D5"], "8n");
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
