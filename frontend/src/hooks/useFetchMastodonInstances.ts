import { useMutation } from "@tanstack/react-query";
import { fetchMastodonInstances } from "@/api/fetchMastodonInstances";
import type { MastodonInstance } from "@/types/MastodonInstance";

const filterInstances = (instances: MastodonInstance[]) => {
  return instances.map(
    ({
      name,
      activeUsers,
      openRegistrations,
      categories,
      shortDescription,
    }: MastodonInstance) => ({
      name,
      activeUsers,
      openRegistrations,
      categories,
      shortDescription,
    })
  );
};

/**
 * A hook that fetches Mastodon instances using the `fetchMastodonInstances` function
 *
 * @returns A mutation object that fetches Mastodon instances
 */
export const useFetchMastodonInstances = () => {
  return useMutation({
    mutationFn: fetchMastodonInstances,
    onSuccess: (data) => {
      const { instances } = data;

      return filterInstances(instances);
    },
    onError: (error) => {
      console.error("Error fetching data:", error);
    },
  });
};
