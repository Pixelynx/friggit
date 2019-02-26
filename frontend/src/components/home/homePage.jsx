import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../navigation/navBar.jsx';

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
      </>
    )
  }
}

export default HomePage;
