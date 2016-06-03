import React, { Component, PropTypes } from 'react';

class AppInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="setting__app_info">
        <div className="app_info">App Info</div>
        <div className="info_developer">
          <div className="info_title">Developer</div>
          <div className="info_content">ecmadao</div>
        </div>
        <div className="info_tech">
          <div className="info_title">Technology Stack</div>
          <div className="info_content">electron react redux react-router webpack</div>
        </div>
      </div>
    )
  }
}

export default AppInfo;
