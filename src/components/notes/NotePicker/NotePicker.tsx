import { useRecoilState } from "recoil";
import notesAtom from "../../../lib/store/notesAtom";

const NotePicker = () => {
  const [notes, setNotes] = useRecoilState(notesAtom);
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
              setNotes((prevNoteValues) =>
                [
                  ...prevNoteValues.filter(
                    (prevNote) => prevNote.note != note.note
                  ),
                  {
                    note: note.note,
                    isActive:
                      !prevNoteValues?.find(
                        (prevNote) => prevNote.note == note.note
                      )?.isActive ?? false,
                    frequency:
                      prevNoteValues.find(
                        (prevNote) => prevNote.note == note.note
                      )?.frequency ?? 0,
                  },
                ].sort((a, b) => a.frequency - b.frequency)
              )
            }
            className={`p-2 m-1 border rounded-lg hover:border-emerald ${
              note.isActive ? "brightness-125" : "brightness-75"
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
