import NoteRow from "../NoteRow";
import notesAtom from "../../../lib/store/notesAtom";
import { useRecoilValue } from "recoil";
import { PolySynth } from "tone";

const NotesView = () => {
  const synth = new PolySynth().toDestination();
  const notes = useRecoilValue(notesAtom);
  const noteTable = notes.map((note, index) => (
    <NoteRow
      synth={synth}
      index={index}
      key={Math.random()}
      waveShape={note.waveShape}
      note={note.note}
    />
  ));
  return <div className="flex-col w-full p-6">{noteTable}</div>;
};

export default NotesView;
