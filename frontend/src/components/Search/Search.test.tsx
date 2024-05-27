import { afterEach, describe, it, expect } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import { Search } from "./Search";
import { randomSearchExample } from "../../lib/utils";
import { searchExamples } from "../../data/searchExamples";

describe("Navbar", () => {
  afterEach(cleanup);

  const searchExample = randomSearchExample(searchExamples);

  it("renders the Search component with the correct title and subtitle", () => {
    render(<Search searchExample={searchExample} />);
    screen.getByText("Discover Your Tribe.");
    screen.getByText("Search for the Mastodon instance that fits you best");
  });

  it("contains an input field with the search example as a placeholder", () => {
    render(<Search searchExample={searchExample} />);
    const inputElement = screen.getByPlaceholderText(searchExample);
    expect(inputElement).not.toBeNull();
  });

  it("focuses on the input field when the component mounts", () => {
    render(<Search searchExample={searchExample} />);
    const inputElement = screen.getByPlaceholderText(searchExample);
    expect(document.activeElement).toEqual(inputElement);
  });

  it("should render the search Button", () => {
    render(<Search searchExample="Search..." />);
    screen.getByRole("button");
  });
});
