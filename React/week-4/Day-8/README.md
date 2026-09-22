# React — Fetching Data Inside `useEffect`

## 1. API Fetching in React

React mein API se data lene ke liye `fetch()` use kar sakte hain.

API call ko component ke andar automatically run karwane ke liye `useEffect` use hota hai.

### Basic Flow

```text
Component Load
      ↓
useEffect()
      ↓
fetch()
      ↓
API Response
      ↓
response.json()
      ↓
Data
```

---

## 2. Basic Syntax

```jsx
useEffect(() => {
  fetch("API_URL")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}, []);
```

---

## 3. `useEffect`

```jsx
useEffect(() => {

}, []);
```

Empty dependency array `[]` ka matlab hai ke effect **initial component load ke baad run** hoga.

---

## 4. `fetch()`

```jsx
fetch("https://jsonplaceholder.typicode.com/users")
```

`fetch()` API ko request bhejta hai aur response return karta hai.

---

## 5. Convert Response to JSON

```jsx
.then((response) => response.json())
```

API response ko JavaScript JSON data mein convert karta hai.

---

## 6. Receive the Data

```jsx
.then((data) => {
  console.log(data);
})
```

Yahan `data` mein API se received data hota hai.

---

## 7. Complete Example

```jsx
import React, { useEffect } from "react";

const App = () => {

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
    </div>
  );
};

export default App;
```

## Important Points

* `useEffect` mein API call kar sakte hain.
* `fetch()` API request bhejne ke liye use hota hai.
* `response.json()` response ko JSON data mein convert karta hai.
* `.then()` asynchronous result ko handle karta hai.
* `[]` ki wajah se effect initial load par run hota hai.
* Is stage par data sirf `console.log()` mein check kiya ja raha hai.
* Next step mein API data ko `useState` mein store karenge.

## Common Pattern

```jsx
useEffect(() => {
  fetch("API_URL")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}, []);
```

### Axios

API fetching ke liye `axios` bhi use hota hai, lekin pehle `fetch()` ka basic pattern samajhna important hai.