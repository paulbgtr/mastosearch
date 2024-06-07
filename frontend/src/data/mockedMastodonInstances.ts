import type { MastodonInstance } from "../types/MastodonInstance";

/**
 * A list of objects that represent Mastodon instances.
 *
 * Is used for testing the MastodonInstanceList component.
 */
export const mockedMastodonInstances: MastodonInstance[] = [
  {
    name: "Mastodon",
    activeUsers: 1000,
    languages: ["en"],
    openRegistrations: true,
    categories: ["Social"],
    shortDescription: "A social network for the fediverse",
  },
  {
    name: "Mastodon.social",
    activeUsers: 1000000,
    languages: ["en"],
    openRegistrations: false,
    categories: ["Social"],
    shortDescription: "The largest Mastodon instance",
  },
  {
    name: "Mastodon.art",
    activeUsers: 10000,
    languages: ["en"],
    openRegistrations: true,
    categories: ["Art"],
    shortDescription: `
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `,
  },
];
