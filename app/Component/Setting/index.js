import React, { Component, PropTypes } from 'react';
import OpenConfig from './OpenConfig/index';
import Sites from './Sites/index';
import AppInfo from './AppInfo/index';
import {connect} from 'react-redux';
require('../../Page/stylesheet/setting.less');

import {
  changeSideMenuStatus
} from '../../Redux/actions/index';

class Setting extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {openSideMenu} = this.props;
    return (
      <div className="setting_container">
        <div className="setting_panels">
          <div className="setting_banner">
            <div className="setting_layout"></div>
            <div className="setting_title">Setting</div>
            <i
              className="fa fa-bars setting_menu_icon"
              aria-hidden="true"
              onClick={openSideMenu.bind(this)}
              ></i>
          </div>
          <Sites />
          <OpenConfig />
          <AppInfo />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    openSideMenu: () => {
      dispatch(changeSideMenuStatus(true));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Setting);

// export default Setting;
