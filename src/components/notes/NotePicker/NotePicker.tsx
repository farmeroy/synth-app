import { useRecoilState } from "recoil";
import notesAtom from "../../../lib/store/notesAtom";

const NotePicker = () => {
  const [notes, setNotes] = useRecoilState(notesAtom);
  return (
    <div className="flex flex-wrap w-full p-4 bg-violetlight">
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
                  isActive: !prevNoteValues.find(
                    (prevNote) => prevNote.note == note.note
                  ).isActive,
                  frequency: prevNoteValues.find(
                    (prevNote) => prevNote.note == note.note
                  ).frequency,
                },
              ].sort((a, b) => a.frequency - b.frequency)
            )
          }
          className={`p-2 m-1 border rounded hover:border-emerald ${
            note.isActive ? "brightness-125" : "brightness-75"
          } transition-all bg-air border-black`}
        >
          {note.note}
        </button>
      ))}
    </div>
  );
};

export default NotePicker;
