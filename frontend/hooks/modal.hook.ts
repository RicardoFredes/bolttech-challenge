import { useContext } from "react";
import { ModalContext } from "../contexts/modal.context";

export const useModal = () => {
  const { openModal, closeModal } = useContext(ModalContext);
  return {
    open: openModal,
    close: closeModal,
  };
};
