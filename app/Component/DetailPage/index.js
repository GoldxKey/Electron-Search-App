import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import classNames from 'classnames';
// import {
//   SITE_DETAIL
// } from './Detail/index';
import DetailInfo from './DetailInfo';
import Detail from './Detail/index';
import LoadingContainer from '../LoadingContainer/index';
import FAB from '../FAB/index';
require('../../Page/stylesheet/detail_page.less');

class DetailPage extends Component {
  constructor(props) {
    super(props);
  }

  handleFabClick() {

  }

  render() {
    let {activeMenu, loading, hasReply, replyNum} = this.props;

    // let Detail = SITE_DETAIL[activeMenu];
    let detailContainer;
    if(loading) {
      detailContainer = (
        <LoadingContainer />
      );
    }else {
      let fab;
      if(hasReply) {
        let fabIcon;
        if(replyNum) {
          fabIcon = "fa-commenting";
        }else {
          fabIcon = "fa-commenting-o";
        }
        fab = (
          <FAB
            activeTheme={replyNum > 0}
            fabIcon={fabIcon}
            handleClick={this.handleFabClick.bind(this)}
          />
        );
      }
      detailContainer = (
        <div className="detail_page">
          <DetailInfo />
          <Detail />
          {fab}
        </div>
      );
    }
    return (
      <div className="detail_page_container">
        {detailContainer}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeMenu: state.sideMenu.activeMenu,
    loading: state.detail.loading,
    hasReply: state.detail.hasReply,
    replyNum: state.detail.replies.length
  }
}

export default connect(mapStateToProps)(DetailPage);
