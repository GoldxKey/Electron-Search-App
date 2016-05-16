import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
require('../../Page/stylesheet/fab.less');

class FAB extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {handleClick} = this.props;
    return (
      <div className="fab" onClick={handleClick.bind(this)}></div>
    )
  }
}

export default FAB;
