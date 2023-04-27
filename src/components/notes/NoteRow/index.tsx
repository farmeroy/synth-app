export interface NoteRowProps {
  note: INote;
  index: number;
  synth: PolySynth;
}

import { useRecoilValue } from "recoil";
import { PolySynth } from "tone";
import activeNotesState from "../../../lib/store/activeNotesState";
import { INote } from "../../../lib/store/notesAtom";
import Note from "../Note";
import NoteControls from "../NoteControls";

const NoteRow = ({ synth, note, index: indexRow }: NoteRowProps) => {
  const activeNotes = useRecoilValue(activeNotesState(note.note));
  const notes = activeNotes.map((isActive, index) => (
    <Note
      key={Math.random()}
      synth={synth}
      indexRow={indexRow}
      index={index}
      note={note}
    />
  ));

  return (
    <div className="flex w-full h-12">
      <NoteControls note={note.note} />
      {notes}
    </div>
  );
};

export default NoteRow;
