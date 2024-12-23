// context/ModalContext.js

import React, { createContext, useState, useContext } from "react";

// Create Context
export const ModalContext = createContext();

// Custom hook to use the ModalContext
export const useModalContext = () => {
  return useContext(ModalContext); // Accesses the context values
};

// Provider Component
export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [showConfetti, setShowConfetti] = useState(false); // State to manage confetti visibility

  // Function to trigger confetti and hide it after 8 seconds
  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 8000); // Hides confetti after 8 seconds
  };

  // Function to close the modal
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
      {children} {/* Render children components */}
    </ModalContext.Provider>
  );
};
