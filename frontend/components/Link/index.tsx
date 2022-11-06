import classNames from "classnames";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Link = ({ className, href = "#", ...props }: LinkProps) => {
  const cn = classNames(className, "link");
  return <RouterLink to={href} className={cn} {...props} />;
};
