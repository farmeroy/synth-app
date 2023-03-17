export interface NoteRowProps {
  note: string;
  waveShape: string;
  index: number;
}

import { useRecoilValue } from "recoil";
import activeNotesState from "../../../lib/store/activeNotesState";
import Note from "../Note";
import NoteControls from "../NoteControls";

const NoteRow = ({ note, index: indexRow, waveShape }: NoteRowProps) => {
  const activeNotes = useRecoilValue(activeNotesState(indexRow));
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
