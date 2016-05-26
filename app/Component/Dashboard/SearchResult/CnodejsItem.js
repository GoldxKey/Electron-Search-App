import React, { Component, PropTypes } from 'react';
import className from 'classnames';
import {
  showNewPage
} from '../../../Page/js/utils/index';
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

  render() {
    let {expand} = this.state;
    let {item} = this.props;
    let {title, content, create_at} = item;

    let expandIcon = className('expand_icon fa', {
      'fa-angle-down': !expand,
      'fa-angle-up': expand
    });

    let topContentClass = className('top_content', {
      expand: expand
    });

    return (
      <div className="cnodejs_item_container">
        <div className="cnodejs_top">
          <div className="top_title">{title}</div>
          <div className={topContentClass}>{content}</div>
        </div>
        <div className="cnodejs_bottom">
          <div className="bottom_info">
            <i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;<span>{create_at.split('T')[0]}</span>
          </div>
          <div className="bottom_expand">
            <i className={expandIcon} aria-hidden="true" onClick={this.handleExpandChange.bind(this)}></i>
          </div>
        </div>
      </div>
    )
  }
}

export default CnodejsItem;
