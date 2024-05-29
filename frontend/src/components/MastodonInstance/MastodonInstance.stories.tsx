import "src/index.css";
import { MastodonInstance } from "./MastodonInstance";
import { Story } from "@ladle/react";
import { mockedMastodonInstance } from "@/data/mockedMastodonInstance";

export const MastodonInstanceStory: Story = () => (
  <MastodonInstance {...mockedMastodonInstance} />
);
