import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
require('../../Page/stylesheet/loading_container.less');

class LoadingContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="loading_container">
        <div className="loading_content">
          <img src="../Page/image/gundamcat.png"/><br/>
          <span>waiting, I'm loading</span>
        </div>
      </div>
    )
  }
}

export default LoadingContainer;
