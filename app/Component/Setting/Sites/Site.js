import React, { Component, PropTypes } from 'react';
import className from 'classnames';

class Site extends Component {
  constructor(props) {
    super(props);
  }

  toggleSiteActive() {
    let {addSite, deleteSite, site, active} = this.props;
    if(active) {
      deleteSite(site);
    }else {
      addSite(site);
    }
  }

  render() {
    let {site, logo, active} = this.props;
    let siteClass = className('setting_site', {
      active: active
    });

    return (
      <div className={siteClass}>
        <div className="site_check_container" onClick={this.toggleSiteActive.bind(this)}>
          <i className="fa fa-check site_checked" aria-hidden="true"></i>
        </div>
        <img className="site_logo" src={logo} />
      </div>
    )
  }
}

export default Site;
