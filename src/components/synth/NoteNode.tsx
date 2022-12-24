interface NoteNodeProps {
  note: string;
}

const NoteNode = ({ note }: NoteNodeProps) => {
  return <div>{note}</div>;
};

export default NoteNode;
