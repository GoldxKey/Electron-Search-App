import React, { Component, PropTypes } from 'react';
import className from 'classnames';
import {connect} from 'react-redux';
import SiteItem from './SiteItem';
import { Link, IndexLink } from 'react-router';
import {
  changeSideMenuStatus,
  resetSite
} from '../../Redux/actions/index';
import {
  SITE_LOGOS
} from '../ConstValue';

require('../../Page/stylesheet/side_menu.less');

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

  resetSite(site) {
    let {closeSideMenu, resetSite} = this.props;
    resetSite(site);
    closeSideMenu();
  }

  render() {
    let {showSideMenu, closeSideMenu, sites} = this.props;
    let {fullScreen} = this.state;

    let sideMenuContainer = className('side_menu_container', {
      active: showSideMenu
    });

    let siteItems = sites.map((site, index) => {
      return (
        <IndexLink to="/">
          <SiteItem
            key={index}
            siteName={SITE_LOGOS[site].name}
            siteLogo={SITE_LOGOS[site].logo}
            handleClick={this.resetSite.bind(this)}
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
            <div className="side_menu_bottom" onClick={closeSideMenu.bind(this)}>
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
    activeMenu: state.sideMenu.activeMenu,
    sites: state.setting.sites
  }
}

function mapDispatchToProps(dispatch) {
  return {
    closeSideMenu: () => {
      dispatch(changeSideMenuStatus(false));
    },
    resetSite: (site) => {
      dispatch(resetSite(site));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
