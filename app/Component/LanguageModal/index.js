import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { render } from 'react-dom';
import {connect} from 'react-redux';
require('../../Page/stylesheet/language_modal.less');

import {
  changeLanguageModalStatus,
  changeLanguage,
  fetchSearch,
  changePage
} from '../../Redux/actions/index';

import {
  LANGUAGES,
  LANGUAGE_IMAGE_URL
} from '../ConstValue';

import Language from './Language';
import AdvanceSearch from './AdvanceSearch/index';

class LanguageModal extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let $modal = $('.language_modal');
    let $modalBody = $modal.find('.modal_body');
    $modalBody.scroll((event) => {
      let $currentTop = $modalBody.scrollTop();
      if($currentTop >= 140) {
        $modal.addClass('header_fixed_top');
      }else {
        $modal.removeClass('header_fixed_top');
      }
    });
  }

  changeLanguageModalStatus() {
    this.props.changeLanguageModalStatus();
    return false;
  }

  changeLanguage(language) {
    let {changeLanguage} = this.props;
    changeLanguage(language);
    this.research();
  }

  research() {
    let {fetchSearch, changePage} = this.props;
    changePage(0);
    this.changeLanguageModalStatus();
    fetchSearch();
  }

  render() {
    let {language} = this.props;

    let languages = Object.keys(LANGUAGES).map((name, index) => {
      return (
        <Language
          key={index}
          language={LANGUAGES[name]}
          changeLanguage={this.changeLanguage.bind(this)}
        />
      )
    });

    let currentLanguage = language.split(':')[1];

    let modalHeaderClass = classNames('modal_header', {
      all: currentLanguage === 'all',
      js: currentLanguage === 'javascript',
      html: currentLanguage === 'html',
      css: currentLanguage === 'css',
      python: currentLanguage === 'python',
      php: currentLanguage === 'php',
      ruby: currentLanguage === 'ruby',
      node: currentLanguage === 'node',
      swift: currentLanguage === 'swift',
      java: currentLanguage === 'java',
      go: currentLanguage === 'go'
    });

    return (
      <div className="modal_container">
        <div className="modal_bg" onClick={this.changeLanguageModalStatus.bind(this)}></div>
        <div className="language_modal">
          <div className="modal_button" onClick={this.research.bind(this)}>
            <i
              className="fa fa-search fa-lg search_icon"
              aria-hidden="true"
            />
          </div>

          <div className={modalHeaderClass}>
            <div className="language_name_container">
              <span>当前搜索语言</span>
              <div>{language.split(':')[1]}</div>
            </div>
          </div>

          <div className="modal_body">
            <div className="modal_body_container">
              <div className="languages_area">
                {languages}
              </div>
              <AdvanceSearch />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    language: state.parameters.language
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeLanguageModalStatus: () => {
      dispatch(changeLanguageModalStatus(false));
    },
    changeLanguage: (language) => {
      dispatch(changeLanguage(language));
    },
    fetchSearch: () => {
      dispatch(fetchSearch());
    },
    changePage: (page) => {
      dispatch(changePage(page));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageModal);
