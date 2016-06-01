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

  toggleSite(site) {
    let {addSite, deleteSite} = this.props;
  }

  render() {
    let {sites} = this.props;

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
          site={SITE_LOGOS[site].name}
          toggleSite={this.toggleSite.bind(this)}
        />
      )
    });

    return (
      <div className="setting__sites">
        <div className="sites_header">chose the site you wish to search</div>
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
