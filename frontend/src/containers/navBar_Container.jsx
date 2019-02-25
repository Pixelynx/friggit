import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../components/navigation/navBar.jsx';


class NavBarContainer extends Component {

  render() {
    return(
      <>
      <div>
        <NavBar/>

      </div>
      </>
    )
  }
}

export default connect(null, { loginModalIsShowing })(NavBarContainer)
