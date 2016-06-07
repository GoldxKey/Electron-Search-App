import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router';

class Tag extends Component {

  constructor(props) {
    super(props);
  }

  handleTagClick() {
    let {handleTagClick, tag} = this.props;
    handleTagClick(tag);
  }

  render() {
    let {tag} = this.props;

    return (
      <Link to="">
        <div class="detail_tag" onClick={this.handleTagClick.bind(this)}>
          {tag}
        </div>
      </Link>
    )
  }
}

export default Tag;
