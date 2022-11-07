import React from "react";
import { Card, IconButton } from "..";
import { useModal } from "../../hooks/modal.hook";

interface ModalProps {
  children: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  return (
    <Card className="modal" onClick={(event) => event.stopPropagation()}>
      {children}
    </Card>
  );
};

interface ModalContainerProps {
  children: React.ReactNode;
}

Modal.Container = ({ children }: ModalContainerProps) => {
  const modal = useModal();
  return (
    <div className="modal-container" onClick={modal.close}>
      <IconButton icon="fa-close" className="modal-container__close" onClick={modal.close} />
      {children}
    </div>
  );
};
