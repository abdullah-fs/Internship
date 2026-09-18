# Fetch & HTTP Basics — JavaScript

## 1. HTTP

**HTTP (HyperText Transfer Protocol)** is a communication protocol used to exchange data between a client and a server.

### Basic Flow

```text
Client / Frontend
       ↓
HTTP Request
       ↓
Server / Backend
       ↓
HTTP Response
       ↓
Client / Frontend
```

In MERN:

```text
React
  ↓
HTTP Request
  ↓
Express
  ↓
MongoDB
  ↓
Express Response
  ↓
React
```

---

## 2. Fetch

`fetch()` is a built-in JavaScript function used to make HTTP requests.

```js
const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
);
```

`fetch()` returns a **Promise**, so it can be used with `async/await`.

---

## 3. GET Request

**GET is used to retrieve data from a server.**

```js
async function getUsers() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const data = await response.json();

    console.log(data);
}

getUsers();
```

### Flow

```text
GET /users
    ↓
Server
    ↓
Users Data
```

---

## 4. POST Request

**POST is commonly used to send data to a server and create a new resource.**

```js
async function createUser() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Abdullah",
                email: "abdullah@example.com"
            })
        }
    );

    const data = await response.json();

    console.log(data);
}

createUser();
```

### Important Parts

```js
method: "POST"
```

Specifies the HTTP method.

```js
headers: {
    "Content-Type": "application/json"
}
```

Tells the server that the request body contains JSON.

```js
body: JSON.stringify({...})
```

Converts a JavaScript object into a JSON string to send to the server.

---

## 5. Request Body

**Request body is the data sent from the client to the server.**

Example:

```js
body: JSON.stringify({
    name: "Abdullah",
    email: "abdullah@example.com"
})
```

Flow:

```text
Frontend
   ↓
Request Body
   ↓
Backend
```

Request bodies are commonly used with:

* POST
* PUT
* PATCH

---

## 6. Response Body

**Response body is the data returned from the server to the client.**

```js
const data = await response.json();
```

Example response:

```js
{
    id: 1,
    name: "Abdullah",
    email: "abdullah@example.com"
}
```

Flow:

```text
Backend
   ↓
Response Body
   ↓
Frontend
```

---

## 7. HTTP Status Codes

The server returns a status code with the response.

| Status Code | Meaning                 |
| ----------- | ----------------------- |
| `200`       | OK / Request successful |
| `201`       | Resource created        |
| `400`       | Bad Request             |
| `401`       | Unauthorized            |
| `403`       | Forbidden               |
| `404`       | Not Found               |
| `500`       | Internal Server Error   |

### Easy Classification

```text
2xx → Success
4xx → Client-side/request problem
5xx → Server-side problem
```

---

## 8. response.ok

`response.ok` can be used to check whether the HTTP response was successful.

```js
if (!response.ok) {
    throw new Error("Request failed");
}
```

Complete example:

```js
async function getUsers() {
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
        console.log("Error:", error.message);
    }
}

getUsers();
```

---

## 9. Request vs Response

### Request

Data sent **from client to server**.

```text
Request
├── Method
├── Headers
└── Body
```

### Response

Data sent **from server to client**.

```text
Response
├── Status Code
├── Headers
└── Body
```

---

## 10. Frontend vs Backend

HTTP concepts are used on both sides of a MERN application.

### Frontend

React/JavaScript commonly sends requests:

```js
fetch("/users");
```

### Backend

Express receives and handles those requests:

```js
app.get("/users", (req, res) => {
    res.json(users);
});
```

The backend then sends a response back to the frontend.

---

## 11. Common MERN API Flow

```text
React Frontend
      ↓
fetch()
      ↓
HTTP Request
      ↓
Express API
      ↓
MongoDB
      ↓
Express
      ↓
HTTP Response
      ↓
React
```

---

## Quick Revision

```text
HTTP       → Communication between client and server
fetch()    → Makes HTTP requests
GET        → Retrieve data
POST       → Send/create data
Request    → Client → Server
Response   → Server → Client
Body       → Data inside request/response
200        → Successful request
201        → Resource created
404        → Resource not found
500        → Server error
response.ok → Checks whether response was successful
```

## Key Fetch Pattern

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
        console.log(error.message);
    }
}
```

**Main takeaway:**
`fetch()` allows JavaScript/React to communicate with APIs using HTTP requests. GET is commonly used to retrieve data, while POST is commonly used to send/create data. The server responds with a status code and response body.
