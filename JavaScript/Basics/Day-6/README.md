# JavaScript — Array Methods

JavaScript provides useful array methods to work with arrays easily and efficiently.

The main methods learned are:

* `map()`
* `filter()`
* `find()`
* `reduce()`
* `some()`
* `every()`

---

## 1. `.map()`

### What is `.map()`?

`.map()` is used to **transform every element** of an array.

It returns a **new array**.

### Syntax

```js
const result = array.map((item) => {
  return newValue;
});
```

### Example

```js
const numbers = [1, 2, 3];

const result = numbers.map((num) => num * 2);

console.log(result);
```

Output:

```js
[2, 4, 6]
```

### Remember

**map() → Transform every item**

---

## 2. `.filter()`

### What is `.filter()`?

`.filter()` is used to get **all elements that satisfy a condition**.

It returns a **new array**.

### Syntax

```js
const result = array.filter((item) => condition);
```

### Example

```js
const ages = [12, 18, 20, 15, 25];

const adults = ages.filter((age) => age >= 18);

console.log(adults);
```

Output:

```js
[18, 20, 25]
```

### Remember

**filter() → Get all matching items**

---

## 3. `.find()`

### What is `.find()`?

`.find()` returns the **first element** that satisfies a condition.

It returns a **single value**, not an array.

### Syntax

```js
const result = array.find((item) => condition);
```

### Example

```js
const ages = [12, 17, 21, 25];

const result = ages.find((age) => age >= 18);

console.log(result);
```

Output:

```js
21
```

`21` is the first age that is `18` or greater.

### Remember

**find() → Find the first matching item**

---

## 4. `.reduce()`

### What is `.reduce()`?

`.reduce()` is used to combine multiple array values into **one final value**.

It is commonly used for:

* Sum
* Total price
* Average
* Counting

### Syntax

```js
const result = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, initialValue);
```

### Example

```js
const prices = [100, 200, 300];

const total = prices.reduce((sum, price) => {
  return sum + price;
}, 0);

console.log(total);
```

Output:

```js
600
```

### Remember

**reduce() → Many values → One value**

---

## 5. `.some()`

### What is `.some()`?

`.some()` checks whether **at least one element** satisfies a condition.

It returns:

* `true` → if at least one matches
* `false` → if none matches

### Syntax

```js
const result = array.some((item) => condition);
```

### Example

```js
const ages = [12, 15, 21, 16];

const result = ages.some((age) => age >= 18);

console.log(result);
```

Output:

```js
true
```

Because `21` is greater than or equal to `18`.

### Remember

**some() → Koi ek?**

---

## 6. `.every()`

### What is `.every()`?

`.every()` checks whether **all elements** satisfy a condition.

It returns:

* `true` → if all elements match
* `false` → if even one element fails

### Syntax

```js
const resu
```