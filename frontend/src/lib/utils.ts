import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get a random search example for the search input
 *
 * @param examples
 * @returns A random search example
 */
export const randomSearchExample = (examples: string[]) => {
  return examples[Math.floor(Math.random() * examples.length)];
};

/**
 * Filter a list of Mastodon instances
 *
 * @param instances
 * @returns A filtered list of Mastodon instances
 */
export const filterInstances = (instances: any) => {
  return instances.map(
    ({
      name,
      active_users,
      open_registrations,
      info,
    }: {
      name: string;
      active_users: number;
      open_registrations: boolean;
      info: {
        categories: string[];
        short_description: string;
      };
    }) => ({
      name,
      activeUsers: active_users,
      openRegistrations: open_registrations,
      categories: info.categories,
      shortDescription: info.short_description,
    })
  );
};
