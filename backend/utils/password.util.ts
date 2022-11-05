import bcrypt from "bcrypt";

const saltRounds = 10;

export const hashPassword = async (password: string) => bcrypt.hash(password, saltRounds);

export const comparePasswords = (password: string, hash: string) =>
  bcrypt.compareSync(password, hash);
