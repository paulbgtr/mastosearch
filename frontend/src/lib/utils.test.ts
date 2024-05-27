import { expect, describe, it } from "bun:test";
import { randomSearchExample } from "./utils";
import { searchExamples } from "@/data/searchExamples";

describe("randomSearchExample", () => {
  it("should return a random search example", () => {
    const example = randomSearchExample(searchExamples);
    expect(searchExamples).toContain(example);
  });
});
