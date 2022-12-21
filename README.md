# React Data TestId
Global config for shared data test attributes


## Quick start

### Add DataTest Provider
```tsx
const config = {
    name: "id", // "id" is default
    useDelimiter: false, // false is default - "data-testid" x "data-test-id"
};

function App() {
    return (
        // Provide global data test config
        <DataTestProvider config={config}>
            <Rest .../>
        </DataTestProvider>
    );
};
```

### Register data test attribute
```tsx
function TodoItem() {
    // use useDataTest hook
    const { registerTest } = useDataTest();
    
    return (
        // register test attribute - "data-testid='btn-mark-done'"
        <button type="button" {...registerTest("btn-mark-done")}>Mark done</button>
    );
};
```
