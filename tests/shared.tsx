import React from "react";
import { TestContextProvider } from "../src";

export const provider =
  (props: { name?: string; useDelimiter?: boolean }) =>
  ({ children }) =>
    <TestContextProvider {...props}>{children}</TestContextProvider>;
