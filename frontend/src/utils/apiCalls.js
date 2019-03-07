import axios from 'axios';

//GET
export const getAllPosts = () => axios.get('/posts');

//POST
export const createNewPost = (post) => axios.post(`/posts`, post);
