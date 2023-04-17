export interface InputRangeProps {
  label: string;
  min: number | null;
  max: number | null;
  value: number;
  handleOnChange: (args0: React.ChangeEvent) => void;
}

const InputRange = ({
  label,
  min,
  max,
  value,
  handleOnChange,
}: InputRangeProps) => {
  return (
    <div className="flex m-1 rounded-full border  border-violetlight hover:border-emerald w-fit p-3 bg-violetlight">
      <label htmlFor={label} className="text-emerald mx-2">
        {label}
      </label>
      <input
        type="range"
        name={label}
        min={min ? min : undefined}
        max={max ? max : undefined}
        value={value}
        onChange={(e) => handleOnChange(e)}
        className="range  w-24 border border-black accent-emerald rounded-full text-center "
      />
      <p className="mx-2 text-emerald">{value}</p>
    </div>
  );
};

export default InputRange;
