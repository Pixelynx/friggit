import React, { Component } from 'react';
import axios from 'axios';
import PostsForm from './postForm.jsx';


import '../../css/posts/createPost.css';

class Posts extends Component {
  state = {
    subfriggit: '',
    post: {
      title_input: '',
      text_input: ''
    },
    img_vid: {
      title_input: '',
      img_vid_src: ''
    },
    link_: {
      title_input: '',
      url: ''
    },
    oc: false,
    spoiler: false,
    nsfw: false,
    isValid: false,
    submitEnabled: false
  }

  render() {

    return(
      <>
  <PostsForm
    subfriggit={this.state.subfriggit}
    post={this.state.post}
    img_vid={this.state.img_vid}
    link_={this.state.link_}
    oc={this.state.oc}
    spoiler={this.state.spoiler}
    nsfw={this.state.nsfw}
    isValid={this.state.isValid}
    submitEnabled={this.state.submitEnabled}

    />
        </>
    )
  }
}




export default Posts;
