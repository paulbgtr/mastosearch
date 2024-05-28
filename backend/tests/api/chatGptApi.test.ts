import { describe, it, expect } from "bun:test";
import { getCategoryFromChatGpt } from "../../api/chatGptApi";
import { categories as mastodonCategories } from "../../data/categories";

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  throw new Error("API key not provided");
}

describe("getCategoryFromChatGpt", () => {
  it("returns a category", async () => {
    const query = "tech";
    const categories = ["tech", "education"];

    const category = await getCategoryFromChatGpt(
      openaiApiKey,
      query,
      categories
    );

    expect(category).not.toBeNull();
  });

  it("returns a valid mastodon category", async () => {
    const query = "As a developer, I want to find some tech instances.";

    const category = await getCategoryFromChatGpt(
      openaiApiKey,
      query,
      mastodonCategories
    );

    expect(mastodonCategories).toContain(category);
  });

  it("throws an error if the category is not found", async () => {
    const query = "nonsense";

    await expect(
      getCategoryFromChatGpt(openaiApiKey, query, mastodonCategories)
    ).rejects.toThrow("Category not found");
  });
});
