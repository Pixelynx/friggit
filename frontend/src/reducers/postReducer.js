import { ADD_POST, DELETE_POST, DISPLAY_POSTS } from '../actions/types.js';

export const postReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter(post => post.id !== action.payload.id );
    case DISPLAY_POSTS:
      return action.posts;
    default:
      return state;
  }
};

























// export const postsAreLoading = (state = false, action) => {
//   switch (action.type) {
//     case POSTS_ARE_LOADING:
//     return action.loadingPosts;
//     break;
//     default: return state;
//     break;
//   }
// };
//
// export const addPost = (state = { posts: [] }, action) => {
//     let newState = state;
//
//     switch (action.type) {
//       case ADD_POST:
//       let idGen = newState.posts[newState.posts.length - 1].id + 1;
//       newState.posts.push({
//         id: idGen,
//         title: action.postInput,
//         body: action.postInput
//       });
//       break;
//       default: return state;
//       break;
//     }
//     return newState;
// };
//
//
// export const editPost = (state = { message: '' }, action) => {
//
//   switch (action.type) {
//     case EDIT_POST:
//     return state.message = 'Posts was edited.';
//     break;
//     default: return state;
//     break;
//   }
//   return state.message;
// };
//
// export const deletePost = (state = { message: '' }, action) => {
//   let newState = state;
//
//   switch (action.type) {
//     case DELETE_POST:
//     return state.message = 'Post was deleted.';
//     break;
//     default: return state;
//     break;
//   }
//   return state.message;
// };
//
// export const displayPosts = (state = null, action) => {
//   switch (action.type) {
//     case DISPLAY_POSTS:
//     return action.posts;
//     break;
//     default: return state;
//     break;
//   }
// };
