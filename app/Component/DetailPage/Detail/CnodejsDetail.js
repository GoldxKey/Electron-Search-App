import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
// import classNames from 'classnames';
import {connect} from 'react-redux';
import marked from 'marked';
import hljs from 'highlight.js';

class CnodejsDetail extends Component {
  constructor(props) {
    super(props);
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: (code) => {
        return hljs.highlightAuto(code).value;
      }
    });
  }

  render() {
    let {content, replies} = this.props;
    return (
      <div className="detail_container cnodejs_detail">
        <div dangerouslySetInnerHTML={{__html: marked(content)}} />
        {/*<div dangerouslySetInnerHTML={{__html: content}} />*/}
      </div>
    )
  }
}

function mapStateToProps(state) {
  let {detail} = state;
  let {content, replies} = detail;
  return {
    content,
    replies
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CnodejsDetail);
