# Week 3 — Day 3: Error Handling in JavaScript

## 📌 Topic

**Error Handling — `try...catch`**

Error handling ka purpose application mein aane wale errors ko properly handle karna hai, taake program unexpectedly stop na ho.

---

## 1. What is an Error?

An **error** occurs when JavaScript cannot execute code as expected.

Example:

```js
console.log(username);
```

Agar `username` define nahi hai, JavaScript error generate karega.

```text
ReferenceError: username is not defined
```

---

## 2. Why Error Handling?

Real-world applications mein errors aa sakte hain:

* API request fail ho sakti hai
* Internet connection issue ho sakta hai
* Server unavailable ho sakta hai
* Invalid data aa sakta hai
* Database operation fail ho sakta hai

Error handling application ko unexpected errors ko properly manage karne mein help karti hai.

---

# 3. `try...catch`

JavaScript mein errors handle karne ke liye `try...catch` use hota hai.

### Syntax

```js
try {
    // Code that may cause an error
} catch (error) {
    // Handle the error
}
```

### Example

```js
try {
    console.log(username);
} catch (error) {
    console.log("Something went wrong");
}
```

Agar `try` ke andar error aaye, control `catch` block mein chala jata hai.

---

# 4. `try`

`try` block ke andar wo code likhte hain jahan error aane ka possibility ho.

```js
try {
    const result = someFunction();
}
```

Agar code successfully execute ho jaye, `catch` execute nahi hota.

---

# 5. `catch`

`catch` block error ko handle karta hai.

```js
try {
    console.log(username);
} catch (error) {
    console.log("Error occurred");
}
```

---

# 6. `error`

`catch` ke andar `error` variable mein error ki information hoti hai.

```js
try {
    console.log(username);
} catch (error) {
    console.log(error);
}
```

---

# 7. `error.message`

Agar sirf error ka readable message chahiye to:

```js
try {
    console.log(username);
} catch (error) {
    console.log(error.message);
}
```

### Difference

```js
error
```

Complete error information deta hai.

```js
error.message
```

Sirf error ka message deta hai.

---

# 8. `try...catch` with `async/await`

API calls mein `try...catch` bohat commonly use hota hai.

```js
async function getData() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.error(error.message);
    }
}

getData();
```

### Flow

```text
async function
      ↓
    try
      ↓
   fetch()
      ↓
 response
      ↓
 response.json()
      ↓
    data

Agar error aaye
      ↓
    catch
      ↓
error.message
```

---

# 9. `response.ok`

API requests mein `response.ok` se check kar sakte hain ke HTTP response successful hai ya nahi.

```js
if (!response.ok) {
    throw new Error("Request failed");
}
```

Example:

```js
async function getData() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.error(error.message);
    }
}

getData();
```

---

# 10. `throw`

`throw` ka use karke hum **khud custom error generate** kar sakte hain.

```js
throw new Error("Something went wrong");
```

Example:

```js
const age = 15;

if (age < 18) {
    throw new Error("User must be 18 or older");
}
```

---

# 11. `throw` with `try...catch`

```js
try {
    const age = 15;

    if (age < 18) {
        throw new Error("User must be 18 or older");
    }

    console.log("User allowed");

} catch (error) {
    console.log(error.message);
}
```

Output:

```text
User must be 18 or older
```

---

# 12. Real-World MERN Example

Frontend API call:

```js
async function getUsers() {
    try {
        const response = await fetch("/api/users");

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        console.log(users);

    } catch (error) {
        console.error(error.message);
    }
}
```

Yahan:

* `try` → API request karta hai
* `response.ok` → response check karta hai
* `throw` → custom error generate karta hai
* `catch` → error handle karta hai
* `error.message` → error message show karta hai

---

# 13. Important Syntax

### Basic

```js
try {
    // risky code
} catch (error) {
    // handle error
}
```

### API

```js
try {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Request failed");
    }

    const data = await response.json();

} catch (error) {
    console.error(error.message);
}
```

---

# 14. Quick Revision

| Keyword         | Purpose                                              |
| --------------- | ---------------------------------------------------- |
| `try`           | Risky code run karta hai                             |
| `catch`         | Error handle karta hai                               |
| `error`         | Error ki information                                 |
| `error.message` | Error ka message                                     |
| `throw`         | Custom error generate karta hai                      |
| `response.ok`   | HTTP response successful hai ya nahi check karta hai |

---

# 🎯 Key Takeaways

* Errors ko properly handle karne ke liye `try...catch` use hota hai.
* Risky code `try` ke andar likhte hain.
* Error aane par `catch` execute hota hai.
* `error.message` readable error message deta hai.
* `throw` se manually/custom error generate kar sakte hain.
* `async/await` ke saath API calls mein `try...catch` commonly use hota hai.
* `response.ok` se HTTP response ki success status check kar sakte hain.
* Proper error handling real-world MERN applications ka important part hai.

---

## 🧠 Practice

### Problem 1

`try...catch` use karke intentionally undefined variable ka error handle karo.

### Problem 2

`async` function banao jo:

1. API fetch kare
2. `try...catch` use kare
3. `response.ok` check kare
4. `response.json()` kare
5. Error ki situation mein `error.message` print kare

API:

```text
https://jsonplaceholder.typicode.com/users/1
```

### Problem 3

User ki age check karo.

Agar age `18` se kam ho:

```js
throw new Error("User must be 18 or older");
```

Aur error ko `catch` mein handle karo.