import { atom } from "recoil";
// tracks the current beat in the tone.Transport
const activeBeatState = atom({
  key: "activeBeatState",
  default: 0,
});

export default activeBeatState;
