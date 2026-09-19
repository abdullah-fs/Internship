# Immutability — State Updates

**Immutability** ka matlab hai existing data ko directly change na karna, balki **new copy bana kar update karna**.

## Object

❌ Direct mutation:

```js
user.age = 22;
```

✅ Immutable update:

```js
const updatedUser = {
    ...user,
    age: 22
};
```

`...user` existing object ki properties ki copy banata hai.

## Array

❌ Direct mutation:

```js
skills.push("React");
```

✅ Immutable update:

```js
const updatedSkills = [...skills, "React"];
```

## React State

State ko directly change nahi karte:

❌

```js
user.name = "Ali";
```

✅

```js
setUser({
    ...user,
    name: "Ali"
});
```

### Easy Rule

```text
❌ Original data ko directly change mat karo
✅ New copy banao → copy ko update karo
```

### Why Important?

React mein immutable updates se **state changes properly detect** hote hain aur UI expected way mein update hoti hai.
