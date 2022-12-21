import React from "react";
import { DataTestProvider } from "../src";

export const provider =
  (props: { name?: string; useDelimiter?: boolean }) =>
  ({ children }) =>
    <DataTestProvider config={props}>{children}</DataTestProvider>;
