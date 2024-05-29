import { Story } from "@ladle/react";
import { MastodonInstanceList } from "./MastodonInstanceList";
import { mockedMastodonInstances } from "@/data/mockedMastodonInstances";

export const MastodonInstanceListStory: Story = () => (
  <MastodonInstanceList instances={mockedMastodonInstances} />
);
