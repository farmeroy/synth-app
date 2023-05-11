import { useRecoilState, useRecoilValue } from "recoil";
import { Loop, PolySynth, Transport } from "tone";
import noteIsActive from "../../../lib/store/noteIsActive";
import { useEffect, useMemo } from "react";
import machineIsOnAtom from "../../../lib/store/machineIsOnAtom";
import { INote } from "../../../lib/store/notesAtom";
import noteIsPlayingAtom from "../../../lib/store/noteIsPlayingAtom";

export interface NoteProps {
  note: INote;
  index: number;
  synth: PolySynth;
}

const Note = ({ synth, note, index }: NoteProps) => {
  const [isPlaying, setIsPlaying] = useRecoilState(
    noteIsPlayingAtom(`${note.note}-${index}`)
  );

  const noteIsActiveState = useRecoilValue(noteIsActive(index));
  const machineIsOnState = useRecoilValue(machineIsOnAtom);

  useEffect(() => {
    // I would like to move this out of use effect,
    // but this results in the loop being initialized
    // with the wrong time signature
    const loop = new Loop(() => {
      synth.triggerAttackRelease(note.frequency, "8n");
    }, "1n");

    if (isPlaying === true && machineIsOnState) {
      loop.start(`0:${index}:0`);
    } else {
      loop.stop().cancel();
    }
    return () => {
      loop.dispose();
    };
  }, [note, machineIsOnState, synth, index, isPlaying]);

  const handleUpdateIsActive = () => {
    setIsPlaying((state) => !state);
  };

  const styleActive = "bg-violetlight";
  const styleInactive = "bg-violetdark";
  const styleCurrentBeat = "brightness-75";

  return (
    <button
      className={`border rounded-lg border-black hover:brightness-150 transition-all  m-px w-full ${
        isPlaying ? styleActive : styleInactive
      } ${noteIsActiveState ? styleCurrentBeat : null}`}
      onClick={handleUpdateIsActive}
    />
  );
};

export default Note;
