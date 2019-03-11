import axios from 'axios';

//GET
export const getAllPosts = (posts) => axios.get('/posts', posts);
export const getCommentsForPost = (id) => axios.get(`/posts/${id}`);

//POST
export const createNewPost = (post) => axios.post(`/posts/submit`, post);
