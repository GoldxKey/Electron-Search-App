import React, { Component, PropTypes } from 'react';
import className from 'classnames';
import {
  showNewPage
} from '../../../Page/js/utils/index';
require('../../../Page/stylesheet/SearchItem/cnodejs_item.less');

class CnodejsItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {item} = this.props;
    let {title, content, create_at, reply_count} = item;

    return (
      <div className="cnodejs_item_container">
        <div className="cnodejs_top">
          <div className="top_title">{title}</div>
          <div className="top_content">{content.slice(0, 101)}</div>
        </div>
        <div className="cnodejs_bottom">
          <div className="bottom_info">
            <i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;<span>{create_at.split('T')[0]}</span>
          </div>
          <div className="bottom_replay">
            <i className="replay_icon fa fa-comments-o" aria-hidden="true"></i>
            &nbsp;&nbsp;<span>{reply_count}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default CnodejsItem;
