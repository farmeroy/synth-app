interface MachineButtonProps {
  clickHandler: (args: any) => void;
  children: React.ReactNode;
}

const MachineButton = ({ clickHandler, children }: MachineButtonProps) => {
  return (
    <button
      onClick={clickHandler}
      className="m-2 p-4 border border-black bg-emerald rounded-full hover:opacity-75"
    >
      {children}
    </button>
  );
};

export default MachineButton;
