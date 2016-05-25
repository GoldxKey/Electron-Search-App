import React, { Component, PropTypes } from 'react';

class SiteItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {siteName, siteLogo} = this.props;
    return (
      <div className="site_item_container">
        <img className="site_logo" src={siteLogo} /><br/>
        <span className="site_name">{siteName}</span>
      </div>
    )
  }
}

export default SiteItem;
