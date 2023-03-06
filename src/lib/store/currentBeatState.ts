import { atom } from "recoil";

const activeBeatState = atom({
  key: "activeBeatState",
  default: 0,
});

export default activeBeatState;
