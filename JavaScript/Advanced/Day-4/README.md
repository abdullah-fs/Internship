# Week 3 — Optional Chaining & Nullish Coalescing

## 📌 Topic

**Optional Chaining (`?.`) and Nullish Coalescing (`??`)**

These operators are very useful when working with **API data** because some fields may be missing, `null`, or `undefined`.

---

# 1. Optional Chaining `?.`

Optional chaining allows us to safely access properties without getting an error when a property is missing.

### Syntax

```js
object?.property
```

---

## 2. The Problem Without Optional Chaining

```js
const user = {
    name: "Abdullah"
};

console.log(user.profile.phone);
```

Here, `profile` does not exist.

This can cause an error because JavaScript tries to access `phone` from `undefined`.

---

## 3. Using Optional Chaining

```js
const user = {
    name: "Abdullah"
};

console.log(user.profile?.phone);
```

Output:

```text
undefined
```

Instead of throwing an error, optional chaining returns `undefined`.

---

# 4. Nested Optional Chaining

API data can contain deeply nested objects.

```js
const user = {
    profile: {
        contact: {
            email: "abdullah@example.com"
        }
    }
};
```

We can safely access nested properties:

```js
console.log(user?.profile?.contact?.email);
```

If any property before the final property is `null` or `undefined`, the expression safely returns `undefined`.

---

# 5. Example with Missing Field

```js
const user = {
    name: "Abdullah",
    profile: {
        contact: {
            email: "abdullah@example.com"
        }
    }
};

console.log(user.name);
console.log(user.profile.contact.email);
console.log(user.profile.contact?.phone);
```

Output:

```text
Abdullah
abdullah@example.com
undefined
```

The `phone` field does not exist, but the program does not throw an error.

---

# 6. Nullish Coalescing `??`

The nullish coalescing operator provides a **default value** when the left side is `null` or `undefined`.

### Syntax

```js
value ?? defaultValue
```

---

## 7. Basic Example

```js
const user = {
    name: "Abdullah"
};

console.log(user.age ?? "Age not available");
```

Output:

```text
Age not available
```

`user.age` is `undefined`, so the default value is used.

---

# 8. Example with `null`

```js
const user = {
    name: "Abdullah",
    age: null
};

console.log(user.age ?? "Age not available");
```

Output:

```text
Age not available
```

`??` uses the default value when the value is `null` or `undefined`.

---

# 9. Optional Chaining + Nullish Coalescing

These two operators are often used together when working with API data.

```js
const user = {
    name: "Abdullah",
    profile: {
        bio: null
    }
};

console.log(
    user.profile?.bio ?? "No bio available"
);
```

Output:

```text
No bio available
```

Here:

1. `?.` safely accesses `profile.bio`.
2. `??` provides a default value if the result is `null` or `undefined`.

---

# 10. Real-World API Example

Suppose an API returns:

```js
const user = {
    name: "Abdullah",
    profile: {
        username: "abdullah01",
        bio: null
    }
};
```

We can safely display the data:

```js
console.log(user.name ?? "Unknown User");

console.log(
    user.profile?.username ?? "No username"
);

console.log(
    user.profile?.bio ?? "No bio available"
);

console.log(
    user.profile?.email ?? "No email available"
);
```

Output:

```text
Abdullah
abdullah01
No bio available
No email available
```

---

# 11. `?.` vs `??`

| Operator | Purpose                                           |
| -------- | ------------------------------------------------- |
| `?.`     | Safely access a property                          |
| `??`     | Provide a default value for `null` or `undefined` |

### Example

```js
user.profile?.email
```

Means:

> Safely get the email.

```js
user.profile?.email ?? "No email"
```

Means:

> Safely get the email, and if it is `null` or `undefined`, use `"No email"`.

---

# 12. Important Difference from `||`

`??` only checks for:

```text
null
undefined
```

It does **not** replace other falsy values such as:

```text
0
""
false
```

Example:

```js
const age = 0;

console.log(age ?? 18);
```

Output:

```text
0
```

Because `0` is not `null` or `undefined`.

---

# 🎯 Key Takeaways

* `?.` is called **Optional Chaining**.
* It safely accesses properties that might be missing.
* `?.` can prevent errors when accessing nested API data.
* `??` is called **Nullish Coalescing**.
* `??` provides a default value when the value is `null` or `undefined`.
* `?.` and `??` are commonly used together.
* These operators are especially useful when working with API responses.

---

## 🧠 Quick Revision

```js
user?.profile?.email
```

**Safely access nested data.**

```js
user.email ?? "No email"
```

**Use a default if email is `null` or `undefined`.**

```js
user?.profile?.email ?? "No email"
```

**Safely access the email + provide a default value.**