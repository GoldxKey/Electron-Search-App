import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import {
  changeName,
  fetchItems,
  changeSideMenuStatus
} from '../../Redux/actions/index';
import {
  SITE_LOGOS
} from '../ConstValue';
require('../../Page/stylesheet/top_search.less');

class Search extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  changeName() {
    let value = this.refs.search.value;
    this.props.changeName(value);
  }

  handleKeyUp(e) {
    if(e.which === 13) {
      this.handleSearch();
    }
  }

  handleSearch() {
    this.props.fetchItems()
  }

  render() {
    let {parameters, openSideMenu, activeMenu} = this.props;

    let {name} = parameters;

    let site = SITE_LOGOS[activeMenu];
    let {parameter, searchAble, logo} = site;

    let topTips = parameters[parameter];
    let searchInputText = "tap to search";
    if(!searchAble) {
      searchInputText = "unable to search";
    }

    return (
      <div className="top_search_container">
        <div className="current_language">{topTips}</div>
        <div className="search_banner"></div>
        <div className="top_search" id="top_search">

          <img src={logo} className="top_menu" onClick={openSideMenu.bind(this)} />

          <input
            className="search_input"
            value={name}
            onChange={this.changeName.bind(this)}
            ref="search"
            autofocus="true"
            onKeyUp={this.handleKeyUp.bind(this)}
            placeholder={searchInputText}
            disabled={!searchAble}
          />
          <i
            className="fa fa-search search_icon"
            aria-hidden="true"
            onClick={this.handleSearch.bind(this)}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    parameters: state.parameters,
    activeMenu: state.sideMenu.activeMenu
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeName: (name) => {
      dispatch(changeName(name));
    },
    fetchItems: () => {
      dispatch(fetchItems());
    },
    openSideMenu: () => {
      dispatch(changeSideMenuStatus(true));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
