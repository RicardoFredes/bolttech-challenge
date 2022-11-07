import classNames from "classnames";
import React from "react";

export type OnSubmitValue<T = any> = (values: T, event?: React.FormEvent<HTMLFormElement>) => void;

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmitValues?: OnSubmitValue;
}

export const Form = ({ className, onSubmit, onSubmitValues, ...props }: FormProps) => {
  const cn = classNames(className, "form");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(event);
    if (typeof onSubmitValues === "function") {
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      const values = Object.fromEntries(formData) as any;
      onSubmitValues(values, event);
    }
  };
  return <form className={cn} onSubmit={handleSubmit} {...props} />;
};
