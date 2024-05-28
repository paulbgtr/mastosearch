import express, { Express } from "express";
import dotenv from "dotenv";
import { searchHandler } from "./handlers/searchHandler";

dotenv.config();

const app: Express = express();
const port = 8080;

app.use(express.json());

app.post("/search", searchHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
