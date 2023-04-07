interface MachineButtonProps {
  clickHandler: (args: any) => void;
  children: React.ReactNode;
}

const MachineButton = ({ clickHandler, children }: MachineButtonProps) => {
  return (
    <button
      onClick={clickHandler}
      className="m-2 p-3 border border-black bg-emerald rounded-full transition-all hover:brightness-110"
    >
      {children}
    </button>
  );
};

export default MachineButton;
