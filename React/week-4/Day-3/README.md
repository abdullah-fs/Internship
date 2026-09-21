# React `useState` — Reading and Updating State

`useState` is a React Hook used to **store and update data** inside a component.

## Syntax

```jsx
const [state, setState] = useState(initialValue);
```

* `state` → current value
* `setState` → updates the value
* `initialValue` → starting value

## Reading State

State ki current value directly use karte hain:

```jsx
<h1>Count: {count}</h1>
```

## Updating State

State update karne ke liye setter function use karte hain:

```jsx
setCount(count + 1);
```

❌ Direct state update nahi karni:

```jsx
count = count + 1;
```

✅ Setter use karo:

```jsx
setCount(count + 1);
```

## Example — Counter

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default App;
```

### Example Explanation

```jsx
const [count, setCount] = useState(0);
```

* `count` → current state
* `setCount` → state update function
* `0` → initial value

```jsx
setCount(count + 1);
```

Button click hone par count `1` se increase hota hai.

```jsx
setCount(count - 1);
```

Button click hone par count `1` se decrease hota hai.

## Common State Types

```jsx
const [name, setName] = useState("");
const [age, setAge] = useState(21);
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [users, setUsers] = useState([]);
```

## Important Pattern

```text
useState()  → Create state
state       → Read state
setState()  → Update state
```

When state changes, React **re-renders the component** and updates the UI.
