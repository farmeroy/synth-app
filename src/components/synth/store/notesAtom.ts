import { atom } from "recoil";
import cnf from "../../../lib/config.json";

/**
 * {
 * notes: [
 * {note: C4,
 * isActive: false}
 * ]
 * }
 */

const notesAtom = atom({
  key: `notesAtom${Date.now()}`,
  default: cnf.notes,
});

export default notesAtom;
