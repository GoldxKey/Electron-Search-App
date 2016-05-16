import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
require('../../Page/stylesheet/fab.less');

class FAB extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="fab"></div>
    )
  }
}

export default FAB;
