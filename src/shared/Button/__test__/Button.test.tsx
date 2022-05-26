import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from "../Button";

test("button should be render", () => {
  const button = render(<Button>set color</Button>);
  expect(screen.getByText("set color")).toBeInTheDocument();
  expect(button.container).toMatchInlineSnapshot(`
    <div>
      <button
        class=" button button__default"
        type="button"
      >
        set color
      </button>
    </div>
  `);
  expect(button).toMatchSnapshot();
});
