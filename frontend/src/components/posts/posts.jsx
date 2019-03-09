import React, { Component } from 'react';
import axios from 'axios';
import PostsForm from './postForm.jsx';
import * as util from '../../utils/apiCalls.js';


import '../../css/posts/createPost.css';

class Posts extends Component {

  componentDidMount = () => {
    util.getAllPosts()
    .then((res) => {
      console.log(res)
    })
  }

  render() {

    return(
      <>

        </>
    )
  }
}




export default Posts;
