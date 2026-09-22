// Storing API Response in useState
// import { useState, useEffect } from "react";
// import React from 'react'

// const App = () => {
//   const [ users, setUsers ] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => {
//       setUsers(data);
//     });
//   }, []);
//   return (
//     <div>
//      {users.map((user) => (
//       <div key={user.id}>
//         <h2>{user.name}</h2>
//         <p>{user.email}</p>
//       </div>
//      ))}
//     </div>
//   )
// }

// export default App


// pratice problem no 1
// import { use } from "react";
// import { useState, useEffect } from "react";
// import React from 'react'

// const App = () => {
//     const [ users, setUsers ] = useState([]);

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response) => response.json())
//         .then((data) => {
//             setUsers(data);
//         })
//     })
//   return (
//     <div>
//         {users.map((user) => (
//             <div key={user.id}>
//                 <h2>{user.name}</h2>
//             </div>
//         ))}
//     </div>
//   )
// }

// export default App