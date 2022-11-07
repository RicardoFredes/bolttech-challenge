import React, { createContext, useState } from "react";
import { Modal } from "../components";

export const ModalContext = createContext({
  openModal: (_children: React.ReactNode) => {},
  closeModal: () => {},
});

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState<null | React.ReactNode>(null);

  const openModal = (modalChildren: React.ReactNode) => setModal(modalChildren);
  const closeModal = () => setModal(null);

  const value = {
    openModal,
    closeModal,
  };
  return (
    <ModalContext.Provider value={value}>
      {children}
      {modal ? (
        <Modal.Container>
          <Modal>{modal}</Modal>
        </Modal.Container>
      ) : null}
    </ModalContext.Provider>
  );
};
