import axios from 'axios';

export const getAllPosts = () => axios.get('/posts');
export const createNewPost = () => axios.post('/submit');
