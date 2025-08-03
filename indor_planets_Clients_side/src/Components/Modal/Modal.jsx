import React from "react";

const Modal = ({ children, title, onClose, reportOnly }) => {
  return (
    <div className="modal modal-open">
      <div
        className={`modal-box relative max-w-lg ${
          reportOnly ? "bg-red-100" : "bg-white"
        }`}
      >
        <h3
          className={`text-xl font-bold mb-4 ${
            reportOnly ? "text-red-500" : "text-emerald-600"
          }`}
        >
          {title}
        </h3>
        {children}
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle cursor-target cursor-pointer absolute right-2 top-2"
          aria-label="Close modal"
        >
          ×
        </button>
      </div>
      <label className="modal-backdrop" onClick={onClose}></label>
    </div>
  );
};

export default Modal;
