import { Combobox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import widths, { WidthsType } from "./styles/widths";
import heights, { HeightsType } from "./styles/heights";

type ComboBoxType = {
  value?: JSX.Element | string | number;
  options: (JSX.Element | string | number)[];
  onChange: (value: any) => unknown;
  onSelect: (event: any) => void;
  width: WidthsType
  height?: HeightsType
  placeholder?: string
};

const Autocomplete = ({
  value,
  options,
  onChange,
  onSelect,
  width,
  placeholder,
  height = "md"
}: ComboBoxType) => {
  return (
    <Combobox value={value} onChange={onSelect} >
      <div className={`relative ${widths[width]}`}>
        <Combobox.Input placeholder={placeholder}
          onChange={onChange}
          className={`${heights[height]} bg-neutral-200 dark:bg-neutral-700 rounded p-2 w-full flex text-black dark:text-white`}
        ></Combobox.Input>
        <Transition
          as={Fragment}
          enter="transition-all duration-300 overflow-hidden"
          leave="transition-all duration-300 overflow-hidden"
          enterFrom="transform scale-y-0  scale-x-90  origin-top"
          enterTo="transform scale-100  origin-top"
          leaveFrom="transform scale-100  origin-top"
          leaveTo="transform scale-y-0  scale-x-90  origin-top"
        >
          <Combobox.Options
            className={`absolute bg-neutral-200 dark:bg-neutral-700 mt-1 rounded w-full z-50 text-black dark:text-white`}
          >
            {options.map((option, index) => (
              <Combobox.Option
                key={index}
                value={option}
                className={({ active }) =>
                  `p-2 border-b-[0.7px] border-neutral-100 dark:border-neutral-600 last:border-none flex items-center ${
                    active ? "bg-neutral-300 dark:bg-neutral-800" : ""
                  }`
                }
              >
                {({ selected, active }) => (
                  <>
                    <span className={`text-xl ${selected ? "font-bold" : ""}`}>
                      {option}
                    </span>
                    {selected ? (
                      <span className={`${active ? "" : ""}`}>
                        <div className="" aria-hidden="true"></div>
                      </span>
                    ) : null}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

export default Autocomplete;
