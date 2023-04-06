import { ReactNode } from "react";

interface ModalWrapperProps {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const ModalWrapper = ({ isOpen, children, onClose }: ModalWrapperProps) => {
  return isOpen ? (
    <div className="relative z-50">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/10"
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="flex-column items-center bg-air justify-center bg-white border border-black p-8 rounded">
          {children}
          <button
            className="mx-auto border border-black rounded bg-emerald p-2 align-self-center"
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
