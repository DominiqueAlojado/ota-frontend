import { Controller, Control } from "react-hook-form";

interface DropdownProps {
  label: string;
  name: string;
  control: Control<any>;
  options: string[];
  onSelect?: (value: string) => void;
  error?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  name,
  control,
  options,
  onSelect,
  error,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium">{label}</label>
      <Controller
        name={name}
        control={control}
        defaultValue={options[0]}
        render={({ field }) => (
          <>
            <select
              {...field}
              className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                field.onChange(e);
                onSelect?.(e.target.value);
              }}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </>
        )}
      />
    </div>
  );
};

export default Dropdown;
