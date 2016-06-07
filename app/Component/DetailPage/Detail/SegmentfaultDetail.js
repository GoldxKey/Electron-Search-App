import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import classNames from 'classnames';
import {connect} from 'react-redux';

class SegmentfaultDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {content, replies} = this.props;
    return (
      <div className="detail_container segmentfault_detail">
        {content}
      </div>
    )
  }
}

function mapStateToProps(state) {
  let {detail} = state;
  let {content, replies} = detail;
  return {
    content,
    replies
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SegmentfaultDetail);
