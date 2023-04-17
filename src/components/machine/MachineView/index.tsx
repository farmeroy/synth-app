import MachineInputBPM from "../MachineInputBPM";
import MachineButtonStart from "../MachineButtonStart";
import MachineButtonNoteAdd from "../MachineButtonNoteAdd/MachineButtonNoteAdd";
import MachineControlBeats from "../MachineControlBeats";

const MachineView = () => {
  return (
    <div className="p-4">
      <MachineButtonStart />
      <div>
        <MachineButtonNoteAdd />
        <MachineControlBeats />
        <MachineInputBPM />
      </div>
    </div>
  );
};

export default MachineView;
