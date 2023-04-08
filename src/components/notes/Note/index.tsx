import { useRecoilState, useRecoilValue } from "recoil";
import noteRowActiveBeatsAtom from "../../../lib/store/noteRowActiveBeatsAtom";
import { Loop, PolySynth } from "tone";
import noteIsActive from "../../../lib/store/noteIsActive";
import { useEffect } from "react";
import machineIsOnAtom from "../../../lib/store/machineIsOnAtom";
import machineBeatsCount from "../../../lib/store/machineBeatsCount";

export interface NoteProps {
  note: string;
  index: number;
  indexRow: number;
  synth: PolySynth;
}

const Note = ({ synth, note, indexRow, index }: NoteProps) => {
  const [activeNotes, setActiveNotes] = useRecoilState(
    // try to replace this atom with
    // a single atom representing this notes state
    // -> change noteIsActive to take two coordinates
    // its own index and the row index {noteIndex: x, rowIndex: y}
    // then use a selector to collect all the notes and create
    // an array of active note outside of this component
    noteRowActiveBeatsAtom(note)
  );
  const noteIsActiveState = useRecoilValue(noteIsActive(index));
  const machineIsOnState = useRecoilValue(machineIsOnAtom);
  const machineBeatsCountState = useRecoilValue(machineBeatsCount);

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
  }, [
    activeNotes,
    synth,
    index,
    note,
    machineIsOnState,
    machineBeatsCountState,
  ]);

  const handleUpdateIsActive = () => {
    const state = [...activeNotes];
    state[index] = !activeNotes[index];
    setActiveNotes([...state]);
  };

  const styleActive = "bg-violetdark";
  const styleCurrentBeat = "brightness-75";

  return (
    <button
      className={`border rounded-lg border-black hover:brightness-125 transition-all  m-1 w-full ${
        activeNotes[index] ? styleActive : "bg-violetlight"
      } ${noteIsActiveState ? styleCurrentBeat : null}`}
      onClick={handleUpdateIsActive}
    />
  );
};

export default Note;
