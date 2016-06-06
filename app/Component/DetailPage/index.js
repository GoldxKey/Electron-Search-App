import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {
  SITE_DETAIL
} from './Detail/index';
import DetailInfo from './DetailInfo';
// import DetailLoading from './DetailLoading';
import LoadingContainer from '../LoadingContainer/index';
require('../../Page/stylesheet/detail_page.less');

class DetailPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {activeMenu, loading} = this.props;
    let Detail = SITE_DETAIL[activeMenu];
    let detailContainer;
    if(loading) {
      detailContainer = (
        <LoadingContainer />
      );
    }else {
      detailContainer = (
        <div className="detail_page">
          <DetailInfo />
          <Detail />
        </div>
      )
    }
    return (
      <div className="detail_page_container">
        {detailLoadingContainer}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeMenu: state.sideMenu.activeMenu,
    loading: state.detail.loading
  }
}

export default connect(mapStateToProps)(DetailPage);
