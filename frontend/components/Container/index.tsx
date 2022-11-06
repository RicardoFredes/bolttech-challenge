import React from "react";
import classNames from "classnames";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

export const Container = ({ className, size = "md", ...props }: ContainerProps) => {
  const cn = classNames("container", className, `container--${size}`);
  return <div className={cn} {...props} />;
};
