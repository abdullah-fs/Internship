# JavaScript — Template Literals

## What are Template Literals?

**Template Literals** are a modern way to create strings in JavaScript and easily insert variables or expressions inside them.

They use **backticks** `` ` ` `` instead of quotes.

### Basic Example

```js
const name = "Abdullah";
const age = 21;

console.log(`My name is ${name} and I am ${age} years old.`);
```

Output:

```text
My name is Abdullah and I am 21 years old.
```

## `${}` — Insert Variables

Variables can be inserted inside a template literal using `${}`.

```js
const name = "Abdullah";
const city = "Peshawar";

console.log(`I am ${name} and I live in ${city}.`);
```

## Expressions

We can also perform calculations or use expressions inside `${}`.

```js
const price = 1000;
const quantity = 2;

console.log(`Total price is ${price * quantity}.`);
```

Output:

```text
Total price is 2000.
```

## Advantages

* Cleaner than string concatenation using `+`
* Easy to insert variables
* Can contain expressions
* Commonly used in modern JavaScript and React

## Quick Rule

**Template Literal → Backticks `` ` ` ``**

**Variable/Expression → `${}`**

Example:

```js
`Hello ${name}`
```
