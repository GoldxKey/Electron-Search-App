import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
// import {clipboard, remote} from 'electron';
import {connect} from 'react-redux';
import {
  fetchSearch
} from '../../Redux/actions/index';

import FAB from '../FAB/index';
import Search from './Search';
import SearchResult from './SearchResult/index';
import EmptyContainer from '../EmptyContainer/index';
import LoadingContainer from '../LoadingContainer/index';

require('../../Page/stylesheet/dashboard.less');

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSearch();
  }

  render() {
    let {totalCount, loading} = this.props;

    let container = (<EmptyContainer />);

    if (loading) {
      container = (<LoadingContainer />);
    }else if (totalCount > 0) {
      container = (<SearchResult />);
    }

    return (
      <div className="dashboard" >
        <FAB />
        <Search />
        {container}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    totalCount: state.totalCount,
    loading: state.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSearch: () => {
      dispatch(fetchSearch());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
