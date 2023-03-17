import notesAtom, { TNotes } from "../../src/lib/store/notesAtom";
import * as Tone from "tone";
import { useRecoilValue } from "recoil";
import dynamic from "next/dynamic";
const Machine = dynamic(
  () => import("../../src/components/machine/MachineView"),
  {
    ssr: false,
  }
);
const NoteRow = dynamic(() => import("../../src/components/notes/NoteRow"), {
  ssr: false,
});

const Sequencer = () => {
  const notes = useRecoilValue(notesAtom);
  const noteTable = notes.map((note, index) => (
    <NoteRow
      tone={Tone}
      index={index}
      key={Math.random()}
      waveShape={note.waveShape}
      note={note.note}
    />
  ));
  return (
    <>
      <Machine tone={Tone} />
      <div className="flex-col w-full">{noteTable}</div>
    </>
  );
};

export default Sequencer;
