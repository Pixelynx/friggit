import { connect } from 'react-redux';
import { addPost } from '../actions/postActions.js';
import Posts from '../components/posts/posts.jsx';

export const mapDispatchToProps = (dispatch) => {
  return {
      onAddPost: dispatch(addPost(post))
    };
};

export default connect(null, mapDispatchToProps)(Posts);
