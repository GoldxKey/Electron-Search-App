import React, { Component, PropTypes } from 'react';
import {
  showNewPage
} from '../../../Page/js/utils/index';
require('../../../Page/stylesheet/SearchItem/github_item.less');

class GithubItem extends Component {
  constructor(props) {
    super(props);
  }

  showGithubPage() {
    let {item} = this.props;
    showNewPage(item.html_url, item.full_name);
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
            <h3 onClick={this.showGithubPage.bind(this)} className="info_name">{item.name}</h3>
            <div className="info_description">{description}</div>
          </div>
        </div>
        <div className="item_bottom">
          <div className="item_time">
            <i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;<span>{item.created_at.split('T')[0]}</span>
          </div>
          <div className="item_status">
            <i className="fa fa-star-o" aria-hidden="true"></i>&nbsp;<span>{item.stargazers_count}</span>&nbsp;&nbsp;&nbsp;
            <i className="fa fa-code-fork" aria-hidden="true"></i>&nbsp;<span>{item.forks_count} </span>
          </div>
        </div>
      </div>
    )
  }
}

export default GithubItem;
