import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginModalIsShowing } from '../actions/navActions/logInAction.js';
import NavBar from '../components/navigation/navBar.jsx';


class NavBarContainer extends Component {

  render() {
    return(
      <>
      <div>
        <NavBar
            loginClick={() => this.props.loginModalIsShowing()}
          />

      </div>
      </>
    )
  }
}

export default connect(null, { loginModalIsShowing })(NavBarContainer)
