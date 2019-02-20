import React, { Component } from 'react';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from '../reduxUtils.js';
import NavBar from '../components/navigation/navBar.jsx';

class NavBarContainer extends Component {
  state = {
    logged: ""
  };

  handleClick = (event) => {
    this.setState({
      logged: "logged in"
    })
    console.log(this.state)
  }

  userLogged = (e) => {
    e.preventDefault();
    this.props.userInput(this.state.logged);
    this.setState({ logged: "" })
  }

  render() {
    return(
      <>
      <div>
        <NavBar
          logged={this.state.logged}
          handleClick={this.handleClick}
          userLogged={this.userLogged}
          />
      </div>
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarContainer)
