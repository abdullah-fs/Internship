// 1. .map()
// const numbers = [1, 2, 3];
// const doubled = numbers.map((num) => num * 2);
// console.log(doubled);

// pratice-1
// const numbers = [2, 4, 6, 8];
// const result = numbers.map((num) => num * 2);
// console.log(result);

// pratice-2
// const price = [100, 200, 300, 400];
// const result = price.map((num) => num + 50);
// console.log(result);

// pratice-3
// const names = ["Abdullah", "Ali", "Ahmad", "Usman"];
// const result = names.map((add) => add + " - Developer");
// console.log(result);




// 2. .filter()
// const ages = [12, 14, 15, 34, 35, 98];
// const result = ages.filter((age) => age >= 18);
// console.log(result);


// pratice-1
// const numbers = [5, 12, 18, 25, 30, 7, 40];
// const result = numbers.filter((num) => num >= 20);
// console.log(result);


// pratice-2
// const names = ["Ali", "Abdullah", "Ahmed", "Usman", "Ayan"];
// const result = names.filter((name) => name.length >= 5);
// console.log(result);


// 3. .find()
// const numbers = [10, 20, 30, 40];
// const result = numbers.find((num) => num > 25);
// console.log(result);


// pratice-1 
// const users = [
//     { name: "Abdullah", age: 12 },
//     { name: "Ali", age: 23 },
//     { name: "Ahmad", age: 25 },
//     { name: "Usman", age: 40 }
// ];
// const result = users.find((user) => user.age > 20);
// console.log(result);


// pratice-2
// const products = [
//   { name: "Laptop", price: 80000 },
//   { name: "Mouse", price: 2000 },
//   { name: "Keyboard", price: 5000 },
//   { name: "Monitor", price: 25000 }
// ];
// const result = products.find((product) => product.price > 5000);
// console.log(result);


// 4. reduce()
// const numbers = [10, 20, 30, 40];
// const total = numbers.reduce((sum, num) => {
//     return sum + num;
// }, 0);
// console.log(total);


// pratice-1
// const numbers = [5, 10, 15, 20, 25];
// const total = numbers.reduce((sum, num) => {
//     return sum + num;
// }, 0);
// console.log(total);


// 5. some()
// const ages = [12, 15, 21, 16];
// const result = ages.some((age) => age >= 18);
// console.log(result);


// pratice-1
// const users = [
//   { name: "Ali", age: 16 },
//   { name: "Abdullah", age: 17 },
//   { name: "Ahmed", age: 22 },
//   { name: "Usman", age: 15 }
// ];
// const result = users.some((user) => user.age >= 18);
// console.log(result);


// 6. every()
// const ages = [20, 25, 30, 22];
// const result = ages.every((age) => age >= 18);
// console.log(result);