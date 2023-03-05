export interface NoteRowProps {
  note: String;
  waveShape: String;
  activeNotes: boolean[];
}

import Note from "../Note";

const NoteRow = ({ note, waveShape, activeNotes }: NoteRowProps) => {
  const notes = activeNotes.map((isActive) => (
    <Note key={Math.random()} active={isActive} note={note} />
  ));

  return <div className="flex h-12 w-full">{notes}</div>;
};

export default NoteRow;
