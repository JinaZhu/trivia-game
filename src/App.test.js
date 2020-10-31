import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

test("rendering and navigating routes on app", () => {
  render(<App />, { wrapper: MemoryRouter });

  expect(screen.getByText(/Test Your Knowledge/i)).toBeInTheDocument();
});
