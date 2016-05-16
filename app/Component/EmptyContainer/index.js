import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
require('../../Page/stylesheet/default_container.less');

class EmptyContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="default_container">
        <div className="default_area">
          <img src="../Page/image/gundamcat.png"/><br/>
          <span>hey, welcome to G-Search</span>
        </div>
      </div>
    )
  }
}

export default EmptyContainer;
