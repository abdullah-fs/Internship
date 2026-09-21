// import { useState, useEffect } from "react";
// import React from 'react'

// const App = () => {
//   const [ count, setCount ] = useState(0);

//   useEffect(() => {
//     console.log("Count changed:", count);
//   }, [count]);

//   return (
//     <div>
//       <h1>Count: {count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </div>
//   )
// }

// export default App



// example no 2
// import { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `Count: ${count}`;
//   }, [count]);

//   return (
//     <div>
//       <h1>Count: {count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </div>
//   );
// }

// export default App;


// pratice problem no 1
// import { useState, useEffect } from "react";

// import React from 'react'

// const App = () => {
//   const [ count, setCount ] = useState(0);

//   useEffect(() => {
//     console.log("Count is: 1", count);
//   }, [count]);

//   return (
//     <div>
//       <h1>Count: {count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
      
//     </div>
//   )
// }

// export default App



// pratice problem no 2
// import { useState, useEffect } from "react";
// import React from 'react'

// const App = () => {
//   const [count, setCount] = useState("Abdullah");

//   useEffect(() => {
//     console.log("Name change to: ", count);
//   }, [count]);

//   return (
//     <div>
//       <h1>Name: {count}</h1>

//       <button onClick={() => setCount("Ali")}>
//         Name change to: 
//       </button>
//     </div>
//   )
// }

// export default App



// pratice problem no 3
import React, { useState, useEffect } from "react";

const App = () => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    console.log(
      isOnline
        ? "Status changed: Online"
        : "Status changed: Offline"
    );
  }, [isOnline]);

  return (
    <div>
      <h1>{isOnline ? "Online" : "Offline"}</h1>

      <button onClick={() => setIsOnline(true)}>
        Go Online
      </button>

      <button onClick={() => setIsOnline(false)}>
        Go Offline
      </button>
    </div>
  );
};

export default App;