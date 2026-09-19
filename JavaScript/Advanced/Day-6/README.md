# ES Modules — import/export

ES Modules JavaScript code ko different files mein divide karke reusable banane ka system hai.

## `export`

Kisi function/variable ko doosri file mein use karne ke liye export karte hain.

```js
function add(a, b) {
    return a + b;
}

export { add };
```

## `import`

Doosri file se exported code ko use karne ke liye import karte hain.

```js
import { add } from "./math.js";

console.log(add(10, 20));
```

## Multiple Exports

```js
export { createUser, isAdult };
```

Import:

```js
import { createUser, isAdult } from "./user.js";
```

## Node.js mein ES Modules

`package.json` mein:

```json
{
    "type": "module"
}
```

Phir `import/export` use kar sakte hain.

### Easy Rule

```text
export = bahar bhejna 📤
import = andar lana 📥
```

### Key Point

ES Modules ka main purpose **code ko modular, reusable aur organized** rakhna hai.