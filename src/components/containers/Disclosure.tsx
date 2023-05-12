import { Disclosure } from "@headlessui/react";

const Accordian = ({ title, children }: any) => {
  return (
    <Disclosure>
      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-neutral-100 dark:bg-neutral-700  text-left hover:bg-neutral-200 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring focus-visible:ring-neutral-500 focus-visible:ring-opacity-75">
        {title}
      </Disclosure.Button>
      <Disclosure.Panel className="">
        {children}
      </Disclosure.Panel>
    </Disclosure>
  );
};

export default Accordian;
