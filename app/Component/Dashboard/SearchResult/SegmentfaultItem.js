import React, { Component, PropTypes } from 'react';
import className from 'classnames';
import {
  showNewPage
} from '../../../Page/js/utils/index';
import {
  BASE_URL_SEGMENTFAULT
} from '../../ConstValue';
require('../../../Page/stylesheet/SearchItem/segmentfault_item.less');

class SegmentfaultItem extends Component {
  constructor(props) {
    super(props);
  }

  showSfPage() {
    let {item} = this.props;
    let {title, url} = item;
    showNewPage(BASE_URL_SEGMENTFAULT + url, title);
  }

  render() {
    let {item} = this.props;
    let {title, excerpt, type, isAccepted} = item;
    let typeIconClass = className('segmentfault_type_icon fa', {
      'fa-newspaper-o': type === 'article',
      'fa-question-circle-o': type === 'question' && !isAccepted,
      'fa-trophy': type === 'question' && isAccepted
    });
    return (
      <div className="segmentfault_item_container">
        <div className="segmentfault_top">
          <div className="top_title" onClick={this.showSfPage.bind(this)}>{title}</div>
          <div className="top_content">{excerpt}</div>
        </div>
        <div className="segmentfault_bottom">
          <div className="segmentfault_type">
            <i className={typeIconClass} aria-hidden="true"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default SegmentfaultItem;
