import React, { Component, PropTypes } from 'react';
import className from 'classnames';
import {connect} from 'react-redux';
require('../../Page/stylesheet/side_menu.less');
import SiteItem from './SiteItem';
import { Link, IndexLink } from 'react-router';

import {
  changeSideMenuStatus,
  toggleSideMenuFullMode,
  changeSite
} from '../../Redux/actions/index';

import {
  SITE_LOGOS
} from '../ConstValue';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullScreen: false
    }
  }

  toggleFullScreen() {
    let {fullScreen} = this.state;
    this.setState({
      fullScreen: !fullScreen
    });
  }

  changeSite(site) {
    let {closeSideMenu, changeSite, activeMenu} = this.props;
    if(activeMenu !== site) {
      changeSite(site);
      closeSideMenu();
    }
  }

  render() {
    let {showSideMenu, closeSideMenu} = this.props;
    let {fullScreen} = this.state;

    let sideMenuContainer = className('side_menu_container', {
      active: showSideMenu
    });

    let siteItems = Object.keys(SITE_LOGOS).map((site, index) => {
      return (
        <IndexLink to="/">
          <SiteItem
            key={index}
            siteName={site}
            siteLogo={SITE_LOGOS[site].logo}
            handleClick={this.changeSite.bind(this)}
          />
        </IndexLink>
      )
    });

    let iconClass = className('toggle_fullscreen_button fa', {
      'fa-angle-right': !fullScreen,
      'fa-angle-left': fullScreen
    });
    let sideMenuContent = className('side_menu_content', {
      'full_modal': fullScreen
    });

    return (
      <div className={sideMenuContainer}>
        <div className="side_menu_layer" onClick={closeSideMenu.bind(this)}></div>
        <div className={sideMenuContent}>
          <i className={iconClass} aria-hidden="true" onClick={this.toggleFullScreen.bind(this)}></i>
          <div className="content_logo_container">
            {siteItems}
          </div>
          <Link to="/setting">
            <div className="side_menu_bottom">
              <i className="fa fa-cog" aria-hidden="true"></i>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    showSideMenu: state.sideMenu.showSideMenu,
    fullMode: state.sideMenu.fullMode,
    activeMenu: state.sideMenu.activeMenu
  }
}

function mapDispatchToProps(dispatch) {
  return {
    closeSideMenu: () => {
      dispatch(changeSideMenuStatus(false));
    },
    toggleSideMenuFullMode: (status) => {
      dispatch(toggleSideMenuFullMode(status));
    },
    changeSite: (menu) => {
      dispatch(changeSite(menu));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
