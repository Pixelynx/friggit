import React, { Component } from 'react';
import axios from 'axios';
import PostsForm from './postForm.jsx';
import * as util from '../../utils/apiCalls.js';

import '../../css/posts/allPosts.css';

class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount = () => {
    util.getAllPosts()
    .then((res) => {
      let posts = res.data.posts
      posts.map(post => {
      this.state.posts.push(post)
      this.displayPosts()
    })
    })
  }

  displayPosts = () => {
    let allPosts = this.state.posts.map(post => {
      return (<div className='post'>{post.title}</div>)
    })
    if(!this.state.posts) {
      return(
        <div className='no_posts'>No posts yet.</div>
      )
    } else {
      return allPosts
    }
  }



  render() {
    console.log(this.state)


    return(
      <>
        </>
    )
  }
}




export default Posts;
