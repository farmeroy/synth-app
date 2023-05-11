import machineBeatsCount from "../../lib/store/machineBeatsCount";
import { useRecoilState } from "recoil";
import { CircleMinus, CirclePlus } from "tabler-icons-react";
const MachineControlBeats = () => {
  const [machineBeatsCountState, setMachineBeatsCountState] =
    useRecoilState(machineBeatsCount);
  console.log(machineBeatsCountState);
  return (
    <div className="flex w-full p-3 m-1 border rounded-full border-violetlight hover:border-emerald bg-violetlight">
      <label htmlFor="beat" className="mx-2 text-emerald">
        Beats:
      </label>
      <div className="flex items-center ">
        <button className="">
          <CircleMinus
            className="rounded-full bg-emerald"
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
          className="items-center w-8 mx-2 text-center border-b-2 border-violetdark bg-violetlight text-emerald"
        />
        <button>
          <CirclePlus
            size={28}
            color="purple"
            className="rounded-full bg-emerald"
            onClick={() => setMachineBeatsCountState((state) => (state += 1))}
          />
        </button>
      </div>
    </div>
  );
};

export default MachineControlBeats;
