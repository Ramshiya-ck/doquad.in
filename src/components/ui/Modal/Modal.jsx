import React from 'react';

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="modal">
      {children}
    </div>
  );
};

export default Modal;
