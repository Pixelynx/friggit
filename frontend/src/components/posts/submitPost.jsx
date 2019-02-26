import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

import '../../css/posts/createPost.css';

class SubmitPost extends Component {

  componentDidMount = () => {
    axios.get('/submit')
      .then(res => {
        console.log('got submit page')
      }).catch(err => console.log(err))
  }

  render() {
    return(
      <>
        <div>Posts Page</div>
      </>
    )
  }
}
