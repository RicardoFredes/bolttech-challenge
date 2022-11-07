import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Card, IconButton } from "..";

interface DropdownProps {
  children: React.ReactNode;
}

interface DropdownMenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Dropdown = ({ children }: DropdownProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClickOut = () => setOpen(false);
    document.addEventListener("click", handleClickOut, { once: true });
    return () => document.removeEventListener("click", handleClickOut);
  });

  return (
    <div className="dropdown" onClick={(event) => event.stopPropagation()}>
      <IconButton icon="fa-ellipsis-v" onClick={() => setOpen(true)} />
      {open ? (
        <Card className="dropdown__menu-list" onClick={() => setOpen(false)}>
          {children}
        </Card>
      ) : null}
    </div>
  );
};

Dropdown.MenuItem = ({ children, className, ...props }: DropdownMenuItemProps) => {
  const cn = classNames(className, "dropdown__menu-item");
  return (
    <button className={cn} type="button" {...props}>
      {children}
    </button>
  );
};
