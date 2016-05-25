import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import {
  showNewPage
} from '../../../Page/js/utils/index';
import ItemTag from './ItemTag';

require('../../../Page/stylesheet/SearchItem/stackoverflow_item.less');

class StackoverflowItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {item} = this.props;
    let {owner, tags} = item;

    let itemTags = tags.map((tag, index) => {
      return (
        <ItemTag
          key={index}
          tag={tag}
        />
      )
    });

    return (
      <div className="stackoverflow_item__container">
        <div className="item_top">
          <div className="item_title">{item.title}</div>
          <div className="item_tags">{itemTags}</div>
        </div>
        <div className="item_bottom">
          <div className="item__author">
            {/*<img className="author_profile" src={owner["profile_image"]} />*/}
            <span className="author_name">{owner["display_name"]}</span>
          </div>
          <div className="item_status">

          </div>
        </div>
      </div>
    )
  }
}

export default StackoverflowItem;
