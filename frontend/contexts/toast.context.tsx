import React, { createContext, useState } from "react";
import { Toast, ToastProps } from "../components";

export const ToastContext = createContext({
  openToast: (_toast: ToastProps) => {},
});

const newHash = () => new Date().getTime().toString(36);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const openToast = (toast: ToastProps) => {
    if (!toast.id) toast.id = newHash();
    toast.onClose = () => {
      setToasts((toasts) => toasts.filter(({ id }) => id !== toast.id));
    };
    setToasts((toasts) => [toast].concat(toasts));
  };

  const value = {
    openToast,
  };
  return (
    <ToastContext.Provider value={value}>
      {children}
      <Toast.Container>
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </Toast.Container>
    </ToastContext.Provider>
  );
};
