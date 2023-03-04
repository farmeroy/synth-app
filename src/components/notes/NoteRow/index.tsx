export interface NoteRowProps {
  note: String;
  waveShape: String;
  activeNotes: boolean[];
}

import Note from "../Note";

const NoteRow = ({ note, waveShape, activeNotes }: NoteRowProps) => {
  const notes = activeNotes.map((note) => (
    <Note key={activeNotes.indexOf(note)} active={note} />
  ));

  return <div>{notes}</div>;
};

export default NoteRow;
