import classNames from "classnames";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = ({ className, ...props }: CardProps) => {
  const cn = classNames(className, "card");
  return <div className={cn} {...props} />;
};

Card.Header = ({ className, ...props }: CardProps) => {
  const cn = classNames(className, "card-header");
  return <div className={cn} {...props} />;
};
