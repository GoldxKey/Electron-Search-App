import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
require('../../Page/stylesheet/language_modal.less');

import {
  changeLanguageModalStatus
} from '../../Redux/actions/index';

class LanguageModal extends Component {
  constructor(props) {
    super(props);
  }

  changeLanguageModalStatus(e) {
    this.props.changeLanguageModalStatus();
    e.stoppropagation();
    e.preventDefault();
    return false;
  }

  render() {

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
          <div className="modal_header"></div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeLanguageModalStatus: () => {
      dispatch(changeLanguageModalStatus(false));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageModal);
