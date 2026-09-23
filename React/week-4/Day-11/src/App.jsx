// import { useEffect, useState } from "react";
// import "./App.css";

// const App = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch posts");
//         }

//         return response.json();
//       })
//       .then((data) => {
//         setPosts(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <h2 className="loading">Loading...</h2>;
//   }

//   if (error) {
//     return <h2 className="error">{error}</h2>;
//   }

//   return (
//     <div className="container">
//       <h1>Posts</h1>

//       <div className="posts-container">
//         {posts.map((post) => (
//           <div className="post-card" key={post.id}>
//             <h2>{post.title}</h2>
//             <p>{post.body}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;



// pratice problem no 1
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 className="loading">Loading posts...</h2>;
  }

  if (error) {
    return <h2 className="error">{error}</h2>;
  }

  return (
    <div className="container">
      <h1>Posts</h1>

      <div className="posts-container">
        {posts.slice(0, 10).map((post) => (
          <div className="post-card" key={post.id}>
            <span>#{post.id}</span>

            <h2>{post.title}</h2>

            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;