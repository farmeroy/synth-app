import machineBeatsCount from "../../lib/store/machineBeatsCount";
import { useRecoilState } from "recoil";
import { CircleMinus, CirclePlus } from "tabler-icons-react";
const MachineControlBeats = () => {
  const [machineBeatsCountState, setMachineBeatsCountState] =
    useRecoilState(machineBeatsCount);
  return (
    <div className="flex m-1 rounded-full border  border-violetlight hover:border-emerald w-full p-3 bg-violetlight">
      <label htmlFor="beat" className="mx-2 text-emerald">
        Beats:
      </label>
      <div className="flex items-center ">
        <button className="">
          <CircleMinus
            className="bg-emerald rounded-full"
            size={28}
            color="purple"
            onClick={() => setMachineBeatsCountState((state) => (state -= 1))}
          />
        </button>
        <input
          type="number"
          name="beats"
          min={1}
          max={48}
          value={machineBeatsCountState}
          onChange={(e) => setMachineBeatsCountState(Number(e.target.value))}
          className="w-8 items-center mx-2 border-b-2 border-violetdark text-center bg-violetlight text-emerald"
        />
        <button>
          <CirclePlus
            size={28}
            color="purple"
            className="bg-emerald rounded-full"
            onClick={() => setMachineBeatsCountState((state) => (state += 1))}
          />
        </button>
      </div>
    </div>
  );
};

export default MachineControlBeats;
