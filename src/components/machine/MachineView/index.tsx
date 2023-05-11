import MachineInputBPM from "../MachineInputBPM";
import MachineButtonStart from "../MachineButtonStart";
import MachineButtonNoteAdd from "../MachineButtonNoteAdd/MachineButtonNoteAdd";
import MachineControlBeats from "../MachineControlBeats";
import MachineButtonSave from "../MachineButtonSave";

const MachineView = () => {
  return (
    <div className="flex flex-wrap items-center w-full m-1 lg:justify-center">
      <div className="flex-col justify-center my-2">
        <div className="flex justify-around">
          <MachineButtonStart />
          <MachineButtonNoteAdd />
          <MachineButtonSave />
        </div>
        <div className="flex-wrap max-w-xs ">
          <MachineControlBeats />
          <MachineInputBPM />
        </div>
      </div>
    </div>
  );
};

export default MachineView;
