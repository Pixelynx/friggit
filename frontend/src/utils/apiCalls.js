import axios from 'axios';

//GET
export const getAllPosts = () => axios.get('/posts');
