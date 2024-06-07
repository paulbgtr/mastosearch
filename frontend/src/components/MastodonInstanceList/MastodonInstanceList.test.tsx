import { afterEach, describe, expect, it } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import { MastodonInstanceList } from "./MastodonInstanceList";
import { mockedMastodonInstances } from "@/data/mockedMastodonInstances";

describe("MastodonInstanceList", () => {
  afterEach(cleanup);

  it("renders the MastodonInstanceList component", () => {
    render(<MastodonInstanceList instances={mockedMastodonInstances} />);
    screen.getByText("Mastodon");
  });

  it("renders the MastodonInstanceList with correct number of instances", () => {
    render(<MastodonInstanceList instances={mockedMastodonInstances} />);
    const instances = screen.getAllByText(/Visit/i);
    expect(instances.length).toBe(3);
  });
});
