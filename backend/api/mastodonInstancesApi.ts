import type { GenericResponse } from "../types/GenericResponse";

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
