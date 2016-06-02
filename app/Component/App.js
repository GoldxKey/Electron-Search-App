import React, { Component, PropTypes } from 'react';
import SideMenu from '../Component/SideMenu/index';
import Message from '../Component/Message/index';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app_container">
        <SideMenu />
        <Message />
        {this.props.children}
      </div>
    )
  }
}

export default App;
