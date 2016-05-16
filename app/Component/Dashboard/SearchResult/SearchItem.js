import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

class SearchItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {item} = this.props;
    let description = item.description ? item.description : 'doesn\'t has description yet.';
    return (
      <div className="search_item">
        <div className="item_top">
          <div className="top_image_container">
            <img className="top_image" src={item.owner.avatar_url} />
            <div className="item_author_name">{item.owner.login}</div>
          </div>
          <div className="top_info_container">
            <h3>{item.name}</h3>
            <div className="info_description">{description}</div>
          </div>
        </div>
        <div className="item_bottom">
          <div className="item_status">
            <i className="fa fa-star-o" aria-hidden="true"></i>&nbsp;<span>{item.stargazers_count}</span>&nbsp;&nbsp;&nbsp;
            <i className="fa fa-code-fork" aria-hidden="true"></i>&nbsp;<span>{item.forks_count} </span>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchItem;
