import "src/index.css";
import { MastodonInstance } from "./MastodonInstance";
import { Story } from "@ladle/react";

export const MastodonInstanceStory: Story = () => (
  <MastodonInstance
    name="Mastodon"
    activeUsers={1000}
    openRegistrations={true}
    categories={["Social"]}
    shortDescription="A social network for the fediverse"
  />
);
