import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import Search from "./components/Search";

test("display generasi gigih navbar", () => {
  render(<App />);

  expect(screen.getByText(/generasi gigih/i)).toBeInTheDocument();
});

test("input event for search query", () => {
  render(<Search />);

  userEvent.type(screen.getByPlaceholderText(/search.../i), "Twice");

  expect(screen.getByPlaceholderText(/search.../i)).toHaveValue("Twice");
});
