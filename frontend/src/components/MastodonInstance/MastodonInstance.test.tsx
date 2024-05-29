import { afterEach, describe, it, expect } from "bun:test";
import { cleanup, screen, render } from "@testing-library/react";
import { MastodonInstance } from "./MastodonInstance";
import { mockedMastodonInstance } from "@/data/mockedMastodonInstance";

describe("MastodonInstance", () => {
  afterEach(cleanup);

  it("renders the Mastodon instance", () => {
    render(<MastodonInstance {...mockedMastodonInstance} />);
    screen.getByText("Mastodon");
  });

  it("renders the Mastodon instance with a correct link", () => {
    render(<MastodonInstance {...mockedMastodonInstance} />);
    const visitButton = screen.getByText("Visit");
    expect(visitButton.getAttribute("href")).toBe("https://Mastodon");
  });
});
