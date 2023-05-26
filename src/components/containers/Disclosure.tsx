import { Disclosure, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ReactComponent as UpDownArrow } from "@ICONS/upDownArrow.svg";

const Accordian = ({ title, children }: any) => {
  return (
    <Disclosure>
      <Disclosure.Button className={`flex items-stretch w-full rounded dark:bg-neutral-700  text-left hover:bg-neutral-200-xxx bg-neutral-200 dark:hover:bg-neutral-800-xxx focus:outline-none-xxx focus-visible:ring-xxx focus-visible:ring-neutral-500-xxx focus-visible:ring-opacity-75-xxx dark:text-white`}>
        <div className="grow">{title}</div>
        <div className="stroke-blue-500 dark:stroke-blue-400 fill-none stroke-[2] grid place-items-center text-xl p-3">
          <UpDownArrow></UpDownArrow>
        </div>
      </Disclosure.Button>
      <Transition
        as={Fragment}
        enter="transition-all duration-300 overflow-hidden"
        leave="transition-all duration-300 overflow-hidden"
        enterFrom="transform scale-y-0  scale-x-90  origin-top"
        enterTo="transform scale-100  origin-top"
        leaveFrom="transform scale-100  origin-top"
        leaveTo="transform scale-y-0  scale-x-90  origin-top"
      >
        <Disclosure.Panel className="">{children}</Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
};

export default Accordian;
