import { useRecoilState, useRecoilValue } from "recoil";
import activeBeatState from "../../../lib/store/activeBeatsAtom";
import { Loop, Synth } from "tone";
import noteIsActive from "../../../lib/store/noteIsActive";
import { useEffect } from "react";
import machineIsOnAtom from "../../../lib/store/machineIsOnAtom";
import machineAtom from "../../../lib/store/machineAtom";

export interface NoteProps {
  note: string;
  index: number;
  indexRow: number;
}
const Note = ({ synth, note, indexRow, index }: NoteProps) => {
  const [activeNotes, setActiveNotes] = useRecoilState(
    activeBeatState(indexRow)
  );
  const noteIsActiveState = useRecoilValue(noteIsActive(index));
  const machineIsOnState = useRecoilValue(machineIsOnAtom);
  const machine = useRecoilValue(machineAtom);

  useEffect(() => {
    // const synth = new Synth().toDestination();
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
      // synth.dispose();
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
      className={`border border-black w-full ${
        activeNotes[index] ? styleActive : null
      } ${noteIsActiveState ? styleCurrentBeat : null}`}
      onClick={handleUpdateIsActive}
    >{`${note} ${index}`}</button>
  );
};

export default Note;
