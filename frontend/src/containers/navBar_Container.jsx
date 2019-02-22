import React, { Component } from 'react';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from '../reduxUtils.js';
import NavBar from '../components/navigation/navBar.jsx';


class NavBarContainer extends Component {

  handleClick = () => {

  }

  render() {
    return(
      <>
      <div>
        <NavBar
            handleClick={this.handleClick}
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
