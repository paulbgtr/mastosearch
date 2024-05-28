import { describe, it, expect } from "bun:test";
import { getInstancesByCategory } from "../../api/mastodonInstancesApi";

const mastodonApiKey = process.env.MASTODON_INSTANCES_API_KEY;

if (!mastodonApiKey) {
  throw new Error("API key not provided");
}

describe("getInstancesByCategory", () => {
  it("returns a list of instances", async () => {
    const category = "tech";

    const instances = await getInstancesByCategory(mastodonApiKey, category);

    expect(instances).not.toBeNull();
  });

  it("returns an empty list if the category is invalid", async () => {
    const invalidCategory = "invalidOne";

    const instances = await getInstancesByCategory(
      mastodonApiKey,
      invalidCategory
    );

    expect(instances).toEqual([]);
  });
});
