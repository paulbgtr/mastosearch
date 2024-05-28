import request from "supertest";
import { expect, describe, it } from "bun:test";
import express from "express";
import dotenv from "dotenv";
import { searchHandler } from "../../handlers/searchHandler";
import { errorHandler } from "../../middleware/errorHandler";

dotenv.config();

const app = express();

app.use(express.json());
app.post("/search", searchHandler);
app.use(errorHandler);

describe("searchHandler", () => {
  it("should return 400 if query is not provided", async () => {
    const response = await request(app).post("/search").send({});
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Query not provided" });
  });

  it("should return 404 if category is not found", async () => {
    const response = await request(app)
      .post("/search")
      .send({ query: "nonsense" });
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: "Category not found" });
  });

  it("should return 200 if category is found", async () => {
    const response = await request(app).post("/search").send({ query: "tech" });
    expect(response.status).toBe(200);
  });
});
