import React, { Component, PropTypes } from 'react';
import className from 'classnames';
import {connect} from 'react-redux';
require('../../Page/stylesheet/side_menu.less');
import SiteItem from './SiteItem';

import {
  changeSideMenuStatus,
  toggleSideMenuFullMode
} from '../../Redux/actions/index';

import {
  SITE_LOGOS
} from '../ConstValue';

class SideMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {showSideMenu, closeSideMenu} = this.props;

    let sideMenuContainer = className('side_menu_container', {
      active: showSideMenu
    });

    let siteItems = Object.keys(SITE_LOGOS).map((site, index) => {
      return (
        <SiteItem
          key={index}
          siteName={site}
          siteLogo={SITE_LOGOS[site].logo}
        />
      )
    });

    return (
      <div className={sideMenuContainer}>
        <div className="side_menu_layer" onClick={closeSideMenu.bind(this)}></div>
        <div className="side_menu_content">
          <div className="content_logo_container">
            {siteItems}
          </div>
        </div>
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
