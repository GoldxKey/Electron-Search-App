import React, { Component, PropTypes } from 'react';

class ItemTag extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {tag, handleTagClick} = this.props;

    return (
      <div className="item_tag" onClick={handleTagClick.bind(this, tag)}>{tag}</div>
    )
  }
}

export default ItemTag;
