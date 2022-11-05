import express from "express";
import dotenv from "dotenv";
import "./database";
import { routes } from "./routes";

dotenv.config();

const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use("/api", routes);

app.listen(port, () => console.log(`Listening on port ${port}`));
