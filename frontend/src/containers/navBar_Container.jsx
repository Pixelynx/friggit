import React, { Component } from 'react';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from '../reduxUtils.js';
import NavBar from '../components/navigation/navBar.jsx';
import { SignUp_LogInModal } from '../components/navigation/signUp_LogInModal';

class NavBarContainer extends Component {

  userLogged = (e) => {
    e.preventDefault();
    this.props.toggleLogIn(this.state.logMessage);
    this.setState({ logMessage: "" })
  }

  render() {
    console.log(this.state)
    return(
      <>
      <div>
        <NavBar
          logged={this.state.logMessage}
          handleClick={this.handleClick}
          userLogged={this.userLogged}
          />
          {SignUp_LogInModal}
      </div>
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarContainer)
