import React from "react";
import classNames from "classnames";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = ({ className, ...props }: CardProps) => {
  const cn = classNames(className, "card");
  return <div className={cn} {...props} />;
};
