import React, { Component, PropTypes } from 'react';
import OpenConfig from './OpenConfig/index';
import Sites from './Sites/index';
require('../../Page/stylesheet/setting.less');

class Setting extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="setting_container">
        <Sites />
        <OpenConfig />
      </div>
    )
  }
}

export default Setting;
