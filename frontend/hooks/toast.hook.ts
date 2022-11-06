import { useContext } from "react";
import { ToastProps } from "../components";
import { ToastContext } from "../contexts/toast.context";

export const useToast = () => {
  const { openToast } = useContext(ToastContext);

  const makeToast = (type: ToastProps["type"]) => {
    return (title: string, description?: string) =>
      openToast({ title, description, isClosable: true, type });
  };

  return {
    open,
    success: makeToast("success"),
    error: makeToast("error"),
    info: makeToast("info"),
    warning: makeToast("warning"),
  };
};
