export interface NoteRowProps {
  note: string;
  waveShape: string;
  activeNotes: boolean[];
  index: number;
}

import Note from "../Note";
import NoteControls from "../NoteControls";

const NoteRow = ({
  note,
  index: indexRow,
  waveShape,
  activeNotes,
}: NoteRowProps) => {
  const notes = activeNotes.map((isActive, index) => (
    <Note key={Math.random()} indexRow={indexRow} index={index} note={note} />
  ));

  return (
    <div className="flex h-12 w-full">
      <NoteControls index={indexRow} />
      {notes}
    </div>
  );
};

export default NoteRow;
