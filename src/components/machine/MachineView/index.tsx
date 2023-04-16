import MachineInputBPM from "../MachineInputBPM";
import MachineButtonStart from "../MachineButtonStart";
import MachineButtonStop from "../MachineButtonStop";
import MachineButtonBeatAdd from "../MachineButtonBeatAdd/MachineButtonBeatAdd";
import MachineButtonBeatRemove from "../MachineButtonBeatRemove/MachineButtonBeatRemove";
import MachineButtonNoteAdd from "../MachineButtonNoteAdd/MachineButtonNoteAdd";

const MachineView = () => {
  return (
    <div className="p-8">
      <MachineButtonStart />
      <MachineButtonStop />
      <div>
        <MachineButtonBeatAdd />
        <MachineButtonBeatRemove />
        <MachineButtonNoteAdd />
        <MachineInputBPM />
      </div>
    </div>
  );
};

export default MachineView;
