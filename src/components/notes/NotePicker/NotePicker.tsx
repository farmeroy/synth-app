import { useRecoilState } from "recoil";
import notesConfig from "../../../lib/notesConfig.json";
import { INote } from "../../../lib/store/notesAtom";
import notesInUseAtom from "../../../lib/store/notesInUseAtom";

const NotePicker = () => {
  const [notesInUse, setNotesInUse] = useRecoilState(notesInUseAtom);
  const notes = notesConfig.notes as INote[];

  return (
    <div className="flex-col items-center w-full">
      <div className="flex items-center">
        <h1 className="mx-auto text-emerald">Note Picker</h1>
      </div>
      <div className="w-full grid grid-cols-6 bg-violetlight">
        {notes.map((note) => (
          <button
            key={Math.random()}
            onClick={() =>
              notesInUse.indexOf(note.note) < 0
                ? setNotesInUse((prevState) =>
                    [...prevState, note.note].sort(
                      (a, b) =>
                        (notes.find((note) => note.note === a)
                          ?.frequency as number) -
                        (notes.find((note) => note.note === b)
                          ?.frequency as number)
                    )
                  )
                : setNotesInUse((prevState) =>
                    [
                      ...prevState.filter((noteName) => noteName !== note.note),
                    ].sort(
                      (a, b) =>
                        (notes.find((note) => note.note == a)
                          ?.frequency as number) -
                        (notes.find((note) => note.note == b)
                          ?.frequency as number)
                    )
                  )
            }
            className={`p-2 m-1 border rounded-lg hover:border-emerald ${
              notesInUse.indexOf(note.note) > -1
                ? "brightness-125"
                : "brightness-75"
            } transition-all bg-air border-black`}
          >
            {note.note}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NotePicker;
