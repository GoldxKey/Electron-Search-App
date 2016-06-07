import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import DISTRIBUTE_SEARCH_ITEMS from './DistributeItems';

import {
  changeTagged,
  changeLanguage,
  fetchItems,
  fetchDetail
} from '../../Redux/actions/index';

class SearchResult extends Component {
  constructor(props) {
    super(props);
  }

  changeTagged(tag) {
    let {changeTagged, fetchItems, changeLanguage} = this.props;
    changeTagged(tag);
    // changeLanguage(tag);
    fetchItems();
  }

  render() {
    let {items, activeMenu, fetchDetail} = this.props;

    let SearchItem = DISTRIBUTE_SEARCH_ITEMS[activeMenu];

    let searchItems = items.map((item, index) => {
      return (
        <SearchItem
          key={index}
          item={item}
          changeTagged={this.changeTagged.bind(this)}
          fetchDetail={fetchDetail.bind(this)}
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
    items: state.searchResult.items,
    activeMenu: state.sideMenu.activeMenu
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeTagged: (tag) => {
      dispatch(changeTagged(tag));
    },
    changeLanguage: (language) => {
      dispatch(changeLanguage(language));
    },
    fetchItems: () => {
      dispatch(fetchItems());
    },
    fetchDetail: (id, type) => {
      dispatch(fetchDetail(id, type));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
