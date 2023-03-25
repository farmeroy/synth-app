import { atom } from "recoil";

const machineNotesCount = atom({
  key: "machineNotesCount",
  default: 4,
});

export default machineNotesCount;
