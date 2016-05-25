import React, { Component, PropTypes } from 'react';

class SiteItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {siteName, siteLogo, handleClick} = this.props;
    return (
      <div className="site_item_container" onClick={handleClick.bind(this, siteName)}>
        <img className="site_logo" src={siteLogo} /><br/>
        <span className="site_name">{siteName}</span>
      </div>
    )
  }
}

export default SiteItem;
