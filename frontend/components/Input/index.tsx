import classNames from "classnames";
import React from "react";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  name: string;
  infoMessage?: string;
  errorMessage?: string;
}

export const Input = ({ className, label, infoMessage, errorMessage, ...props }: InputProps) => {
  const cn = classNames(className, "input", { "input--disabled": props.disabled });
  return (
    <div className={cn}>
      {label ? (
        <label htmlFor={props.name} className="input__label">
          {label} {props.required ? <span className="input__required">*</span> : null}
        </label>
      ) : null}
      <input className="input__element" {...props} />
    </div>
  );
};
