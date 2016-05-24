import React, { Component, PropTypes } from 'react';
import className from 'classnames';
import {connect} from 'react-redux';
require('../../Page/stylesheet/side_menu.less');

import {
  changeSideMenuStatus,
  toggleSideMenuFullMode
} from '../../Redux/actions/index';

class SideMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {showSideMenu, closeSideMenu} = this.props;

    let sideMenuContainer = className('side_menu_container', {
      active: showSideMenu
    });

    return (
      <div className={sideMenuContainer}>
        <div className="side_menu_layer" onClick={closeSideMenu.bind(this)}></div>
        <div className="side_menu_content"></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    showSideMenu: state.sideMenu.showSideMenu,
    fullMode: state.sideMenu.fullMode
  }
}

function mapDispatchToProps(dispatch) {
  return {
    closeSideMenu: () => {
      dispatch(changeSideMenuStatus(false));
    },
    toggleSideMenuFullMode: (status) => {
      dispatch(toggleSideMenuFullMode(status));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
