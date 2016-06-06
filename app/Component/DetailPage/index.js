import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {
  SITE_DETAIL
} from './Detail/index';
import DetailInfo from './DetailInfo';
require('../../Page/stylesheet/detail_page.less');

class DetailPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {activeMenu} = this.props;
    let Detail = SITE_DETAIL[activeMenu];
    return (
      <div className="detail_page">
        <DetailInfo />
        <Detail />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeMenu: state.sideMenu.activeMenu,
  }
}

export default connect(mapStateToProps)(DetailPage);
