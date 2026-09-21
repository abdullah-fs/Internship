// React mein list render karna kya hai?
// import React from 'react'
// const App = () => {
//   const users = ["Abdullah", "Ali", "Ahmad"];

//   return (
//     <div>
//       {users.map ((user) => (
//         <h2>{user}</h2>
//       ))}
//     </div>
//   )
// }
// export default App


// Objects ke saath .map()
// import React from "react";

// const App = () => {
//   const students = [
//     { id: 1, name: "Abdullah", department: "Software Engineering" },
//     { id: 2, name: "Ali", department: "Computer Science" },
//     { id: 3, name: "Ahmed", department: "IT" }
//   ];

//   return (
//     <div>
//       {students.map((student) => (
//         <div key={student.id}>
//           <h2>{student.name}</h2>
//           <p>{student.department}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;


// pratice problem no 1
// import React from 'react'

// const App = () => {
//   const fruits = [
//     { id: 1, name: "Apple" },
//     { id: 2, name: "Banana" },
//     { id: 3, name: "Mango" }
//   ];

//   return (
//     <div>
//       {fruits.map((fruit) =>{
//         return(
//         <div key={fruit.id}>
//           <h2>{fruit.name}</h2>
//         </div>
//         )
//       })};
//     </div>
//   )
// }

// export default App



// pratice problem no 2
// import React from 'react'

// const App = () => {
//   const students = [
//     { id: 1, name: "Abdullah", age: 21 },  
//     { id: 2, name: "Ali", age: 22 },
//     { id: 3, name: "Ahmad", age: 23 },
//   ];

//   return (
//     <div>
//       {students.map((student) => {
//         return (
//           <div key={student.key}>
//             <h2>{student.name}</h2>
//             <p>{student.age}</p>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default App



// pratice problem no 3
import React from 'react'

const App = () => {
  const cities = [
    { id: 1, name: "Peshawar" },
    { id: 2, name: "Islamabad" },
    { id: 3, name: "Lahore" }
  ];
  return (
    <div>
      {cities.map((city) => {
        return (
          <div key={city.id}>
            <h2>{city.name}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default App



