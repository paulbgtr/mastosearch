import type { MastodonInstance } from "@/types/MastodonInstance";

/**
 * A mocked Mastodon instance object.
 *
 * Is used for testing the MastodonInstance component.
 */
export const mockedMastodonInstance: MastodonInstance = {
  name: "Mastodon",
  activeUsers: 1000,
  languages: ["en"],
  openRegistrations: true,
  categories: ["Social"],
  shortDescription: "A social network for the fediverse",
};
