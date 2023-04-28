import MachineInputBPM from "../MachineInputBPM";
import MachineButtonStart from "../MachineButtonStart";
import MachineButtonNoteAdd from "../MachineButtonNoteAdd/MachineButtonNoteAdd";
import MachineControlBeats from "../MachineControlBeats";
import AudioVisualizer from "../AudioVisualizer";

const MachineView = () => {
  return (
    <div className="flex flex-wrap items-center m-1 lg:justify-center">
      <div className="flex-col justify-center my-2">
        <div className="flex">
          <MachineButtonStart />
          <MachineButtonNoteAdd />
        </div>
        <div className="flex-wrap max-w-xs ">
          <MachineControlBeats />
          <MachineInputBPM />
        </div>
      </div>
      <div className="flex justify-center w-full max-w-2xl lg:p-8">
        <AudioVisualizer />
      </div>
    </div>
  );
};

export default MachineView;
