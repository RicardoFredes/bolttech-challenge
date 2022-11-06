import classNames from "classnames";
import React from "react";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: any;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export const Text = ({
  as: Component = "p",
  className,
  variant = "primary",
  size = "md",
  ...props
}: TextProps) => {
  const cn = classNames(className, "text", `text--${variant}`, `text--${size}`);
  return <Component className={cn} {...props} />;
};
