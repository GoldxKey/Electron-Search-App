import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import {
  changeName,
  fetchItems,
  changeSideMenuStatus
} from '../../Redux/actions/index';
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
    let {name, language, openSideMenu} = this.props;

    return (
      <div className="top_search_container">
        <div className="current_language">{language}</div>
        <div className="search_banner"></div>
        <div className="top_search" id="top_search">
          <i
            className="fa fa-github fa-2x top_menu"
            aria-hidden="true"
            onClick={openSideMenu.bind(this)}
          />
          <input
            className="search_input"
            value={name}
            onChange={this.changeName.bind(this)}
            ref="search"
            autofocus="true"
            onKeyUp={this.handleKeyUp.bind(this)}
            placeholder="tap to search"
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
    name: state.parameters.name,
    language: state.parameters.language.split(':')[1]
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
