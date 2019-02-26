import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

class SubmitPost extends Component {

  submitPostsAPI = () => {
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
