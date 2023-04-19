import MachineInputBPM from "../MachineInputBPM";
import MachineButtonStart from "../MachineButtonStart";
import MachineButtonNoteAdd from "../MachineButtonNoteAdd/MachineButtonNoteAdd";
import MachineControlBeats from "../MachineControlBeats";
import AudioVisualizer from "../AudioVisualizer";

const MachineView = () => {
  return (
    <div className="flex-col justify-center my-2">
      <div className="flex">
        <MachineButtonStart />
        <MachineButtonNoteAdd />
      </div>
      <div className="flex-wrap">
        <MachineControlBeats />
        <MachineInputBPM />
      </div>
      <AudioVisualizer />
    </div>
  );
};

export default MachineView;
