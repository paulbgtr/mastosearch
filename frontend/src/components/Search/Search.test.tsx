import { afterEach, describe, it, expect } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import { Search } from "./Search";
import { randomSearchExample } from "../../lib/utils";
import { searchExamples } from "../../data/searchExamples";
import queryClient from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

const renderWithProvider = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
};

describe("Navbar", () => {
  afterEach(cleanup);

  const searchExample = randomSearchExample(searchExamples);

  it("renders the Search component with the correct title and subtitle", () => {
    renderWithProvider(<Search searchExample={searchExample} />);
    screen.getByText("Discover Your Tribe.");
    screen.getByText("Search for the Mastodon instance that fits you best");
  });

  it("contains an input field with the search example as a placeholder", () => {
    renderWithProvider(<Search searchExample={searchExample} />);
    const inputElement = screen.getByPlaceholderText(searchExample);
    expect(inputElement).not.toBeNull();
  });

  it("focuses on the input field when the component mounts", () => {
    renderWithProvider(<Search searchExample={searchExample} />);
    const inputElement = screen.getByPlaceholderText(searchExample);
    expect(document.activeElement).toEqual(inputElement);
  });

  it("should render the search Button", () => {
    renderWithProvider(<Search searchExample="Search..." />);
    screen.getByRole("button");
  });
});
