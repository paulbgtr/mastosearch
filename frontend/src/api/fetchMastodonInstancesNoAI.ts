import { ManualMastodonInstance } from "@/types/ManualMastodonInstance";

/**
 * Fetches the no-ai search API which provides a list of Mastodon instances based on the user count and moderation rules.
 *
 * @param userCount
 * @param moderationRules
 * @returns A list of Mastodon instances based on the user count and moderation rules.
 */
export const fetchMastodonInstancesNoAI = async ({
  userCount,
  moderationRules,
}: ManualMastodonInstance) => {
  const res = await fetch("http://localhost:8080/search-no-ai", {
    method: "POST",
    body: JSON.stringify({ userCount, moderationRules }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};
