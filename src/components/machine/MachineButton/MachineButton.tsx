interface MachineButtonProps {
  clickHandler: (args: any) => void;
  children: React.ReactNode;
}

const MachineButton = ({ clickHandler, children }: MachineButtonProps) => {
  return (
    <button
      onClick={clickHandler}
      className="p-3 m-2 border border-black rounded-full bg-emerald transition-all hover:brightness-110"
    >
      {children}
    </button>
  );
};

export default MachineButton;
