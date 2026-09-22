# React — Manual Loading and Error State

Jab React mein API call karte hain, to manually **loading** aur **error** states track kar sakte hain.

## 1. Loading State

```jsx
const [loading, setLoading] = useState(true);
```

Initially `loading` ki value `true` hoti hai.

API complete hone ke baad:

```jsx
setLoading(false);
```

### Loading UI

```jsx
if (loading) {
  return <h2>Loading...</h2>;
}
```

---

## 2. Error State

Error message store karne ke liye:

```jsx
const [error, setError] = useState("");
```

Agar API fail ho:

```jsx
setError(error.message);
```

### Error UI

```jsx
if (error) {
  return <h2>{error}</h2>;
}
```

---

## 3. Complete Example

```jsx
import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default App;
```

## 4. API Flow

```text
Component Load
      ↓
loading = true
      ↓
API Request
      ↓
   ┌───┴───┐
   ↓       ↓
Success   Error
   ↓       ↓
setUsers  setError
   ↓       ↓
loading   loading
false     false
   ↓       ↓
Data      Error
```

## 5. Important Points

* `loading` API request ki current state track karta hai.
* `error` API failure ka message store karta hai.
* `setLoading(false)` request complete hone ke baad loading hide karta hai.
* `setError(error.message)` error message save karta hai.
* `response.ok` HTTP response successful hai ya nahi check karne ke liye useful hai.
* `.catch()` network ya thrown errors ko handle karta hai.
* Data, loading aur error ko manually manage karna small apps mein simple hai.
* Large applications mein repeated API state management messy ho sakti hai; isi problem ke liye later **TanStack Query** useful hota hai.