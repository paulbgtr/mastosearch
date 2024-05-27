import { afterEach, describe, it, expect } from "bun:test";
import { cleanup, render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  afterEach(cleanup);

  it("renders the Navbar component with the correct title", () => {
    render(<Navbar />);
    screen.getByText("mastosearch");
  });

  it("contains a single link to the Github repository", () => {
    render(<Navbar />);
    const githubLink = screen.getByText("Github");
    expect(githubLink.getAttribute("href")).toBe(
      "https://github.com/paulbgtr/mastosearch"
    );
  });
});
