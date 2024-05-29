import { Story } from "@ladle/react";
import { MastodonInstanceList } from "./MastodonInstanceList";

const instances = [
  {
    name: "Mastodon",
    activeUsers: 1000,
    openRegistrations: true,
    categories: ["Social"],
    shortDescription: "A social network for the fediverse",
  },
  {
    name: "Pleroma",
    activeUsers: 500,
    openRegistrations: true,
    categories: ["Social"],
    shortDescription: "A lightweight social network",
  },
];

export const MastodonInstanceListStory: Story = () => (
  <MastodonInstanceList instances={instances} />
);
