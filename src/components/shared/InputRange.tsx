export interface InputRangeProps {
  label: string;
  min: number | null;
  max: number | null;
  value: number;
  handleOnChange: (args0: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputRange = ({
  label,
  min,
  max,
  value,
  handleOnChange,
}: InputRangeProps) => {
  return (
    <div className="flex w-full p-3 m-1 border rounded-full border-violetlight hover:border-emerald bg-violetlight">
      <label htmlFor={label} className="mx-2 text-emerald">
        {label}
      </label>
      <input
        type="range"
        name={label}
        min={min ? min : undefined}
        max={max ? max : undefined}
        value={value}
        onChange={(e) => handleOnChange(e)}
        className="w-24 text-center border border-black rounded-full range accent-emerald "
      />
      <p className="mx-2 text-emerald">{value}</p>
    </div>
  );
};

export default InputRange;
