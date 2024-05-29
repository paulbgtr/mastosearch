/**
 * A list of objects that represent Mastodon instances.
 *
 * Is used for testing the MastodonInstanceList component.
 */
export const mockedMastodonInstances = [
  {
    name: "Mastodon",
    activeUsers: 1000,
    openRegistrations: true,
    categories: ["Social"],
    shortDescription: "A social network for the fediverse",
  },
  {
    name: "Mastodon.social",
    activeUsers: 1000000,
    openRegistrations: false,
    categories: ["Social"],
    shortDescription: "The largest Mastodon instance",
  },
];
