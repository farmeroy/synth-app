import { ReactNode, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface ModalWrapperProps {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
  title?: string | null;
}

const ModalWrapper = ({
  isOpen,
  title,
  children,
  onClose,
}: ModalWrapperProps) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-30"
          leave="ease-in duration-200"
          leaveFrom="opacity-30"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-black opacity-30"
            aria-hidden="true"
          />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="fixed inset-0 flex justify-center backdrop-blur-sm">
            {title ? <Dialog.Title>{title}</Dialog.Title> : null}
            <div className="w-full max-w-2xl p-2 m-4 border border-black rounded-lg flex-column h-fit bg-violetlight">
              {children}
              <div className="flex">
                <button
                  className="w-full p-2 m-1 border border-black rounded-lg hover:opacity-75 transition-all bg-emerald"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ModalWrapper;
