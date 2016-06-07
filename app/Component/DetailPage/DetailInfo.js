import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import classNames from 'classnames';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Tag from './Tag';
import {
  changeName,
  changeSite,
  changeTime
} from '../../Redux/actions/index';
import {
  shrinkWindow
} from '../../Page/js/utils/index';

class DetailInfo extends Component {
  constructor(props) {
    super(props);
  }

  handleTagClick(tag) {
    let {changeName, changeSite, resetSearchTime} = this.props;
    changeName(tag);
    resetSearchTime();
    changeSite();
    this.shrinkWindow();
  }

  shrinkWindow() {
    let {activeMenu} = this.props;
    shrinkWindow(activeMenu);
  }

  render() {
    let {activeMenu, title, time, author, tags} = this.props;

    let detailTags = tags.map((tag, index) => {
      return (
        <Tag
          key={index}
          tag={tag}
          handleTagClick={this.handleTagClick.bind(this)}
        />
      )
    });

    return (
      <div className="detail_info">
        <div className="detail_top">
          <Link to="/">
            <i className="fa fa-angle-left" aria-hidden="true" onClick={this.shrinkWindow.bind(this)}></i>
          </Link>
          <div className="into_site">{activeMenu}</div>
        </div>
        <div className="detail_tags">{detailTags}</div>
        <div className="detail_bottom">
          <div className="author_info">
            {author.name}&nbsp;&nbsp;
            <i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;{time}
          </div>
          <div className="detail_title">
            {title}
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  let {detail, sideMenu} = state;
  let {activeMenu} = sideMenu;
  let {title, time, author, tags} = detail;
  return {
    activeMenu,
    title,
    time,
    author,
    tags
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeName: (name) => {
      dispatch(changeName(name));
    },
    changeSite: () => {
      dispatch(changeSite());
    },
    resetSearchTime: () => {
      dispatch(changeTime(0));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailInfo);
