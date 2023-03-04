export interface NoteProps {
  key: number;
  active: boolean;
}
const Note = ({ key, active }: NoteProps) => {
  return <button className="border border-black w-full"></button>;
};

export default Note;
