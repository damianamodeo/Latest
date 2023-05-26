import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { useTernaryDarkMode } from "usehooks-ts";

type ModalType = {
  isOpen: any;
  onClose: any;
  title?: string;
  children: any;
  height: "auto" | "full" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
};

const Modal = ({ isOpen, onClose, title, children, height }: ModalType) => {
  const heights: { [index: string]: string } = {
    auto: "h-auto",
    full: "h-full",
    xs: "h-[5rem]",
    sm: "h-[10rem]",
    md: "h-[20rem]",
    lg: "h-[30rem]",
    xl: "h-[40rem]",
    "2xl": "h-[50rem]",
  };
  const { isDarkMode } = useTernaryDarkMode();
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={`fixed inset-0 bg-black bg-opacity-50 `} />
        </Transition.Child>

        <div className={`fixed inset-0 overflow-y-auto ${isDarkMode && "dark"}`}>
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`${heights[height]} w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 dark:border-neutral-700 border-neutral-300 border p-6 text-left align-middle shadow-xl transition-all `}
              >
                <div className="h-full flex flex-col">
                  {title && (
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 dark:text-white text-center"
                    >
                      {title}
                    </Dialog.Title>
                  )}
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
