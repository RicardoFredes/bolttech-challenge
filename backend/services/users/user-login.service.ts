import { AppDataSource } from "../../database";
import { User } from "../../entities/user.entity";
import { tokenGenerator } from "../../utils/authorization.util";
import { comparePasswords } from "../../utils/password.util";

interface UserLogin {
  email: string;
  password?: string;
}

export const userLogin = async ({ email, password }: Partial<UserLogin>) => {
  const error = userLoginValidate({ email, password });
  if (error) return new Error(error);
  const user = await AppDataSource.getRepository(User).findOneBy({ email });
  if (!user) return new Error("Not found e-mail");
  const isMatch = comparePasswords(password as string, user.password);
  if (!isMatch) return new Error("Password is wrong!");
  user.token = tokenGenerator(user);
  return user.withoutPassword();
};

const userLoginValidate = ({ email, password }: Partial<UserLogin>): string | undefined => {
  const errors: string[] = [];
  if (!email) errors.push("e-mail is required.");
  if (!password) errors.push("password is required.");

  if (errors.length > 0) return errors.join(" ");
};
