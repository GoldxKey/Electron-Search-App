import React, { Component, PropTypes } from 'react';
import {
  showNewPage
} from '../../../Page/js/utils/index';
require('../../../Page/stylesheet/SearchItem/stackoverflow_item.less');

class StackoverflowItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="stackoverflow_item__container">
        <div className="item_top">

        </div>
        <div className="item_bottom">
          
        </div>
      </div>
    )
  }
}

export default StackoverflowItem;
