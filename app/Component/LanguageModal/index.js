import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { render } from 'react-dom';
import {connect} from 'react-redux';
require('../../Page/stylesheet/language_modal.less');

import {
  changeLanguageModalStatus,
  changeLanguage,
  fetchItems,
  changePage
} from '../../Redux/actions/index';

import {
  LANGUAGES
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
    let {fetchItems, changePage} = this.props;
    changePage(0);
    this.changeLanguageModalStatus();
    fetchItems();
  }

  render() {
    let {language} = this.props;

    let languages = Object.keys(LANGUAGES).map((name, index) => {
      if(LANGUAGES[name]) {
        return (
          <Language
            key={index}
            language={LANGUAGES[name]}
            changeLanguage={this.changeLanguage.bind(this)}
          />
        )
      }
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

          <div className="modal_header" style={{backgroundImage: 'url(' + LANGUAGES[language].banner + ')'}}>
            <div className="language_name_container">
              <span>当前搜索语言</span>
              <div>{language}</div>
            </div>
          </div>

          <div className="modal_body">
            <div className="modal_body_container">
              <div className="languages_area">
                {languages}
              </div>
              <AdvanceSearch search={this.research.bind(this)}/>
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
    fetchItems: () => {
      dispatch(fetchItems());
    },
    changePage: (page) => {
      dispatch(changePage(page));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageModal);
