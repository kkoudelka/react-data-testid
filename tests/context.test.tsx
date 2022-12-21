import React from "react";
import { render, renderHook } from "@testing-library/react";
import { useDataTest } from "../src";
import { provider } from "./shared";

test("Button has data-test-id='button'", async () => {
  const wrapper = provider({ name: "id" });

  const {
    result: {
      current: { registerTest, globalName },
    },
  } = renderHook(() => useDataTest(), { wrapper });

  const rendered = render(
    <button type="button" {...registerTest("button")}>
      Button
    </button>,
    {
      wrapper,
    },
  );

  expect(globalName).toBe("id");
  expect(rendered).toMatchSnapshot();
});

test("Button has data-test-attr='button'", async () => {
  const wrapper = provider({ name: "attr" });

  const {
    result: {
      current: { registerTest, globalName },
    },
  } = renderHook(() => useDataTest(), { wrapper });

  const rendered = render(
    <button type="button" {...registerTest("button")}>
      Button
    </button>,
    {
      wrapper,
    },
  );

  expect(globalName).toBe("attr");
  expect(rendered).toMatchSnapshot();
});
