import axios from "axios";

export const getPostsRequests = async () => {
  return await axios.get('/posts');
};

export const createPostRequest = async (post) => 
  await axios.post('/posts', post);

  
