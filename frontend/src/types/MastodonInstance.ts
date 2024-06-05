/**
 * A type of a single Mastodon instance.
 *
 * Note that it doesn't have all the attributes of a Mastodon instance.
 * For a full list of attributes, see the Mastodon Instances API documentation.
 */
export type MastodonInstance = {
  name: string;
  activeUsers: number;
  openRegistrations: boolean;
  categories: string[];
  shortDescription: string;
  languages: string[];
};
