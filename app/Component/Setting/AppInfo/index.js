import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import TechInfo from './TechInfo';
import {
  changeName,
  changeSite,
  changeTime
} from '../../../Redux/actions/index';
import {
  GITHUB
} from '../../../Redux/ConstValue/BaseUrl';
import {
  TECH_LIST
} from '../../ConstValue';

class AppInfo extends Component {
  constructor(props) {
    super(props);
  }

  searchTech(tech) {
    let {changeName, changeSiteToGithub, resetSearchTime} = this.props;
    changeName(tech);
    resetSearchTime();
    changeSiteToGithub();
  }

  render() {

    let techInfo = TECH_LIST.map((info, index) => {
      return (
        <TechInfo
          key={index}
          info={info}
          searchTech={this.searchTech.bind(this)}
        />
      )
    });

    return (
      <div className="setting__app_info">
        <div className="app_info">App Info</div>
        <div className="info_developer">
          <div className="info_title">Developer</div>
          <div className="info_content">ecmadao</div>
        </div>
        <div className="info_tech">
          <div className="info_title">Technology Stack</div>
          <div className="info_content">
            {techInfo}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeName: (name) => {
      dispatch(changeName(name));
    },
    changeSiteToGithub: () => {
      dispatch(changeSite(GITHUB));
    },
    resetSearchTime: () => {
      dispatch(changeTime(0));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppInfo);
