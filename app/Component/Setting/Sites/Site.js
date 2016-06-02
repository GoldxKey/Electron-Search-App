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
    let siteClass = className('site_name', {
      active: active
    });

    return (
      <div className="setting_site">
        <div className={siteClass} onClick={this.toggleSiteActive.bind(this)}>
          {site}
        </div>
        <img className="site_logo" src={logo} />
      </div>
    )
  }
}

export default Site;
