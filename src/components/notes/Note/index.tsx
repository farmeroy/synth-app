import { useRecoilState, useRecoilValue } from "recoil";
import noteRowActiveBeatsAtom from "../../../lib/store/noteRowActiveBeatsAtom";
import { Loop, Synth } from "tone";
import noteIsActive from "../../../lib/store/noteIsActive";
import { useEffect } from "react";
import machineIsOnAtom from "../../../lib/store/machineIsOnAtom";
import machineAtom from "../../../lib/store/machineAtom";

export interface NoteProps {
  note: string;
  index: number;
  indexRow: number;
  synth: Synth;
}

const Note = ({ synth, note, indexRow, index }: NoteProps) => {
  const [activeNotes, setActiveNotes] = useRecoilState(
    noteRowActiveBeatsAtom(indexRow)
  );
  const noteIsActiveState = useRecoilValue(noteIsActive(index));
  const machineIsOnState = useRecoilValue(machineIsOnAtom);
  const machine = useRecoilValue(machineAtom);

  useEffect(() => {
    const loop = new Loop(() => {
      synth.triggerAttackRelease(note, "8n");
    }, "1n");
    if (activeNotes[index] === true && machineIsOnState) {
      loop.start(`0:${index}:0`);
    } else {
      loop.stop().cancel();
    }
    return () => {
      loop.dispose();
    };
  }, [activeNotes, synth, index, note, machineIsOnState, machine.width]);

  const handleUpdateIsActive = () => {
    const state = [...activeNotes];
    state[index] = !activeNotes[index];
    setActiveNotes([...state]);
  };

  const styleActive = "bg-gray-500";
  const styleCurrentBeat = "opacity-75";

  return (
    <button
      className={`border rounded border-black m-1 w-full ${
        activeNotes[index] ? styleActive : null
      } ${noteIsActiveState ? styleCurrentBeat : null}`}
      onClick={handleUpdateIsActive}
    />
  );
};

export default Note;
