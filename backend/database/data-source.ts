import "reflect-metadata";
import path from "path";
import { DataSource } from "typeorm";

const logging = process.env.NODE_ENV !== "production";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: path.join(__dirname, "./../../data-sqlite"),
  synchronize: true,
  logging,
  entities: [path.join(__dirname + "/../entities/*.ts")],
  migrations: [path.join(__dirname + "/../migrations/*.ts")],
  subscribers: [],
});
