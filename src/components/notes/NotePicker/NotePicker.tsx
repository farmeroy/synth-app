interface NotePickerProps {
  setNote: (arg0: string) => void;
}

const notes = [
  ["A2", "Bb2", "B2", "C2", "Db2", "D2", "Eb2", "E2", "F2", "Gb2", "G2", "Ab2"],
  ["A3", "Bb3", "B2", "C3", "Db3", "D2", "Eb3", "E3", "F3", "Gb2", "G3", "Ab3"],
  ["A4", "Bb4", "B4", "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4"],
  ["A5", "Bb5", "B5", "C5", "Db5", "D5", "Eb5", "E5", "F5", "Gb5", "G5", "Ab5"],
];

const NotePicker = ({ setNote }: NotePickerProps) => {
  return (
    <div className="flex-column">
      {notes.map((noteRow) => (
        <div key={Math.random()} className="m-1 p1">
          {noteRow.map((note) => (
            <button
              key={Math.random()}
              onClick={() => setNote(note)}
              className="p-1 m-1 border border-black"
            >
              {note}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default NotePicker;
