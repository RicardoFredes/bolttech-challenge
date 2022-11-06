import { AppDataSource } from "../../database";
import { User } from "../../entities/user.entity";
import { tokenGenerator } from "../../utils/authorization.util";
import { entityValidate } from "../../utils/entity-validate.util";
import { hashPassword } from "../../utils/password.util";

interface RegisterUser {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const registerUser = async ({
  name: originalName,
  email,
  password,
  passwordConfirmation,
}: Partial<RegisterUser>) => {
  const name = originalName?.trim();
  const user = AppDataSource.getRepository(User).create({
    email,
    name,
    password,
  });

  const error = await entityValidate(user);
  if (error) return new Error(error);

  if (password !== passwordConfirmation) {
    return new Error("Password and password confirmation must match.");
  }

  if (await AppDataSource.getRepository(User).findOneBy({ email })) {
    return new Error("This email has already been registered.");
  }

  user.password = await hashPassword(user.password);

  await AppDataSource.getRepository(User).save(user);

  user.token = tokenGenerator(user);
  return user.withoutPassword();
};
