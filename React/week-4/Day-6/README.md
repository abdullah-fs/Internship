# React — Conditional Rendering (`&&` and Ternary)

## 1. Conditional Rendering

Conditional rendering ka matlab hai **condition ke according UI show karna**.

React mein commonly:

* `&&` operator
* Ternary operator `? :`

use kiye jate hain.

---

## 2. Logical AND (`&&`)

`&&` tab use hota hai jab humein **sirf ek UI element ko show ya hide** karna ho.

### Syntax

```jsx
{condition && <Element />}
```

### Example

```jsx
const isAdmin = true;

return (
  <div>
    <h1>Dashboard</h1>

    {isAdmin && <button>Delete User</button>}
  </div>
);
```

Agar `isAdmin` `true` hai → button show hoga.

Agar `isAdmin` `false` hai → button show nahi hoga.

### Simple Rule

```text
true  && UI → UI show
false && UI → UI hide
```

---

## 3. Ternary Operator (`? :`)

Ternary operator tab use hota hai jab **do different UI options mein se ek** show karni ho.

### Syntax

```jsx
{condition ? <TrueUI /> : <FalseUI />}
```

### Example

```jsx
const isLoggedIn = true;

return (
  <div>
    {isLoggedIn ? (
      <h1>Welcome Abdullah</h1>
    ) : (
      <h1>Please Login</h1>
    )}
  </div>
);
```

Agar `isLoggedIn` `true` hai:

```text
Welcome Abdullah
```

Agar `false` hai:

```text
Please Login
```

---

## 4. Ternary with `useState`

```jsx
import React, { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <h1>Dashboard</h1>
      ) : (
        <h1>Login Page</h1>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Login / Logout
      </button>
    </div>
  );
};

export default App;
```

State change hone par ternary different UI render karta hai.

---

## 5. `&&` vs Ternary

| `&&`                       | Ternary                                |
| -------------------------- | -------------------------------------- |
| UI show/hide karni ho      | Do UI options mein se ek show karni ho |
| `condition && UI`          | `condition ? UI1 : UI2`                |
| False par kuch render nahi | False par alternative UI render        |

### Real-World Examples

**`&&`:**

```jsx
{isAdmin && <button>Delete</button>}
```

Admin hai → Delete button show.

**Ternary:**

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

Logged in hai → Dashboard.

Logged out hai → Login.

## Important Points

* Conditional rendering ka use condition ke according UI change karne ke liye hota hai.
* `&&` → ek UI ko show/hide karta hai.
* Ternary `? :` → do UI options mein se ek select karta hai.
* `useState` ke saath conditional rendering bohat common hai.
* Login/logout, admin buttons, online/offline status aur loading states mein ye patterns frequently use hote hain.
