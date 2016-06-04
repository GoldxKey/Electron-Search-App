import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import {
  showNewPage
} from '../../../Page/js/utils/index';
import ItemTag from './ItemTag';
import classNames from 'classnames';

require('../../../Page/stylesheet/SearchItem/stackoverflow_item.less');

class StackoverflowItem extends Component {
  constructor(props) {
    super(props);
  }

  showStackPage() {
    let {item} = this.props;
    showNewPage(item.link, item.title);
  }

  render() {
    let {item, changeTagged} = this.props;
    let {owner, tags} = item;

    let itemTags = tags.map((tag, index) => {
      return (
        <ItemTag
          key={index}
          tag={tag}
          handleTagClick={changeTagged.bind(this)}
        />
      )
    });

    let itemStatusClass = classNames('item_status', {
      answered: item.is_answered
    });

    return (
      <div className="stackoverflow_item__container">
        <div className="item_top">
          <div className="item_title" onClick={this.showStackPage.bind(this)}>{item.title}</div>
          <div className="item_tags">{itemTags}</div>
        </div>
        <div className="item_bottom">
          <div className="item__author">
            <span className="author_name">by: {owner["display_name"]}</span>
          </div>
          <div className={itemStatusClass}>
            {/*<i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;<span>{item.created_at.split('T')[0]}</span>&nbsp;&nbsp;&nbsp;*/}
            <i className="fa fa-comments-o" aria-hidden="true"></i>&nbsp;<span>{item.answer_count} </span>
          </div>
        </div>
      </div>
    )
  }
}

export default StackoverflowItem;
