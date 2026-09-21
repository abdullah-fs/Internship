// && Conditional Rendering
// import React from 'react'
// import { useState, useEffect } from 'react'

// const App = () => {
//   const [isVisible, setIsVisible ] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsVisible(!isVisible)}>
//         Show / Hide
//       </button>

//       {isVisible && <h2>Hello Abdullah</h2>}
//     </div>
//   )
// }

// export default App


// pratice problem no 1
// import React from 'react'
// import { useState, useEffect } from 'react';

// const App = () => {
//   const [ isAdmin, setIsAdmin ] = useState(false);
//   return (
//     <div>
//       <button onClick={() => setIsAdmin(!isAdmin)}>
//         Dashboard / Delete User
//       </button>

//       {isAdmin && <h2>Hello dear</h2>}
//     </div>

//   )
// }

// export default App



// Ternary Operator ? :
// import React, { useState } from "react";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <div>
//       {isLoggedIn ? (
//         <h1>Dashboard</h1>
//       ) : (
//         <h1>Login Page</h1>
//       )}

//       <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
//         Login / Logout
//       </button>
//     </div>
//   );
// };

// export default App;