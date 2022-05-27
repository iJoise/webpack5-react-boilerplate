import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from "../Button";

test("button should be render", () => {
  const { container, rerender } = render(<Button>set color</Button>);

  expect(screen.getByRole("button", { name: /set color/i })).toBeInTheDocument();
  expect(container.firstChild).toHaveClass("button");
  expect(container.firstChild).toHaveClass("button__default");

  rerender(<Button rounded>set color</Button>);

  expect(container.firstChild).toHaveClass("button__rounded");

  expect(container).toMatchSnapshot();
});
