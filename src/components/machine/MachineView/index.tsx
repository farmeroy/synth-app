import MachineInputBPM from "../MachineInputBPM";
import MachineButtonStart from "../MachineButtonStart";
import MachineButtonNoteAdd from "../MachineButtonNoteAdd/MachineButtonNoteAdd";
import MachineControlBeats from "../MachineControlBeats";

const MachineView = () => {
  return (
    <div className="flex justify-center my-2">
      <div className="flex">
        <MachineButtonStart />
        <MachineButtonNoteAdd />
      </div>
      <div className="flex-wrap">
        <MachineControlBeats />
        <MachineInputBPM />
      </div>
    </div>
  );
};

export default MachineView;
