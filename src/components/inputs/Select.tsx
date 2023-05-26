import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ReactComponent as UpDownArrow } from "@ICONS/upDownArrow.svg";
import widths, { WidthsType } from "./styles/widths";
import heights, { HeightsType } from "./styles/heights";
import Center from "@CONTAINERS/Center";

type ListBoxInputType = {
  value: string;
  onChange: (index: string) => any;
  options: (JSX.Element | string | number)[];
  placeholder: string;
  width: WidthsType;
  height?: HeightsType;
};

const ListBoxInput = ({
  value,
  onChange,
  options,
  placeholder,
  width,
  height = "md",
}: ListBoxInputType) => {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className={`relative ${widths[width]}`}>
        <Listbox.Button
          className={`${heights[height]} bg-neutral-200 dark:bg-neutral-700 rounded w-full flex dark:text-white`}
        >
          {value === "init" ? (
            <div className="grow my-auto text-neutral-400 text-left">
              {placeholder}
            </div>
          ) : (
            <div className="grow my-auto text-left">{value}</div>
          )}

          <Center
          style={`stroke-blue-500 dark:stroke-blue-400 fill-none stroke-[2]`}
          vertically
          >
            <UpDownArrow></UpDownArrow>
          </Center>
        </Listbox.Button>

        <Transition
          as={Fragment}
          enter="transition-all duration-300 overflow-hidden"
          leave="transition-all duration-300 overflow-hidden"
          enterFrom="transform scale-y-0  scale-x-90  origin-top"
          enterTo="transform scale-100  origin-top"
          leaveFrom="transform scale-100  origin-top"
          leaveTo="transform scale-y-0  scale-x-90  origin-top"
        >
          <Listbox.Options className={`absolute mt-1 w-full z-50`}>
            {options.map((option, index) => (
              <Listbox.Option
                className={({ active }) =>
                  `px-2 h-16 border-b-[0.7px] bg-neutral-200 dark:bg-neutral-700 dark:text-white dark:border-neutral-600 border-neutral-100 last:border-none flex items-center ${
                    active
                      ? "bg-neutral-300 dark:bg-neutral-800"
                      : ""
                  }`
                }
                key={index}
                value={option}
              >
                {({ selected }) => (
                  <>
                    <div className={`text-xl ${selected ? "font-bold" : ""}`}>
                      {option}
                    </div>
                    {selected ? (
                      <span className="">
                        <div className="" aria-hidden="true"></div>
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
            <div className="bg-neutral-200 dark:bg-neutral-700 h-2 rounded-b-full border-b-[1rem]-xx"></div>
            <div className="h-20"></div>
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default ListBoxInput;
