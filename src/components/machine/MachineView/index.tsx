import NoteRow from "../../notes/NoteRow";
import * as Tone from "tone";
import { useEffect } from "react";

const notes = [
  {
    note: "A3",
    waveShape: "sine",
    activeNotes: [true, true, true, true],
  },
  {
    note: "C4",
    waveShape: "sine",
    activeNotes: [true, true, true, true],
  },
  {
    note: "E4",
    waveShape: "sine",
    activeNotes: [true, true, true, true],
  },
];

const MachineView = () => {
  // const handleMachinePlay = () => {
  //   Tone.Transport
  // };

  const noteTable = notes.map((note) => (
    <NoteRow
      key={notes.indexOf(note)}
      activeNotes={note.activeNotes}
      waveShape={note.waveShape}
      note={note.note}
    />
  ));
  return <div>{noteTable}</div>;
};

export default MachineView;
