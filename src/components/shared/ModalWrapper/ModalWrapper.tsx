import { ReactNode } from "react";

interface ModalWrapperProps {
  children: ReactNode;
  onClose: () => void;
}

const ModalWrapper = ({ children, onClose }: ModalWrapperProps) => {
  return (
    <div className="relative z-50">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/10"
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="flex-column items-center justify-center bg-white border border-black p-2 rounded">
          {children}
          <button className="mx-auto align-self-center" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;
