import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
// import classNames from 'classnames';
import {connect} from 'react-redux';
import marked from 'marked';
import hljs from 'highlight.js';

class Detail extends Component {
  constructor(props) {
    super(props);
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: (code) => {
        return hljs.highlightAuto(code).value;
      }
    });
  }

  componentDidMount() {
    $('.detail_container').bind('DOMNodeInserted', (event) => {
      $('a[href^="http"]').each(
        () => {
          if (!$(this).attr('target')) {
            $(this).attr('target', '_blank')
          }
        }
      );
    });
  }

  render() {
    let {content, replies} = this.props;
    return (
      <div className="detail_container">
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

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
