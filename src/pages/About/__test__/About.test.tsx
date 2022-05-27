import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { About } from "../About";

describe("About Page", () => {
  it("About Page should be render", () => {
    const { container } = render(<About />);
    expect(screen.getByText(/react boilerplate/i)).toBeInTheDocument();
    expect(screen.getByText(/happy coding!/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /set color/i })).toBeInTheDocument();
    expect(screen.getByTestId("react-svg")).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("SVG color should change correctly", () => {
    render(<About />);

    const reactIcon = screen.getByTestId("react-svg");
    const currentFill = reactIcon.getAttribute("fill");
    const button = screen.getByRole("button", { name: /set color/i });

    act(() => {
      fireEvent.click(button);
    });

    const newFill = screen.getByTestId("react-svg").getAttribute("fill");
    expect(newFill).not.toEqual(currentFill);
  });
});
