import classNames from "classnames";
import React from "react";
import { Icon } from "../Icon";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: "primary" | "naked";
}

export const Button = ({
  className,
  children,
  type = "button",
  disabled,
  isLoading,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const cn = classNames(className, "btn", `btn--${variant}`, { "btn--is-loading": isLoading });
  const isDisabled = isLoading || disabled;
  return (
    <button className={cn} type={type} disabled={isDisabled} {...props}>
      {isLoading ? <Icon icon="fa-circle-notch fa-spin" /> : children}
    </button>
  );
};
