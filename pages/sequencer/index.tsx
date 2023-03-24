import notesAtom from "../../src/lib/store/notesAtom";
import * as Tone from "tone";
import { useRecoilValue } from "recoil";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const Machine = dynamic(
  () => import("../../src/components/machine/MachineView"),
  {
    ssr: false,
  }
);
const NoteRow = dynamic(() => import("../../src/components/notes/NoteRow"), {
  ssr: false,
});

const synth = new Tone.PolySynth().toDestination();
const Sequencer = () => {
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
  return (
    <>
      <Suspense>
        <Machine />
      </Suspense>
      <div className="flex-col w-full p-6">{noteTable}</div>
    </>
  );
};

export default Sequencer;
