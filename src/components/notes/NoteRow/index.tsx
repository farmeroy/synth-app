export interface NoteRowProps {
  note: string;
  index: number;
  synth: PolySynth;
}

import { useRecoilValue } from "recoil";
import { PolySynth } from "tone";
import machineBeatsCount from "../../../lib/store/machineBeatsCount";
import noteFrequencyAtom from "../../../lib/store/noteFrequencyAtom";
import { INote } from "../../../lib/store/notesAtom";
import Note from "../Note";
import NoteControls from "../NoteControls";

const NoteRow = ({ synth, note }: NoteRowProps) => {
  const noteData = useRecoilValue(noteFrequencyAtom(note));
  const beats = useRecoilValue(machineBeatsCount);
  const notes = [];
  for (let i = 0; i < beats; i++) {
    notes.push(
      <Note key={Math.random()} synth={synth} index={i} note={noteData} />
    );
  }

  return (
    <div className="flex w-full h-12">
      <NoteControls note={note} synth={synth} frequency={noteData?.frequency} />
      {notes}
    </div>
  );
};

export default NoteRow;
