import { ADD_POST, EDIT_POST, DELETE_POST } from './types';

const addPost = (body) => {
  return {
    type: ADD_POST,
    payload: body
  }
};

export { addPost };
