import { describe, it, expect } from "bun:test";
import { MastodonInstancesAPI } from "../../api/mastodonInstancesApi";

const mastodonApiKey = process.env.MASTODON_INSTANCES_API_KEY;

if (!mastodonApiKey) {
  throw new Error("API key not provided");
}

const api = new MastodonInstancesAPI(mastodonApiKey);

if (!mastodonApiKey) {
  throw new Error("API key not provided");
}

describe("getInstancesByCategory", () => {
  it("returns a list of instances", async () => {
    const category = "tech";

    const instances = await api.getInstancesByCategory(category);

    expect(instances).not.toBeNull();
  });

  it("returns an empty list if the category is invalid", async () => {
    const invalidCategory = "invalidOne";

    const instances = await api.getInstancesByCategory(invalidCategory);

    expect(instances).toEqual([]);
  });
});
