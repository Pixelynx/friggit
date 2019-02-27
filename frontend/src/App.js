import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/home/homePage.jsx';
import NavBar from './components/navigation/navBar.jsx';
import SubmitPost from './components/posts/submitPost.jsx';
import './App.css';

class App extends Component {

  render() {
    return(
      <>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/submit' component={SubmitPost} />
      </>
    )
  }
}

export default App;
