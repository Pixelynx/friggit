import axios from 'axios';

//GET
export const getAllPosts = (posts) => axios.get('/posts', posts);

//POST
export const createNewPost = (post) => axios.post(`/posts`, post);
