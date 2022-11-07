import classNames from "classnames";
import React from "react";
import { Icon } from "../Icon";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const Button = ({
  className,
  children,
  type = "button",
  disabled,
  isLoading,
  ...props
}: ButtonProps) => {
  const cn = classNames(className, "btn", { "btn--is-loading": isLoading });
  const isDisabled = isLoading || disabled;
  return (
    <button className={cn} type={type} disabled={isDisabled} {...props}>
      {isLoading ? <Icon icon="fa-circle-notch fa-spin" /> : children}
    </button>
  );
};
