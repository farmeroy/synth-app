export interface NoteRowProps {
  note: string;
  waveShape: string;
  index: number;
  synth: PolySynth;
}

import { useRecoilValue } from "recoil";
import { PolySynth } from "tone";
import activeNotesState from "../../../lib/store/activeNotesState";
import Note from "../Note";
import NoteControls from "../NoteControls";

const NoteRow = ({ synth, note, index: indexRow, waveShape }: NoteRowProps) => {
  const activeNotes = useRecoilValue(activeNotesState(note));
  console.log(note, activeNotes);
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
    <div className="flex h-12 w-full">
      <NoteControls note={note} index={indexRow} />
      {notes}
    </div>
  );
};

export default NoteRow;
