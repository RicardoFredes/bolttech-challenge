import classNames from "classnames";
import React from "react";
import { ButtonProps, Icon, IconProps } from "..";

interface IconButtonProps extends ButtonProps {
  icon: IconProps["icon"];
}

export const IconButton = ({
  className,
  children,
  type = "button",
  disabled,
  isLoading,
  icon,
  ...props
}: IconButtonProps) => {
  const cn = classNames(className, "icon-button");

  return (
    <button type={type} className={cn} {...props}>
      <Icon icon={isLoading ? "fa-circle-notch fa-spin" : icon} />
    </button>
  );
};
