import React from "react";
import classNames from "classnames";

interface TitleProps {
  className?: string;
  children: React.ReactNode;
  as?: any;
}

export const Title = ({ className, children, as: Component = "h2" }: TitleProps) => {
  const cn = classNames(className, "title");
  return <Component className={cn}>{children}</Component>
};
