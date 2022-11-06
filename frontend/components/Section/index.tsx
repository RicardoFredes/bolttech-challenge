import React from "react";
import classNames from "classnames";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Section = ({ className, ...props }: SectionProps) => {
  const cn = classNames(className, "section");
  return <section className={cn} {...props} />;
};
