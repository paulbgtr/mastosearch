import type { GenericResponse } from "../types/GenericResponse";

/**
 * A function which utilizes an external API to get a list of Mastodon instances that belong to a specific category.
 *
 * @param apiKey
 * @param category
 * @returns A list of Mastodon instances that belong to a specific category
 */
export const getInstancesByCategory = async (
  apiKey: string,
  category: string
) => {
  const url = new URL("https://instances.social/api/1.0/instances/list");
  url.searchParams.append("category", category);

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  const data = (await response.json()) as GenericResponse;
  return data.instances || [];
};
