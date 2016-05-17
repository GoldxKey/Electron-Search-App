import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { render } from 'react-dom';
import {connect} from 'react-redux';
require('../../Page/stylesheet/language_modal.less');

import {
  changeLanguageModalStatus,
  changeLanguage,
  fetchSearch
} from '../../Redux/actions/index';

import {
  LANGUAGES,
  LANGUAGE_IMAGE_URL
} from '../ConstValue';

import Language from './Language';

class LanguageModal extends Component {
  constructor(props) {
    super(props);
  }

  changeLanguageModalStatus() {
    this.props.changeLanguageModalStatus();
    return false;
  }

  changeLanguage(language) {
    let {changeLanguage, fetchSearch} = this.props;
    changeLanguage(language);
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
      nodejs: currentLanguage === 'nodejs',
      swift: currentLanguage === 'swift',
      java: currentLanguage === 'java'
    })

    return (
      <div className="modal_container">
        <div className="modal_bg" onClick={this.changeLanguageModalStatus.bind(this)}></div>
        <div className="language_modal">
          <div className="modal_button">
            <i
              className="fa fa-search fa-lg search_icon"
              aria-hidden="true"
            />
          </div>

          <div className={modalHeaderClass}></div>

          <div className="modal_body">
            <div className="languages_area">
              {languages}
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageModal);
