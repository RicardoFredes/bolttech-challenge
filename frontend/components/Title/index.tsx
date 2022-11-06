import classNames from "classnames";
import React from "react";

interface TitleProps {
  className?: string;
  children: React.ReactNode;
  as?: any;
  size?: "sm" | "md" | "lg";
}

export const Title = ({ className, children, as: Component = "h2", size = "md" }: TitleProps) => {
  const cn = classNames(className, "title", `title--${size}`);
  return <Component className={cn}>{children}</Component>;
};
