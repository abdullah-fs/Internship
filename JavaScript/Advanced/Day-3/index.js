// async function getData(params) {
//     try {
//         const response = await fetch
//         ( "https://jsonplaceholder.typicode.com/users")
//         if(!response.ok){
//             throw new Error("Request failed");
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error.message);  
//     }
// }
// getData();


// pratice-1
// async function checkUser() {
//     try {
//         console.log(userName);
//     } catch (error) {
//         console.log(error.message)   
//     }
// }
// checkUser();



// pratice-2
// async function getUser() {
//     try {
//         const response = await fetch
//         ("https://jsonplaceholder.typicode.com/users/1");
//         if(!response.ok){
//             throw new Error("Fetch failed sorry")
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// getUser();