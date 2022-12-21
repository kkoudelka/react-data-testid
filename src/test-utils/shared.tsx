import React from "react";
import { DataTestProvider } from "..";

export const provider =
  (props: { name?: string; useDelimiter?: boolean }) =>
  ({ children }: { children: JSX.Element }) =>
    <DataTestProvider config={props}>{children}</DataTestProvider>;
