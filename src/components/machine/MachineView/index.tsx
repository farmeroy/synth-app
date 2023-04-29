import MachineInputBPM from "../MachineInputBPM";
import MachineButtonStart from "../MachineButtonStart";
import MachineButtonNoteAdd from "../MachineButtonNoteAdd/MachineButtonNoteAdd";
import MachineControlBeats from "../MachineControlBeats";
import AudioVisualizer from "../AudioVisualizer";

const MachineView = () => {
  return (
    <div className="flex flex-wrap items-center w-full m-1 lg:justify-center">
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
      <AudioVisualizer />
    </div>
  );
};

export default MachineView;
