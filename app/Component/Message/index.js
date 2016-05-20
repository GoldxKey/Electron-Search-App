import React, { Component, PropTypes } from 'react';
import className from "classnames";
import { render } from 'react-dom';
import {connect} from 'react-redux';
import {
  changeMessage
} from '../../Redux/actions/index';

require('../../Page/stylesheet/message/index.less');

class Message extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  waitForClose() {
    (() => {
      setTimeout(() => {
        this.hideMessageModal();
      }, 2000)
    })();
  }

  componentDidUpdate(prevProps, prevState) {
    // let preMessage = prevProps.msg.message;
    let {msg} = this.props;
    let {message} = msg;
    if(message) {
      this.waitForClose();
    }
  }

  hideMessageModal() {
    let {changeMessage, msg} = this.props;
    let {messageType} = msg;
    this.props.changeMessage(null, messageType);
  }

  render() {

    let {msg, messageTime} = this.props;

    let {messageType, message} = msg;

    let messageModalClass = className('message_modal', {
      default: !messageType || messageType === 'default',
      positive: messageType === 'positive',
      negative: messageType === 'negative',
      warning: messageType === 'warning',
      error: messageType === 'error',
      active: message
    });

    return (
      <div className={messageModalClass}>
        {message}
        <i className="fa fa-times message_close_button" aria-hidden="true" onClick={this.hideMessageModal.bind(this)}></i>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    msg: state.msg
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeMessage: (message, messageType = 'default') => {
      dispatch(changeMessage(message, messageType));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);
