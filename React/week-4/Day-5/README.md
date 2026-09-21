# React — Rendering Lists with `.map()` + `key` Prop

## 1. `.map()` kya hai?

`.map()` JavaScript ka array method hai jo array ke **har item par kaam** karta hai aur ek new array return karta hai.

React mein `.map()` ka use karke hum **multiple elements ko dynamically render** karte hain.

### Example

```jsx
const cities = ["Peshawar", "Islamabad", "Lahore"];

{cities.map((city) => (
  <h2>{city}</h2>
))}
```

Output:

```text
Peshawar
Islamabad
Lahore
```

---

## 2. Objects ke saath `.map()`

Real projects mein data aksar objects ki form mein hota hai.

```jsx
const cities = [
  { id: 1, name: "Peshawar" },
  { id: 2, name: "Islamabad" },
  { id: 3, name: "Lahore" }
];

{cities.map((city) => (
  <div key={city.id}>
    <h2>{city.name}</h2>
  </div>
))}
```

---

## 3. `key` Prop

React ko list ke har item ki **unique identity** chahiye hoti hai.

Isliye `.map()` se render hone wale elements par `key` deni hoti hai.

```jsx
<div key={city.id}>
```

Best practice:

```jsx
key={city.id}
```

Database/API se milne wali unique `id` ko prefer karo.

---

## 4. `.map()` mein `return`

Agar `{}` use karo:

```jsx
cities.map((city) => {
  return (
    <h2>{city.name}</h2>
  );
})
```

Agar `()` use karo to automatic return hota hai:

```jsx
cities.map((city) => (
  <h2>{city.name}</h2>
))
```

---

## 5. Real-World Use

API se data:

```text
API
 ↓
Array of Objects
 ↓
.map()
 ↓
React Components / Cards
```

Example:

```jsx
products.map((product) => (
  <ProductCard key={product.id} product={product} />
))
```

Ye pattern e-commerce products, users, students, posts aur comments mein bohat common hai.

## Important Points

* `.map()` arrays ko render karne ke liye use hota hai.
* React mein lists render karne ke liye `.map()` bohat common hai.
* Har list item ko unique `key` deni chahiye.
* `key` ke liye unique `id` prefer karo.
* `{}` use karne par `return` zaroori hai.
* `()` use karne par automatic return hota hai.
