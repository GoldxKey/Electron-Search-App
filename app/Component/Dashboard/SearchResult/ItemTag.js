import React, { Component, PropTypes } from 'react';

class ItemTag extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {tag, handleClick} = this.props;

    return (
      <div className="item_tag">{tag}</div>
    )
  }
}

export default ItemTag;
