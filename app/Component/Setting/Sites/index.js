import React, { Component, PropTypes } from 'react';
import Site from './Site';
import {connect} from 'react-redux';
import {
  SITE_LOGOS
} from '../../ConstValue';
import {
  addSite,
  deleteSite
} from '../../../Redux/actions/index';

class Sites extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {sites, addSite, deleteSite} = this.props;

    let allSites = Object.keys(SITE_LOGOS).map((site, index) => {
      let active = false;
      let existSite = sites.some((s) => s === site);
      if(existSite) {
        active = true;
      }
      return (
        <Site
          key={index}
          active={active}
          logo={SITE_LOGOS[site].logo}
          site={SITE_LOGOS[site].name}
          addSite={addSite.bind(this)}
          deleteSite={deleteSite.bind(this)}
        />
      )
    });

    return (
      <div className="setting__sites">
        <div className="sites_header">chose sites you wish to search</div>
        <div className="sites_container">
          {allSites}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    sites: state.setting.sites
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addSite: (site) => {
      dispatch(addSite(site));
    },
    deleteSite: (site) => {
      dispatch(deleteSite(site));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sites);
