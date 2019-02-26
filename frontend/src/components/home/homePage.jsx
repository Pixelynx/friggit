import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../navigation/navBar.jsx';
import { CreatePostCommunityButton } from '../posts/createPostCommButton.jsx';

import '../../css/home/homePage.css';

class HomePage extends Component {

componentDidMount = () => {
  axios.get('/')
    .then(res => {
      console.log(res)
    }).catch(err => console.log(err))
}

  render() {
    return(
      <>
        <NavBar />
        <div className='home_page'></div>
        <CreatePostCommunityButton />
      </>
    )
  }
}

export default HomePage;
