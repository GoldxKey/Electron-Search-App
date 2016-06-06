import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import classNames from 'classnames';

class DetailInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="detail_info">
        <div className="detail_top"></div>
        <div className="detail_tags"></div>
        <div className="detail_bottom"></div>
      </div>
    )
  }
}

export default DetailInfo;
