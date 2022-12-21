import { renderHook } from "@testing-library/react";
import { useDataTest } from "../src";
import { provider } from "../src/test-utils/shared";

describe("registerText", () => {
  test("with delimiter", async () => {
    const wrapper = provider({ name: "id", useDelimiter: true });

    const {
      result: {
        current: { registerTest, globalName },
      },
    } = renderHook(() => useDataTest(), { wrapper });

    expect(globalName).toBe("id");

    const attr = registerTest("button")[`data-test-id`];
    expect(attr).toBe("button");
  });

  test("without delimiter", async () => {
    const wrapper = provider({ name: "id" });

    const {
      result: {
        current: { registerTest, globalName },
      },
    } = renderHook(() => useDataTest(), { wrapper });

    expect(globalName).toBe("id");

    const attr = registerTest("button")[`data-testid`];
    expect(attr).toBe("button");
  });
});
