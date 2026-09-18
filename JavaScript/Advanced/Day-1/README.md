# Promises & Async/Await — JavaScript

## 1. Promise

A **Promise** is an object that represents the future result of an asynchronous operation.

A Promise has three states:

* **Pending** → operation is still running
* **Fulfilled** → operation completed successfully
* **Rejected** → operation failed

### Example

```js
const promise = new Promise((resolve, reject) => {
    resolve("Data received");
});
```

---

## 2. `.then()` and `.catch()`

* `.then()` runs when the Promise is successfully completed.
* `.catch()` handles errors/rejections.

```js
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
```

### Basic pattern

```text
Promise
   ↓
.then()  → Success
.catch() → Error
```

---

## 3. async

`async` is used to make a function asynchronous.

An `async` function always returns a Promise.

```js
async function getData() {
    return "Hello";
}
```

---

## 4. await

`await` is used to wait for a Promise to settle and get its result.

It is normally used inside an `async` function.

```js
async function getData() {
    const result = await somePromise;
}
```

### Simple meaning

```text
async → function can work with asynchronous operations

await → wait for the Promise result
```

---

## 5. API Calls with async/await

`fetch()` is commonly used to make API requests.

```js
async function getData() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

getData();
```

### Flow

```text
getData()
    ↓
fetch()
    ↓
await response
    ↓
response.json()
    ↓
await data
    ↓
console.log(data)
```

---

## 6. try/catch

`try/catch` is used to handle errors in asynchronous code.

```js
try {
    // code that may fail
} catch (error) {
    // handle error
}
```

Example:

```js
async function getUsers() {
    try {
        const response = await fetch(url);
        const users = await response.json();

        console.log(users);
    } catch (error) {
        console.log("Error:", error.message);
    }
}
```

---

## 7. Checking HTTP Response

A request can receive an HTTP error response, so we can check `response.ok`.

```js
async function getUsers() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.log("Error:", error.message);
    }
}
```

---

## 8. API URL vs API

An **API** is a service/interface that allows applications to communicate and exchange data.

A **URL** is the address used to access a resource or API endpoint.

Example:

```js
fetch("https://jsonplaceholder.typicode.com/users");
```

Here:

```text
API     → service that provides the data
URL     → address used to access it
/users  → API endpoint
```

---

## 9. Common API Request Pattern

```js
async function getData() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.log("Error:", error.message);
    }
}
```

This pattern is commonly used when working with APIs in JavaScript and React.

---

## 10. Why async/await is Important in MERN

In MERN development, asynchronous operations are common:

* Fetching data from APIs
* Sending data to backend
* Getting data from MongoDB through backend APIs
* User authentication
* Uploading files
* CRUD operations

Typical flow:

```text
React
   ↓
fetch()
   ↓
Express API
   ↓
MongoDB
   ↓
Express response
   ↓
React
```

---

## Quick Revision

| Concept     | Meaning                                        |
| ----------- | ---------------------------------------------- |
| Promise     | Future result of an async operation            |
| Pending     | Operation is still running                     |
| Fulfilled   | Operation succeeded                            |
| Rejected    | Operation failed                               |
| `.then()`   | Handles successful Promise result              |
| `.catch()`  | Handles Promise errors                         |
| `async`     | Makes a function asynchronous                  |
| `await`     | Waits for Promise result                       |
| `fetch()`   | Makes HTTP requests                            |
| `try/catch` | Handles errors                                 |
| API         | Service/interface for communication and data   |
| URL         | Address used to access a resource/API endpoint |

## Key Pattern

```js
async function getData() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
```

**Main takeaway:**
`Promises` handle asynchronous operations, while `async/await` provides a cleaner and more readable way to work with Promises.
