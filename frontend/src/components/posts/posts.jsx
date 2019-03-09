import React, { Component } from 'react';
import axios from 'axios';
import PostsForm from './postForm.jsx';
import { DisplayPosts } from './displayPosts.jsx';
import * as util from '../../utils/apiCalls.js';

import '../../css/posts/allPosts.css';

class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount = () => {
    this.makeArr()
  }

  makeArr = () => {
    axios.get('/posts')
    .then(res => {
      this.setState({ posts: res.data.posts })
    })
  }

  fetchPosts = () => {
    axios.get('/posts')
    .then(res => {
      this.setState({ posts: res.data })
    })
    .catch(err => console.log(err))
  }


  render() {
    console.log(this.state)


    return(
      <>
        <DisplayPosts/>
        </>
    )
  }
}




export default Posts;
