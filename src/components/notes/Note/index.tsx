export interface NoteProps {
  active: boolean;
  note: String;
}
const Note = ({ note, active }: NoteProps) => {
  return <button className="border border-black w-full">{note}</button>;
};

export default Note;
