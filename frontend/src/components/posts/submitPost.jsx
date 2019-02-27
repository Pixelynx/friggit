import React, { Component } from 'react';
import axios from 'axios';

import '../../css/posts/createPost.css';

class SubmitPost extends Component {

  componentDidMount = () => {
    axios.get('/submit')
      .then(res => {
        console.log('got submit page')
      }).catch(err => console.log('WHATS THE ERROR',err))
  }

  render() {
    return(
      <>
          <div>Posts Page</div>
      </>
    )
  }
}

export default SubmitPost;
