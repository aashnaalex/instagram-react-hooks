import React, { useState,useEffect } from 'react';
import Header from './Components/Header';
import Feed from './Components/Feed';
import post1 from './post1.jpg';
import post2 from './post2.jpg';
import post3 from './post3.jpg';

function App() {
  const [Posts, setPost] = useState([]);

  useEffect(() => {
    const posts = [{
      id: "aashnaalex",
      post: post1,
      title: "Ichabeee.."
    },
    {
      id: "aashly",
      post: post2,
      title: "Cutestttt"
    },
    {
      id: "alen",
      post: post3,
      title: ""
    }]
    
    setPost(posts);
  }, [])


  return (
    <div className="App">
      <Header></Header>
      {Posts.map((post) => (
        <Feed key={post.id} id={post.id} post={post}></Feed>
      ))}

    </div>
  );
}

export default App;
