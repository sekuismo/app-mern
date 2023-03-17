//Este componente contiene al app.js  ,así todos los componentes pueden compartir el estado
// renderiza toda la app en childen

import { useState, createContext, useContext, useEffect } from "react";
import {
  createPostRequest,
  deletePostRequest,
  getPostRequest,
  getPostsRequests,
  updatePostRequest,
} from "../api/posts";
const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await getPostsRequests();
    setPosts(res.data);
  };

  const updatePost = async (id, post) => {
    const res = await updatePostRequest(id, post);

    setPosts(posts.map((post) => (post._id === id ? res.data : post)));
  };

  const createPost = async (post) => {
    const res = await createPostRequest(post);
    setPosts([...posts, res.data]);
  };
  const deletePost = async (id) => {
    const res = await deletePostRequest(id);

    setPosts(posts.filter((post) => post._id !== id));
  };
  const getPost = async (id) => {
    const res = await getPostRequest(id);
    return res.data;
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <postContext.Provider
      value={{
        posts,
        getPosts,
        createPost,
        deletePost,
        getPost,
        updatePost,
      }}
    >
      {children}
    </postContext.Provider>
  );
};
