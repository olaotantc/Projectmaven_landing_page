// context/ModalContext.js

import React, { createContext, useState, useContext } from "react";

// Create Context
export const ModalContext = createContext();

// Custom hook to use the ModalContext
export const useModalContext = () => {
  return useContext(ModalContext);
};

// Provider Component
export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 8000);
  };

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <ModalContext.Provider
      value={{
        
        showModal,
        setShowModal,
        triggerConfetti,
        showConfetti,
        onClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
