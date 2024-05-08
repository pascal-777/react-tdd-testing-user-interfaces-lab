import { getAllByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

// Your tests here
test("displays a top level heading with the test 'Hi, I'm _____'", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays headshot with 'headshot' as the alt text", () => {
  render(<App />);
  const headshotImg = screen.getByAltText(/headshot/i);
  expect(headshotImg).toHaveAttribute(
    "src",
    "https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png"
  );
});

test("has a second level heading with the text 'About Me'", () => {
  render(<App />);
  const aboutHeading = screen.getByRole("heading", {
    name: /About Me/,
    level: 2,
  });
  expect(aboutHeading).toBeInTheDocument();
});
test("displays paragraph for biography", () => {
  render(<App />);
  const bio = screen.getByText(/This is/i);
  expect(bio).toBeInTheDocument();
});
test("displays two links to socials", () => {
  render(<App />);
  const link1 = screen.getByRole("link", {
    name: /github/i,
  });
  const link2 = screen.getByRole("link", {
    name: /linkedin/i,
  });
  expect(link1).toHaveAttribute("href", expect.stringContaining("github.com"));
  expect(link2).toHaveAttribute(
    "href",
    expect.stringContaining("linkedin.com")
  );
});