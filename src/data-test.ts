import { useTestContext } from "./test-context";

/**
 * Hook - returns an object with a registerTest function and the global attribute name
 */
const useDataTest = () => {
  const { name, useDelimiter } = useTestContext();

  return {
    /**
     * @param name {string} - name of the test attribute to be registered
     *
     * @example
     * <TestContextProvider name="id">
     *   <button {...registerTest('button')} /> // <button data-test-id="button" />
     * </TestContextProvider>
     */
    registerTest: registerTest(name, useDelimiter),
    /**
     * Name of the global attribute
     * data-test-[globalName]
     */
    globalName: name,
  };
};

const registerTest = (globalName: string, useDelimiter?: boolean) => (name: string) => {
  const key = useDelimiter ? `data-test-${globalName}` : `data-test${globalName}`;
  const data = {
    [key]: name,
  };

  return data;
};

export default useDataTest;
