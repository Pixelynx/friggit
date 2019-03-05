import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/home/homePage.jsx';
import NavBar from './components/navigation/navBar.jsx';
import SubmitPost from './components/posts/submitPost.jsx';
import Posts from './components/posts/posts.jsx';
import './App.css';

class App extends Component {

  render() {
    return(
      <>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/submit' component={SubmitPost} />
        <Route exact path='/posts' component={Posts} />
      </>
    )
  }
}

export default App;
