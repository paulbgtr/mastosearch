/**
 * A function that fetches the search API which provides a list of Mastodon instances based on the query.
 *
 * @param query
 * @returns A list of Mastodon instances based on the query
 */
export const fetchMastodonInstancesAI = async (query: string) => {
  const res = await fetch("http://localhost:8080/search", {
    method: "POST",
    body: JSON.stringify({ query }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};
