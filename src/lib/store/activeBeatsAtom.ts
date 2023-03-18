import { atomFamily } from "recoil";

const activeBeatState = atomFamily({
  key: "activeBeatState",
  default: [false, false, false, false],
});

export default activeBeatState;
