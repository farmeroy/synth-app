import Head from "next/head";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import notesAtom, { TNotes } from "../src/lib/store/notesAtom";
import NoteRow from "../src/components/notes/NoteRow";
import { useRecoilValue } from "recoil";

const Machine = dynamic(() => import("../src/components/machine/MachineView"), {
  ssr: false,
});

export default function Home() {
  const notes = useRecoilValue(notesAtom);
  const noteTable = notes.map((note, index) => (
    <NoteRow
      index={index}
      key={Math.random()}
      waveShape={note.waveShape}
      note={note.note}
    />
  ));
  return (
    <>
      <Head>
        <title>Synth App</title>
      </Head>
      <div className="flex justify-around">
        <h1>Synth App</h1>
      </div>
      <div className="flex-col w-full">{noteTable}</div>
      <Suspense>
        <Machine></Machine>
      </Suspense>
    </>
  );
}
