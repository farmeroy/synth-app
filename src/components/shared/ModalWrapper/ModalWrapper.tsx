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

      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm p-4">
        <div className="flex-column items-center justify-center drop-shadow-2xl bg-violetlight border border-black p-8 rounded-lg">
          {children}
          <button
            className="ml-2 border hover:opacity-75 transition-all border-black rounded-lg bg-emerald p-2"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalWrapper;
