import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import widths, { WidthsType } from "./styles/widths";
import heights, { HeightsType } from "./styles/heights";

type TextInputType = {
  label: string;
  register?: UseFormRegisterReturn<string>;
  error?: FieldError | undefined;
  value: any;
  onChange?: (argument: any) => any;
  placeholder?: string;
  width: WidthsType;
  height?: HeightsType;
};

const TextInput = ({
  label,
  register,
  error,
  value,
  onChange,
  placeholder,
  width,
  height = "md",
}: TextInputType) => {
  return (
    <>
      <label> {label}</label>
      <input
        className={`${widths[width]} ${heights[height]} dark:bg-neutral-700 bg-neutral-200 rounded p-2`}
        type="text"
        value={value}
        onChange={onChange}
        {...register}
        placeholder={placeholder}
      />
      {error && <span className="text-red-500"> {error.message}</span>}
    </>
  );
};

export default TextInput;
