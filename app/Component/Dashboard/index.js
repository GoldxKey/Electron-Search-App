import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
// import {clipboard, remote} from 'electron';
import {connect} from 'react-redux';
import Push from 'push.js';
import classNames from 'classnames';

import {
  fetchItems,
  changeLanguageModalStatus,
  changeMessage,
  loadNextPage,
  changeSite
} from '../../Redux/actions/index';
import {
  LANGUAGES
} from '../ConstValue';
import {
  GITHUB,
  STACKOVERFLOW,
  CNODEJS
} from '../../Redux/ConstValue/BaseUrl';

import FAB from '../FAB/index';
import Search from './Search';
import SearchResult from './SearchResult/index';
import EmptyContainer from '../EmptyContainer/index';
import LoadingContainer from '../LoadingContainer/index';
import LanguageModal from '../LanguageModal/index';
import Message from '../Message/index';

require('../../Page/stylesheet/dashboard.less');
const ipcRenderer = require('electron').ipcRenderer;

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let {totalCount, fetchItems, loadNextPage} = this.props;
    this.props.fetchItems();
    Push.create('Hey',{
      body: 'I\'m a desktop app, built by Electron & React & Redux',
      icon: '../../Page/image/gundamcat.png',
      timeout: 6000
    });

    let $search = $('#top_search');
    let $searchTop = $search.offset().top;
    let $searchHeight = $search.height();

     $(window).scroll(() => {
       let $currentTop = $(document).scrollTop();
       if($currentTop >= $searchTop + $searchHeight/2) {
         $search.parent().addClass('active');
       }else {
         $search.parent().removeClass('active');
       }
       let $searchResultHeight = $('.search_result_container').height();
       if($currentTop >= $searchResultHeight - 800) {
         loadNextPage();
       }
     });

     ipcRenderer.on('changeSite', (event, site) => {
       let {changeSite, activeMenu} = this.props;
       if(activeMenu !== site) {
         changeSite(site);
       }
     });
  }

  render() {
    let {totalCount, loading, changeLanguageModalStatus, languageModal, language, activeMenu} = this.props;

    let container = (<EmptyContainer />), changeLanguageModal;

    if(languageModal) {
      changeLanguageModal = (<LanguageModal />);
    }

    if (loading) {
      container = (<LoadingContainer />);
    }else if (totalCount > 0) {
      container = (<SearchResult />);
    }

    let iconUrl = LANGUAGES[language] ? LANGUAGES[language].image : LANGUAGES["all"].image;

    let dashboardContainerClass = classNames('dashboard_container', {
      'main_stackoverflow': activeMenu === STACKOVERFLOW || activeMenu === CNODEJS,
      'main_github': activeMenu === GITHUB
    });

    let fab;
    if(activeMenu === GITHUB) {
      fab = (
        <FAB
          handleClick={changeLanguageModalStatus.bind(this)}
          image={iconUrl}
        />
      );
    }

    return (
      <div className={dashboardContainerClass}>
        <div className="dashboard" >
          {fab}
          <Message />
          <Search />
          {container}
        </div>
        {changeLanguageModal}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    totalCount: state.searchResult.totalCount,
    loading: state.modal.loading,
    languageModal: state.modal.languageModal,
    language: state.parameters.language,
    activeMenu: state.sideMenu.activeMenu
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchItems: () => {
      dispatch(fetchItems());
    },
    changeLanguageModalStatus: () => {
      dispatch(changeMessage('选择要搜索的编程语言', 'positive'));
      dispatch(changeLanguageModalStatus(true));
    },
    loadNextPage: () => {
      dispatch(loadNextPage());
    },
    changeSite: (site) => {
      dispatch(changeSite(site));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
