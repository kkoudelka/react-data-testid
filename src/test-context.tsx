import React from "react";

interface ITestContext {
  /**
   * The name of the test attribute.
   * Default is "id".
   * @example
   * data-testid
   */
  name: string;
  /**
   * Whether to use a delimiter between the name and the value.
   * Default is false.
   * @example
   * data-testid // without useDelimiter
   * data-test-id // with useDelimiter
   */
  useDelimiter: boolean;
}

const TestContext = React.createContext<ITestContext>({
  name: "id",
  useDelimiter: false,
});

type TestContextProps = React.PropsWithChildren<Partial<ITestContext>>;

/**
 * TestContextProvider is used to share the desired test name across the app.
 *
 * Default name value is "id", resulting in "data-test-id" attributes.
 */
const TestContextProvider: React.FC<TestContextProps> = ({ children, name = "id", useDelimiter = false }) => {
  return <TestContext.Provider value={{ name, useDelimiter }}>{children}</TestContext.Provider>;
};

export default TestContextProvider;

/**
 *
 * @returns {ITestContext} The current test context (contains global test name, default is "id").
 * @throws {Error} If not wrapped in a TestContextProvider.
 */
export const useTestContext = () => {
  const context = React.useContext(TestContext);
  if (context === undefined) {
    throw new Error("Ensure the component is wrapped in a TestContextProvider.");
  }
  return context;
};
