import React from "react";
import classNames from "classnames";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  name: string;
  infoMessage?: string;
  errorMessage?: string;
}

export const Input = ({
  className,
  label,
  infoMessage,
  errorMessage,
  ...props
}: InputProps) => {
  const cn = classNames(className, "input", { "input--disabled": props.disabled });
  return (
    <div className={cn}>
      <label htmlFor={props.name} className="input__label">
        {label} {props.required ? <span className="input__required">*</span> : null}
      </label>
      <input className="input__element" {...props} />
    </div>
  );
};
