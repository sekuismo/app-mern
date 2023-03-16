//Este componente contiene al app.js  ,así todos los componentes pueden compartir el estado
// renderiza toda la app en childen

import { useState, createContext, useContext,useEffect } from "react";
import {getPostsRequests} from '../api/posts'
const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext)
  return context
};

export const PostProvider = ({ children }) => {

  const [posts, setPosts] = useState([])

  const getPosts = async () =>{
   const res =  await getPostsRequests()
   setPosts(res.data)
  // setPosts([]) para probar no hay publicaciones
   console.log(posts)
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <postContext.Provider
      value={{
        posts,
        getPosts
      }}
    >
      {children}
    </postContext.Provider>
  );
};
