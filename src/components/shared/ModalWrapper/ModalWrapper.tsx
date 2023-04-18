import { ReactNode } from "react";

interface ModalWrapperProps {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const ModalWrapper = ({ isOpen, children, onClose }: ModalWrapperProps) => {
  return isOpen ? (
    <div className="relative z-50">
      <div className="fixed inset-0 bg-black opacity-30" aria-hidden="true" />

      <div className="fixed inset-0 flex justify-center backdrop-blur-sm">
        <div className="flex-column  h-fit w-full max-w-2xl m-4 bg-violetlight border border-black rounded-lg p-2">
          {children}
          <div className="flex">
            <button
              className="m-1 w-full border hover:opacity-75 transition-all  border-black rounded-lg bg-emerald p-2"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalWrapper;
