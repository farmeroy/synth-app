import * as Tone from "tone";
import { useEffect } from "react";

const SynthWrapper = ({}) => {
  let synth;
  useEffect(() => {
    Tone.start();
    synth = new Tone.Synth().toDestination();
  }, []);

  return (
    <div className="flex justify-around p-2">
      <h1 className="p-2 border border-black text-3xl">Synth</h1>
      <button onClick={() => synth?.triggerAttackRelease("C4", "8n") ?? null}>
        C
      </button>
    </div>
  );
};

export default SynthWrapper;
