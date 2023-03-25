import { atom } from "recoil";

const machineBeatsCount = atom({
  key: "beats",
  default: 4,
});

export default machineBeatsCount;
