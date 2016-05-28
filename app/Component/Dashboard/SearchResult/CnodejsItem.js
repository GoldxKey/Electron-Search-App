import React, { Component, PropTypes } from 'react';
import className from 'classnames';
import {
  showNewPage
} from '../../../Page/js/utils/index';
import {remote} from 'electron';
require('../../../Page/stylesheet/SearchItem/cnodejs_item.less');

class CnodejsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false
    }
  }

  handleExpandChange() {
    let {expand} = this.state;
    this.setState({
      expand: !expand
    });
  }

  showCnodejsPage() {
    let {item} = this.props;
    let {id, title} = item;
    let currentWindow = remote.getCurrentWindow();
    currentWindow.setContentSize(800, 700, true);
    currentWindow.setTitle(title);
  }

  render() {
    let {expand} = this.state;
    let {item} = this.props;
    let {title, content, create_at, reply_count} = item;

    let expandIcon = className('expand_icon fa', {
      'fa-angle-down': !expand,
      'fa-angle-up': expand
    });

    let itemContent = content.slice(0, 101);
    if(expand) {
      itemContent = content.slice(0, 301);
    }

    return (
      <div className="cnodejs_item_container">
        <div className="cnodejs_top">
          <div className="top_title" onClick={this.showCnodejsPage.bind(this)}>{title}</div>
          <div className="top_content">{itemContent}</div>
        </div>
        <div className="cnodejs_bottom">
          <div className="bottom_info">
            <i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;<span>{create_at.split('T')[0]}</span>
          </div>
          <div className="bottom_replay">
            <i className="replay_icon fa fa-comments-o" aria-hidden="true"></i>
            &nbsp;&nbsp;<span>{reply_count}</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <i className={expandIcon} aria-hidden="true" onClick={this.handleExpandChange.bind(this)}></i>
          </div>
        </div>
      </div>
    )
  }
}

export default CnodejsItem;
