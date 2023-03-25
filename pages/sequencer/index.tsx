import dynamic from "next/dynamic";
import { Suspense } from "react";
const Machine = dynamic(
  () => import("../../src/components/machine/MachineView"),
  {
    ssr: false,
  }
);
const NotesView = dynamic(
  () => import("../../src/components/notes/NotesView/NotesView"),
  {
    ssr: false,
  }
);
const Sequencer = () => {
  return (
    <>
      <Suspense>
        <Machine />
        <NotesView />
      </Suspense>
    </>
  );
};

export default Sequencer;
