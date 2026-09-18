// async function getData() {
//     try {
//         const response = await fetch( "https://jsonplaceholder.typicode.com/users");
//         if(!response.ok){
//             throw new Error("Failed to fetched users");
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error: ", error.message);
//     }
// }
// getData();


// get data
// async function createUser() {
//     try {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users",
//             {
//                 method: "POST",

//                 headers: {
//                     "Content-Type": "application/json"
//                 },

//                 body: JSON.stringify({
//                     name: "Abdullah",
//                     email: "abdullah@example.com",
//                     username: "abdullah01"
//                 })
//             }
//         );

//         if (!response.ok) {
//             throw new Error("Failed to create user");
//         }

//         const data = await response.json();

//         console.log(data);

//     } catch (error) {
//         console.log("Error:", error.message);
//     }
// }

// createUser();


// pratice-1
// async function getData() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users",
//             {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 name: "Abdullah",
//                 email: "abdullah@example.com",
//                 username: "abdullah01",
//                 age: "21"
//             })
//         })
//         if(!response.ok){
//             throw new Error("Failed to create user");
//         }
//         const data = await response.json();
//         console.log(data); 
//     } catch (error) {
//         console.log("Error: ", error.message);
//     };
// };
// getData();


// async function getData() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users",
//         {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 name: "Abdullah",
//                 rollNo: "21",
//                 department: "Software Enginnering",
//                 university: "University of peshawar"
//             })
//         })
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error", error.message);
//     }
// }
// getData();