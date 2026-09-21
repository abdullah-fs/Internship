# React `useEffect` — Mount & Dependency Changes

`useEffect` is a React Hook used to run **side effects** after a component renders.

Common uses:

* API calls
* Updating the browser title
* Timers
* Event listeners
* Running code when state changes

## Syntax

```jsx
useEffect(() => {
  // side effect
}, [dependency]);
```

## 1. Run on Mount

Empty dependency array `[]` means the effect runs after the component mounts.

```jsx
useEffect(() => {
  console.log("Component Mounted");
}, []);
```

## 2. Run When a Value Changes

If a state/value is inside the dependency array, the effect runs when that value changes.

```jsx
useEffect(() => {
  console.log("Count changed:", count);
}, [count]);
```

### Flow

```text
count changes
     ↓
React re-renders
     ↓
useEffect runs
```

## Example — Online / Offline Status

```jsx
import { useState, useEffect } from "react";

function App() {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    console.log(
      isOnline
        ? "Status changed: Online"
        : "Status changed: Offline"
    );
  }, [isOnline]);

  return (
    <div>
      <h1>{isOnline ? "Online" : "Offline"}</h1>

      <button onClick={() => setIsOnline(true)}>
        Go Online
      </button>

      <button onClick={() => setIsOnline(false)}>
        Go Offline
      </button>
    </div>
  );
}

export default App;
```

## Important Patterns

```jsx
// Mount
useEffect(() => {
  // code
}, []);
```

```jsx
// When count changes
useEffect(() => {
  // code
}, [count]);
```

```jsx
// Every render
useEffect(() => {
  // code
});
```

### Remember

```text
useState  → Manage state
useEffect → Run side effects
[]        → Mount
[value]   → Run when value changes
```
