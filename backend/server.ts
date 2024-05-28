import express, { Express } from "express";
import dotenv from "dotenv";
import { searchHandler } from "./handlers/searchHandler";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app: Express = express();
const port = 8080;

app.use(express.json());

app.post("/search", searchHandler);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
