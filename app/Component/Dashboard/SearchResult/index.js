import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import DISTRIBUTE_SEARCH_ITEMS from './DistributeItems';

class SearchResult extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {items, activeMenu} = this.props;

    let SearchItem = DISTRIBUTE_SEARCH_ITEMS[activeMenu];

    console.log(items);
    let searchItems = items.map((item, index) => {
      return (
        <SearchItem
          key={index}
          item={item}
        />
      )
    })

    return (
      <div className="search_result_container">
        {searchItems}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.searchReasult.items,
    activeMenu: state.sideMenu.activeMenu
  }
}

export default connect(mapStateToProps)(SearchResult);
