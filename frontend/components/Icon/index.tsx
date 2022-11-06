import classNames from "classnames";
import React from "react";

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  icon: string;
}

export const Icon = ({ className, icon, ...props }: IconProps) => {
  const cn = classNames(className, "fa", icon);
  return <i className={cn} {...props} />;
};
