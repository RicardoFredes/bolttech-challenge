import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Icon } from "../Icon";

interface ToastProps {
  isClosable?: boolean;
  timeout?: number;
  type?: "error" | "success" | "warning" | "info";
  title: string;
  description?: string;
  onClose?: VoidFunction;
  isOpened?: boolean;
  id?: string;
}

export type { ToastProps };

interface ToastContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const iconName = {
  info: "circle-info",
  error: "exclamation-circle",
  warning: "exclamation-circle",
  success: "check-circle",
};

export const Toast = ({
  isClosable,
  timeout = 9000,
  type = "info",
  title,
  description,
  onClose,
  isOpened = true,
  ...props
}: ToastProps) => {
  const [show, setShow] = useState(isOpened);
  const [hide, setHide] = useState(!isOpened);
  const cn = classNames("toast", `toast--${type}`, { "toast--show": show });

  const handleAnimationEnd = () => {
    if (!show) {
      onClose?.();
      setHide(true);
    }
  };

  useEffect(() => {
    if (timeout > 0) {
      const timer = setTimeout(() => setShow(false), timeout);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isOpened !== show) {
      setShow(isOpened);
      setHide(!isOpened);
    }
  }, [isOpened]);

  if (hide) return null;

  return (
    <div className={cn} onAnimationEnd={handleAnimationEnd} {...props}>
      <Icon icon={`fa-${iconName[type]}`} />
      <div className="toast__content">
        <h4 className="toast__title">{title}</h4>
        {description && <p className="toast__description">{description}</p>}
      </div>
      {isClosable ? (
        <button
          onClick={() => setShow(false)}
          className="toast__close-button"
          type="button"
          title="close"
        >
          <Icon icon="fa-close" />
        </button>
      ) : null}
    </div>
  );
};

Toast.Container = ({ className, ...props }: ToastContainerProps) => {
  const cn = classNames("toast-container", className);
  return <div className={cn} {...props} />;
};
