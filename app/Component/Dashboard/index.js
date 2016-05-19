import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
// import {clipboard, remote} from 'electron';
import {connect} from 'react-redux';
import {
  fetchSearch,
  changeLanguageModalStatus,
  changeMessage
} from '../../Redux/actions/index';
import {
  LANGUAGES,
  LANGUAGE_IMAGE_URL
} from '../ConstValue';

import FAB from '../FAB/index';
import Search from './Search';
import SearchResult from './SearchResult/index';
import EmptyContainer from '../EmptyContainer/index';
import LoadingContainer from '../LoadingContainer/index';
import LanguageModal from '../LanguageModal/index';
import Message from '../Message/index';

require('../../Page/stylesheet/dashboard.less');

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let {totalCount, fetchSearch} = this.props;
    if(!totalCount) {
      this.props.fetchSearch();
    }
  }

  render() {
    let {totalCount, loading, changeLanguageModalStatus, languageModal, language} = this.props;

    let container = (<EmptyContainer />), changeLanguageModal;

    if(languageModal) {
      changeLanguageModal = (<LanguageModal />);
    }

    if (loading) {
      container = (<LoadingContainer />);
    }else if (totalCount > 0) {
      container = (<SearchResult />);
    }
    let currentLanguage = language.split(':')[1];
    let languageUrl = '../' + LANGUAGE_IMAGE_URL + LANGUAGES[currentLanguage].image;

    return (
      <div className="dashboard" >
        <Message />
        <FAB
          handleClick={changeLanguageModalStatus.bind(this)}
          image={languageUrl}
        />
        <Search />
        {changeLanguageModal}
        {container}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    totalCount: state.totalCount,
    loading: state.loading,
    languageModal: state.languageModal,
    language: state.parameters.language
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSearch: () => {
      dispatch(fetchSearch());
    },
    changeLanguageModalStatus: () => {
      dispatch(changeMessage('选择要搜索的编程语言', 'positive'));
      dispatch(changeLanguageModalStatus(true));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
