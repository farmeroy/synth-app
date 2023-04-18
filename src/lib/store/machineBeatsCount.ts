import { atom } from "recoil";

const machineBeatsCount = atom({
  key: "beats",
  default: 8,
});

export default machineBeatsCount;
