import React from "react";
import { render, screen, renderHook } from "@testing-library/react";
import { useDataTest } from "../src";
import { provider } from "../src/test-utils/shared";

test("Get button with delimiter", async () => {
  const wrapper = provider({ name: "id", useDelimiter: true });

  const {
    result: {
      current: { registerTest, globalName },
    },
  } = renderHook(() => useDataTest(), { wrapper });

  const rendered = render(
    <button type="button" {...registerTest("button-delimiter")}>
      Button
    </button>,
    {
      wrapper,
    },
  );

  expect(globalName).toBe("id");
  expect(rendered).toMatchSnapshot();
});
