import React from "react";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
  onSave,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-7 rounded-lg shadow-lg max-w-md w-full dark:bg-gray-900">
        <h2 className="text-2xl font-medium mb-4 dark:text-gray-100">
          {title}
        </h2>
        {children}
        <div className="flex justify-end space-x-3">
          <button
            className="bg-gray-600 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-gradient-to-r from-[#0A42D4] to-[#20A2D9] text-white px-4 py-2 rounded"
            onClick={onSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
