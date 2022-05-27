import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from "../Footer";

test("Footer should be render", () => {
  const { container } = render(<Footer />);

  expect(screen.getByText(/github/i)).toBeInTheDocument();
  expect(screen.getByText(/linkedin/i)).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
