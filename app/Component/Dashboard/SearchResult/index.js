import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';

import SearchItem from './SearchItem';

class SearchResult extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {items} = this.props;
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
    items: state.items
  }
}

export default connect(mapStateToProps)(SearchResult);
