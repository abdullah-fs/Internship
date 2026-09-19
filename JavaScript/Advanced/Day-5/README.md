# JSON — JSON.stringify() & JSON.parse()

## What is JSON?

**JSON (JavaScript Object Notation)** ek common data format hai jo APIs aur applications mein data send aur receive karne ke liye use hota hai.

JSON ka structure JavaScript object jaisa hota hai, lekin JSON actually **string format** mein hota hai.

---

## 1. JSON.stringify()

`JSON.stringify()` JavaScript object ko **JSON string** mein convert karta hai.

### Syntax

```js
JSON.stringify(object);
```

### Example

```js
const student = {
    name: "Abdullah",
    age: 21,
    department: "Software Engineering"
};

const studentJSON = JSON.stringify(student);

console.log(studentJSON);
console.log(typeof studentJSON);
```

Output:

```text
{"name":"Abdullah","age":21,"department":"Software Engineering"}
string
```

### Simple Rule

```text
JavaScript Object → JSON String
```

---

## 2. JSON.parse()

`JSON.parse()` JSON string ko wapas **JavaScript object** mein convert karta hai.

### Syntax

```js
JSON.parse(jsonString);
```

### Example

```js
const userJSON = '{"name":"Abdullah","age":21}';

const user = JSON.parse(userJSON);

console.log(user);
console.log(user.name);
```

Output:

```text
{ name: "Abdullah", age: 21 }
Abdullah
```

### Simple Rule

```text
JSON String → JavaScript Object
```

---

## 3. stringify + parse together

Real applications mein dono methods aksar ek flow mein use hote hain.

```js
const product = {
    name: "Laptop",
    price: 85000
};

const productJSON = JSON.stringify(product);

const parsedProduct = JSON.parse(productJSON);

console.log(parsedProduct.name);
console.log(parsedProduct.price);
```

Flow:

```text
Object
   ↓
JSON.stringify()
   ↓
JSON String
   ↓
JSON.parse()
   ↓
JavaScript Object
```

---

## 4. JSON with Fetch API

POST request mein object ko JSON string mein convert karne ke liye:

```js
const user = {
    name: "Abdullah",
    age: 21
};

fetch("https://example.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
});
```

Yahan:

```js
body: JSON.stringify(user)
```

object ko JSON string mein convert karta hai.

---

## 5. `response.json()`

Fetch API se response receive karte waqt commonly:

```js
const response = await fetch(url);

const data = await response.json();
```

`response.json()` response body ko JavaScript data/object mein convert karta hai.

Isliye normally API response ke liye manually:

```js
JSON.parse(...)
```

karne ki zaroorat nahi hoti.

---

## 6. `typeof` Check

```js
const student = {
    name: "Abdullah"
};

const studentJSON = JSON.stringify(student);
const parsedStudent = JSON.parse(studentJSON);

console.log(typeof student);         // object
console.log(typeof studentJSON);     // string
console.log(typeof parsedStudent);   // object
```

---

## Quick Revision

| Method             | Conversion                       |
| ------------------ | -------------------------------- |
| `JSON.stringify()` | Object → String                  |
| `JSON.parse()`     | String → Object                  |
| `response.json()`  | Fetch response → JavaScript data |

### Easy Trick 🧠

```text
stringify = String banana
parse     = Object/data banana
```

### Key Points

* JSON APIs mein data exchange ke liye commonly use hota hai.
* `JSON.stringify()` object ko JSON string banata hai.
* `JSON.parse()` JSON string ko JavaScript object/data mein convert karta hai.
* POST/PUT/PATCH requests mein `JSON.stringify()` commonly use hota hai.
* Fetch response ke liye `response.json()` commonly use hota hai.