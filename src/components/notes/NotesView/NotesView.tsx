import NoteRow from "../NoteRow";
import { useRecoilValue } from "recoil";
import { PolySynth } from "tone";
import WaveVisualizer from "../../machine/WaveVisualizer";
import notesInUseAtom from "../../../lib/store/notesInUseAtom";

const NotesView = () => {
  const synth = new PolySynth().toDestination();
  const notes = useRecoilValue(notesInUseAtom);
  const noteTable = notes.map((note, index) => (
    <NoteRow synth={synth} index={index} key={Math.random()} note={note} />
  ));
  return (
    <div className="flex-col w-full p-2 bg-black border border-black rounded-lg">
      <div className="w-full h-24 max-w-2xl mx-auto">
        <WaveVisualizer synth={synth} />
      </div>
      {noteTable}
    </div>
  );
};

export default NotesView;
