import { validate, ValidatorOptions } from "class-validator";

export const entityValidate = async (object: object, validatorOptions?: ValidatorOptions) => {
  const errors = await validate(object, validatorOptions);
  if (errors.length === 0) return;
  return errors
    .map(
      ({ property, constraints }: any) => `${property}: ${Object.values(constraints).join("; ")}.`
    )
    .join(" ");
};
