# JavaScript — Spread & Rest Operators

## Spread Operator (`...`)

The **Spread Operator** is used to copy or expand values from an array or object into a new array or object.

### Object Example

```js
const user = {
  name: "Abdullah",
  age: 21
};

const updatedUser = {
  ...user,
  age: 22
};

console.log(updatedUser);
```

Spread copies the existing object and allows us to update specific values without directly modifying the original object.

### Array Example

```js
const numbers = [10, 20, 30];

const newNumbers = [...numbers, 40];

console.log(newNumbers);
```

## Rest Operator (`...`)

The **Rest Operator** collects multiple remaining values into a single array or object.

### Array Example

```js
const numbers = [10, 20, 30, 40];

const [first, ...rest] = numbers;

console.log(first); // 10
console.log(rest);  // [20, 30, 40]
```

### Object Example

```js
const user = {
  name: "Abdullah",
  age: 21,
  city: "Peshawar"
};

const { name, ...otherInfo } = user;

console.log(name);
console.log(otherInfo);
```

## Spread vs Rest

| Operator     | Purpose                               |
| ------------ | ------------------------------------- |
| `...` Spread | Values ko copy/expand karta hai       |
| `...` Rest   | Remaining values ko collect karta hai |

### Important Rule

**Spread → Copy / Expand**

**Rest → Collect Remaining Values**

### React Connection

Spread Operator is commonly used in React when creating updated state without directly mutating the existing state.

```js
setUser({
  ...user,
  name: "Ali"
});
```
