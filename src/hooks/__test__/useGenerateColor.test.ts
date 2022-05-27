import { act, renderHook } from "@testing-library/react";
import { useGenerateColor } from "../useGenerateColor";

const rgbRegexp = /[0-9]{3}\b|rgb\([^)]*\)/gi;

test("returns random color in user", () => {
  const { result } = renderHook(() => useGenerateColor());

  expect(result.current.randomColor).toMatch(rgbRegexp);
  expect(typeof result.current.generateColor).toBe("function");

  const currentColor = result.current.randomColor;

  act(() => {
    result.current.generateColor();
  });

  expect(currentColor).not.toEqual(result.current.randomColor);
});
