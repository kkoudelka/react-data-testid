import React from "react";
import { render, renderHook, screen } from "@testing-library/react";
import { useDataTest } from "../src";
import { provider } from "../src/test-utils/shared";

test("Get input by testId", async () => {
  const wrapper = provider({ name: "id" });

  const {
    result: {
      current: { registerTest, globalName },
    },
  } = renderHook(() => useDataTest(), { wrapper });

  const rendered = render(<input type="text" readOnly value="Hello World!" {...registerTest("input-text")} />, {
    wrapper,
  });

  expect(globalName).toBe("id");
  expect(rendered).toMatchSnapshot();

  expect(screen.getByTestId("input-text")).not.toBeNull();
});
