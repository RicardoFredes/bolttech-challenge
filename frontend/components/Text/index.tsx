import React from "react";
import classNames from "classnames";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: any;
}

export const Text = ({ as: Component = "p", className, ...props }: TextProps) => {
  const cn = classNames(className, "text");
  return <Component className={cn} {...props} />;
};
